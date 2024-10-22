const mongoose = require('mongoose');

// Define the hotel schema
const hotelSchema = new mongoose.Schema({
  imgURL: {
    type: String,
    required: true,
    trim: true,
  },
  hotelName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create a model using the schema
const Property = mongoose.model('Property', hotelSchema);

module.exports = Property;