const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
