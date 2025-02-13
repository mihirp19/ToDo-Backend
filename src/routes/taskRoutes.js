const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/task/:id", getTask);
module.exports = router;
