const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum length for the password
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures the email is unique
        trim: true,
        lowercase: true // Converts email to lowercase
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true, // Ensures the phone number is unique
        trim: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;