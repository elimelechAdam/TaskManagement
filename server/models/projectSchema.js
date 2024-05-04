const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // You can add fields for project status, deadlines, etc.
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
