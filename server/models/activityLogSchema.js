const mongoose = require("mongoose");
const { Schema } = mongoose;

const activityLogSchema = new Schema({
  actionType: String,
  performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  datePerformed: { type: Date, default: Date.now },
  details: String,
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
module.exports = ActivityLog;
