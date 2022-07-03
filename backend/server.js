const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json()); // body parser for raw json
// To use body data, these lines of middleware need to be added
app.use(express.urlencoded({ extended: false })); //body parser for urlencoded

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
