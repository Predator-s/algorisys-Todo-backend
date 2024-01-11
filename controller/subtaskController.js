const Subtask = require("../models/Subtask");
const mongoose = require("mongoose");

exports.addSubtaskController = async (req, res) => {
  try {
    const { todoId } = req.params;
    const subtask = await Subtask.create({
      title: "example subtask",
      color: "red",
      todo: mongoose.Types.ObjectId("658558f7f597dc38199cccd2"),
    });
    const saved = await subtask.save();
    console.log(saved);

    // inserting task

    res.status(200).json({
      success: true,
      message: "subtask successfully added",
      subtask,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
