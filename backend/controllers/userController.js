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
      token: generateToken(user._id),
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
  const { email, password } = req.body; // Get the email and password sent from the body

  //Check for user email
  const user = await User.findOne({ email });

  // compare the plain text password with the hashed password using bcrypt
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// Get user data
// GET /api/users/me
// access is Private
const getMe = asyncHandler(async (req, res) => {
  // Now when a user is logged in and hits this route, they should get their own info
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  // assign a new token with the id thats passed in, using the secret and it will expire in 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
