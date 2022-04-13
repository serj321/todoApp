import dbConnect from "../../utils/dbConnect";
import TodoModel from "../../models/TodoModel";

dbConnect();

export default async (req, res) => {
  const {
    query: { uId },
    method,
  } = req;

  // Gets the corresponding todos for a specific user.
  if (method == "GET") {

    try {
      const todos = await TodoModel.find({userId: uId});
      res.status(200).json({ success: true, data: todos });
    }
    catch (error) {
      res.status(400).json({ sucess: false });
    }

  } 
};
