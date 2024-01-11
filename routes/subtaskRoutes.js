const express = require("express");
const router = express.Router();
const userAuth = require("../middleware/userAuth");
const { addSubtaskController } = require("../controller/subtaskController");

router.post("/addSubtask/:todoId", userAuth, addSubtaskController);

module.exports = router;
