const express = require("express");
const router = express.Router(); // A Router instance is a complete middleware and routing system
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
