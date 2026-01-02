const Task = require("../models/Task");

// GET TASKS
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
};

// ADD TASK
exports.addTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user,
  });
  res.status(201).json(task);
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  task.completed = !task.completed;
  await task.save();

  res.json(task);
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== req.user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
