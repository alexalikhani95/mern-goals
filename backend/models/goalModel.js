const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // This type will be an object ID
      required: true,
      ref: "User", // reference of which id this pertains to
    },
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
