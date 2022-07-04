const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// Get goals
// route - GET /api/goals
// The access is private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

// Set goal
// route - POST /api/goals
// The access is private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // If no body text, create a bad request status
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal); // Route to create a goal
});

// Update Goal
// route - PUT /api/goals/:id
// The access is private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }); // req.body will be the updated text

  res.status(200).json(updatedGoal);
});

// Delete goal
// route - DELETE /api/goals/:id
// The access is private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
