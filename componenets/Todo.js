import Link from "next/link";

const Todo = ({data}) => {
  return (
    <div>
      <h3>{data.todoTitle}</h3>
      <p>description: {data.todoDesc}</p>
      <Link href={`/${data._id}`}>
        <a>More info</a>
      </Link>
      <br/>
      <Link href={`/${data._id}/edit`}>
        <a>Edit</a>
      </Link>
    </div>
  );
};

export default Todo;
