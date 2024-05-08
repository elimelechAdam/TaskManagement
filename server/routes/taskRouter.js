const express = require("express");
const Task = require("../models/taskSchema");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      title,
      description,
      projectId,
      dueDate,
      labels,
      subtasks,
      progress,
      status,
      assignedTo,
    } = req.body;

    //validation for required fields
    if (!title || !projectId || !dueDate || !assignedTo) {
      return res.status(400).send("All fields are required.");
    }

    const task = new Task({
      title,
      description,
      dueDate,
      status,
      assignedTo,
    });

    await task.save();
    res.status(201).send("Task added successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Task updated successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).send("Task deleted successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//export the router
module.exports = router;
