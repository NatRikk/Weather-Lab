const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package
const bcrypt = require('bcryptjs'); // Add bcrypt for password hashing and verification
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "user-data";

app.get('/', (req, res) => {
  res.send('Hello! The server is running!');
});

// Step 1: Signup route (handling user creation and password hashing)
app.post('/signup/step1', async (req, res) => {
  console.log("Step 1 endpoint hit");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required!" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    
    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User with this email already exists!" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword,
      firstName: null,
      lastName: null,
      zipcode: null,
      birthday: null,
      accountCreated: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);
    console.log("New user inserted:", result.insertedId);
    res.status(201).send({ message: "Step 1 complete!", userId: result.insertedId });
  } catch (error) {
    console.error("Error in Step 1:", error);
    res.status(500).send({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

// Step 2: User data route (Updating user profile after signup)
app.post('/user-data', async (req, res) => {
  console.log("Step 2 endpoint hit");
  const { userId, firstName, lastName, zipcode, birthday } = req.body;
  if (!userId || !firstName || !lastName || !zipcode || !birthday) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      {
        $set: {
          firstName,
          lastName,
          zipcode,
          birthday: new Date(birthday),
        },
      }
    );
    if (result.matchedCount === 0) {
      return res.status(404).send({ message: "User not found!" });
    }
    res.send({ message: "Step 2 complete!" });
  } catch (error) {
    console.error("Error in Step 2:", error);
    res.status(500).send({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

// Step 3: Login route (User login with password comparison)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required!" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    // Find the user by email
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found!" });
    }

    // Compare the entered password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send({ message: "Incorrect password!" });
    }

    res.send({ message: "Login successful!", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
