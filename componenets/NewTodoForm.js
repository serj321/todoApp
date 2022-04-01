import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";

const NewTodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <React.Fragment>
      {isSubmitting ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>New Todo:</h2>
          <TextField
            id="outlined-basic"
            label="Todo Title"
            variant="outlined"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Todo Description"
            variant="outlined"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          />
          <br />
          <Button variant="contained" color="success" onClick={addTodoHandler}>
            Add Todo
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default NewTodoForm;
