// Get goals
// route - GET /api/goals
// The access is private
const getGoals = (req, res) => {
  res.send({ message: "Get goals" });
};

// Set goal
// route - POST /api/goals
// The access is private
const setGoal = (req, res) => {
  res.send({ message: "Set goals" }); // Route to create a goal
};

// Update Goal
// route - PUT /api/goals/:id
// The access is private
const updateGoal = (req, res) => {
  res.send({ message: `Update goal ${req.params.id}` });
};

// Delete goal
// route - DELETE /api/goals/:id
// The access is private
const deleteGoal = (req, res) => {
  res.send({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
