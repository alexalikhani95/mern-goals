const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register new user
// POST /api/users
// access is public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body; // The body data from when a request is made to create a user

  if (!name || !email || !password) {
    res.status(400); // Bad request if no name, email or password
    throw new Error("Please add all fields");
  }

  res.json({ message: "Register User" });
});

// Authenticate a user
// POST /api/users/login
// access is public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// Get user data
// GET /api/users/me
// access is public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
