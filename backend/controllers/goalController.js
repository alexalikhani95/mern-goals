// Get goals
// route - GET /api/goals
// The access is private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// Set goal
// route - POST /api/goals
// The access is private
const setGoal = (req, res) => {
  if (!req.body.text) {
    // If no body text, create a bad request status
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" }); // Route to create a goal
};

// Update Goal
// route - PUT /api/goals/:id
// The access is private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// Delete goal
// route - DELETE /api/goals/:id
// The access is private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
