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

  // Check if user exists
  const userExists = await User.findOne({ email }); // Find the user by email passed in

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10); // A salt needs to be generated to hash the password. genSalt is a bcrypt method. 10 here is the number of rounds
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    // If the user was created
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
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