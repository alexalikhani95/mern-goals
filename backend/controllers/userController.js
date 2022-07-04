// Register new user
// POST /api/users
// access is public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// Authenticate a user
// POST /api/users/login
// access is public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// Get user data
// GET /api/users/me
// access is public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
