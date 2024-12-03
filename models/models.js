const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  additionalInfo: {
    firstName: String,
    lastName: String,
    phoneNumber: String,
  },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
