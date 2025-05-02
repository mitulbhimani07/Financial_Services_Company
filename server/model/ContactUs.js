const mongoose = require('mongoose');

// Define the schema for the Contact Us form
const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    // required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const ContactUs = mongoose.model('ContactUs', ContactUsSchema);

module.exports = ContactUs;