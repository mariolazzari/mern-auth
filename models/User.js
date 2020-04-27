// User model
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  displayName: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
