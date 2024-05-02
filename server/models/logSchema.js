const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema({
  task: {
    type: Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
