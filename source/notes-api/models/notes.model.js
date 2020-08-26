const mongoose = require("mongoose");
const User = require("./user.model");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  userAccount: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  updatedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", ContactSchema, "contacts");
