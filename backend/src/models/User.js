const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    min: 6,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  address: {
    type: String,
    required: true,
    max: 100,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
