import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const EditTodo = ({data}) => {
  const [todoTitle, setTodoTitle] = useState(data.todoTitle);
  const [todoDesc, setTodoDesc] = useState(data.todoDesc);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const user = useAuthState(auth)[0];
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateTodo();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const submitHandler = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!todoTitle) {
      err.title = "Title is required";
    }
    if (!todoDesc) {
      err.description = "Description is required";
    }

    return err;
  };

  const updateTodo = async() =>{
    try{
      const res = await fetch(`http://localhost:3000/api/todos/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            "Acceept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({todoTitle, todoDesc, userId: user.uid})
        }
      )
      router.push("/");
    } catch (err){
      console.log(err);
    }
  }

  return (
    <div>
      {isSubmitting ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={submitHandler}>
          <h2>Edit Todo:</h2>
          <TextFieldStyled
            id="formTodoTitle"
            name="todoTitle"
            label="Todo Title"
            variant="outlined"
            error={errors.title}
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          {errors.title ? <InputError>{errors.title}</InputError> : ""}
          <TextFieldStyled
            id="formTodoDesc"
            name="todoDesc"
            label="Todo Description"
            variant="outlined"
            error={errors.description}
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
          {errors.description ? <InputError>{errors.description}</InputError> : ""}

          <Button variant="contained" color="success" type="submit">
            Update Todo
          </Button>
        </form>
      )}
    </div>
  );
};

const InputError = styled.div`
  color: red;
  margin-bottom: 1.5em;
`;
const TextFieldStyled = styled(TextField)`
  display: block;
  margin-bottom: .5em;
`;

export default EditTodo;

export async function getServerSideProps(context){
  const {id} = context.params
  const res = await fetch(`http://localhost:3000/api/todos/${id}`)
  const {data} = await res.json()

  return { props: {data} }
}