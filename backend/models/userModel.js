const mongoose = require("mongoose");
const { string } = require("prop-types");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true, // email must be unique
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true, // Will give a created at and updated at field
  }
);

module.exports = mongoose.model("User", userSchema);
