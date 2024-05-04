const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dueDate: Date,
  labels: [{ type: String }],
  subtasks: [{ title: String, isCompleted: Boolean }],
  progress: { type: Number, min: 0, max: 100, default: 0 },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
