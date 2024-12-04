const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS package
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
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User with this email already exists!" });
    }
    const newUser = {
      email,
      password,
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

app.post('/test', (req, res) => {
  console.log("Test route hit");
  res.send({ message: "Test successful!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
