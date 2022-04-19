const mongoose = require("mongoose");
// Model for how a todo is going to be stored on the database and how it will be retrieved.
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
