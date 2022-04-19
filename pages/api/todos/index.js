import dbConnect from "../../../utils/dbConnect";
import TodoModel from "../../../models/TodoModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  // Adds a new todo to the databse.
  if (method == "POST") {
    try {
      const todo = await TodoModel.create(req.body);
      res.status(201).json({ success: true, data: todo });
    } catch (error) {
      console.log(error);
      res.status(400).json({ sucess: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
