const express = require("express");
const router = express.Router(); // A Router instance is a complete middleware and routing system

router.get("/", (req, res) => {
  res.send({ message: "Get goals" });
});

router.post("/", (req, res) => {
  res.send({ message: "Set goals" }); // Route to create a goal
});

router.put("/:id", (req, res) => {
  // Put requests need an ID
  res.send({ message: `Update goal ${req.params.id}` });
});

router.get("/", (req, res) => {
  res.send({ message: "Get goals" });
});

module.exports = router;
