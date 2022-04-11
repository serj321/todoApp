import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const TodoDetails = () => {
  const [todo, setTodo] = useState("");
  const { id } = useRouter().query;
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    console.log("in effect");
    const getTodo = async () => {
      const todoData = await fetch(`http://localhost:3000/api/todos/${id}`);
      const { data } = await todoData.json();
      setTodo(data);
    };
    getTodo();
  }, []);

  const deleteTodo = async () => {
    try {
      setIsDeleting(true);
      const deleted = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });
      setIsDeleting(false);
      router.push("/");
    } catch (err) {
      setIsDeleting(false);
      console.log("caught error");
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {isDeleting ? (
        <h1>Deleting...</h1>
      ) : (
        <div>
          <h1>{todo.todoTitle}</h1>
          <p>{todo.todoDesc}</p>
          <Button variant="contained" color="error" onClick={deleteTodo}>
            Delete
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default TodoDetails;
