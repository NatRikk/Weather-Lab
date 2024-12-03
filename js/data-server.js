const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB configuration
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "user-data";

// Signup route
app.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName, zipcode, birthday } = req.body;

  if (!email || !password || !firstName || !lastName || !zipcode || !birthday) {
    return res.status(400).send({ message: "All fields are required!" });
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

    // Create a new user document
    const newUser = {
      email,
      password, // Note: Password is stored as plain text (not recommended for production)
      firstName,
      lastName,
      lastLoggedIn: null, // Initially null
      accountCreated: new Date(), // Current timestamp
      zipcode,
      birthday: new Date(birthday), // Ensure it's in Date format
    };

    // Insert the new user into the database
    const result = await usersCollection.insertOne(newUser);
    res.status(201).send({ message: "Signup successful!", userId: result.insertedId });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Internal server error." });
  } finally {
    await client.close();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


