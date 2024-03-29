import dbConnect from "../../../utils/dbConnect";
import TodoModel from "../../../models/TodoModel";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  // Returns a specific todo.
  if (method == "GET") {
    try {
      const todo = await TodoModel.findById(id);
      if (!todo) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ succes: true, data: todo });
    } catch (error) {}
  }

  // Uses an id to find a specific todo and then updates that todo with the new data in the body.
  else if (method == "PUT") {
    try {
      const todo = await TodoModel.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!todo) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ succes: true, data: todo });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  }

  // uses an id to find a specifc todo and deletes it.
  else if (method == "DELETE") {
    console.log("in delete");
    try {
      const deletedTodo = await TodoModel.deleteOne({ _id: id });

      if (!deletedTodo) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ succes: true, data: {} });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
