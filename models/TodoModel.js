const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todoTitle: {
    type: String,
    required: [true, "Please add a title"],
  },
  todoDesc: {
    type: String,
  },
  userId: {
    type: String,
    required: [true],
  },
});

module.exports =
  mongoose.models.TodoModel || mongoose.model("TodoModel", TodoSchema);
