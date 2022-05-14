import { FC } from "react";
import Todo from "../models/todo";
import classes from "./Todo.module.css";
const TodoComponent: FC<{ item: Todo; onDeleteItem: () => void }> = (props) => {
  const onDeleteItemHandler = () => {
    props.onDeleteItem();
  };
  return (
    <li className={classes.item} onClick={onDeleteItemHandler}>
      {props.item.name}
    </li>
  );
};

export default TodoComponent;
