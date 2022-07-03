const express = require("express");
const router = express.Router(); // A Router instance is a complete middleware and routing system
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
