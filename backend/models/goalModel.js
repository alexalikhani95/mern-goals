const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true, // This will automatically create a created at and updated at field
  }
);

module.exports = mongoose.model("Goal", goalSchema);
