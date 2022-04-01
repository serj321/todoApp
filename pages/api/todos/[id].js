import dbConnect from "../../../utils/dbConnect";
import TodoModel from "../../../models/TodoModel";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  if (method == "GET") {
    try {
      const todo = await TodoModel.findById(id);

      if (!todo) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ succes: true, data: todo });
    } catch (error) {}
  } else if (method == "PUT") {
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
  } else if (method == "DELETE") {
    try {
      const deletedTodo = await TodoModel.deleteOne({ _id: id });

      if (!deletedTodo) {
        return res.status(400).json({ success: false });
      }

      res.status(200).json({ succes: true, data: {} });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else{
    res.status(400).json({ success: false });
  }
};
