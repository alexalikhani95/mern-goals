const express = require("express");
const router = express.Router(); // A Router instance is a complete middleware and routing system

router.get("/", (req, res) => {
  res.send({ message: "Get goals" });
});

module.exports = router;
