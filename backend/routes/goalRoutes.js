const express = require("express");
const router = express.Router(); // A Router instance is a complete middleware and routing system
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
