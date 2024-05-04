const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },

  lastLogin: Date,

  profileImage: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
