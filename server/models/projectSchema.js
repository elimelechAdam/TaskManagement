const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  coAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
