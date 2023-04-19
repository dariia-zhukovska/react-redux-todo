import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";

export const NewTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="add todo" />
      <input type="submit" value="Add todo" />
    </form>
  );
};
