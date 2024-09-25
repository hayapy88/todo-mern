const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please input a title."],
    trim: true,
    maxLength: [100, "Title cannot be more than 100 characters."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
