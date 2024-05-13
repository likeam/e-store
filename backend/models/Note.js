const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "Employee",
    },

    completed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestemps: true,
  }
);

module.exports = mongoose.module("Note", noteSchema);
