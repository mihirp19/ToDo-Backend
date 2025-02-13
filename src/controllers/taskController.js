const { ObjectId } = require("mongodb");
const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort("-createdAt");
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const task = new Task({ title });
  await task.save();

  res.status(201).json(task);
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: new ObjectId(id) });
  if (!task) return res.status(404).json({ message: "Task not found" });
  console.log(task);
  return res.json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = await Task.findByIdAndUpdate(
    { _id: new ObjectId(id) },
    { title, completed },
    { new: true }
  );
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: "Task deleted successfully" });
};
