const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB configuration
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "user-data";

// Step 1: Save email and password
app.post('/signup/step1', async (req, res) => {
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

    // Create a partial user document
    const newUser = {
      email,
      password, // Note: Store as plain text for simplicity; hash in production.
      firstName: null,
      lastName: null,
      zipcode: null,
      birthday: null,
      accountCreated: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);
    res.status(201).send({ message: "Step 1 complete!", userId: result.insertedId });
  } catch (error) {
    console.error("Error in Step 1:", error);
    res.status(500).send({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

// Step 2: Save additional details
app.post('/user-data', async (req, res) => {
  const { userId, firstName, lastName, zipcode, birthday } = req.body;

  if (!userId || !firstName || !lastName || !zipcode || !birthday) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    // Update the user document with additional details
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


