const express = require("express");
const Task = require("../models/taskSchema");
const Project = require("../models/projectSchema");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      priority,
      projectId,
      assignedTo,
      dueDate,
      labels,
      subItems,
      progress,
    } = req.body;

    //validation for required fields
    if (!title || !projectId || !dueDate) {
      return res.status(400).send("All fields are required.");
    }

    //check if project exists
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).send("Project not found.");

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
