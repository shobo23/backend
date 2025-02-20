const mongoose = require("mongoose");

const taskManagerSchema = new mongoose.Schema({
  userName: {
    type: String,
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
  task: [
    {
      title: { type: String, required: true },
      description: { type: String },
      completed: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("user_and_task", taskManagerSchema);
