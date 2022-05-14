import { FC, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoComponent from "./Todo";
import classes from "./Todos.module.css";

const Todos: FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoComponent
          item={item}
          key={item.id}
          onDeleteItem={todoCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
