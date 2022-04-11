import Head from "next/head";
import { auth } from "../firebase";
import Todo from "../componenets/Todo";
import fetch from "isomorphic-unfetch";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

const Home = () => {
  const user = useAuthState(auth)[0];
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const dataRes = await fetch(`http://localhost:3000/api/${user.uid}`);
      const { data } = await dataRes.json();
      console.log(data);
      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h2>Todos</h2>
        <div>
          {todos.map((todo) => (
            <Todo key={todo._id} data={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
