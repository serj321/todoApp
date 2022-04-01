import dbConnect from "../../../utils/dbConnect";
import TodoModel from "../../../models/TodoModel";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  if (method == "GET") {

    try {
      const todos = await TodoModel.find({});
      res.status(200).json({ success: true, data: todos });
    }
    catch (error) {
      res.status(400).json({ sucess: false });
    }

  } else if (method == "POST") {

    try {
      const todo = await TodoModel.create(req.body)
      res.status(201).json({success: true, data: todo})
    } 
    catch (error) {
      console.log(error);
      res.status(400).json({ sucess: false });
    }

  }
};
