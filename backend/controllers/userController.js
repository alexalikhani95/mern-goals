const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register new user
// POST /api/users
// access is public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

// Authenticate a user
// POST /api/users/login
// access is public
const loginUser = asyncHanlder(async (req, res) => {
  res.json({ message: "Login User" });
});

// Get user data
// GET /api/users/me
// access is public
const getMe = asyncHanlder(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
