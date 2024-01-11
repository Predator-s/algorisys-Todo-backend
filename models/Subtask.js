const mongoose = require("mongoose");

const SubtaskSchema = new mongoose.Schema(
  {
    title: String,
    color: String,
    todo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subtask", SubtaskSchema);
