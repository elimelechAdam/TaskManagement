const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
