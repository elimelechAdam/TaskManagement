const mongoose = require("mongoose");
const { Schema } = mongoose;

const subItemSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending", "hold", "in progress", "completed"],
    default: "pending",
  },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
});

const SubItem = mongoose.model("SubItem", subItemSchema);
module.exports = SubItem;
