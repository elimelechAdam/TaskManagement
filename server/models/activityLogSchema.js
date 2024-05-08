const mongoose = require("mongoose");
const { Schema } = mongoose;

const activityLogSchema = new Schema({
  actionType: String,
  performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  datePerformed: { type: Date, default: Date.now },
  details: String,
  referencedItem: { type: mongoose.Schema.Types.ObjectId, refPath: "onModel" },
  onModel: { type: String, enum: ["Task", "SubItem"], required: true },
});

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
module.exports = ActivityLog;
