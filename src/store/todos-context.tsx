import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

interface Context {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodosContext = createContext<Context>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

const TodosContextProvider: FC<{ children?: React.ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (todoText: string) => {
    const newTodo: Todo = { name: todoText, id: new Date().toISOString() };

    setTodos((preTodo: Todo[]) => {
      return [...preTodo, newTodo];
    });
  };

  const onDeleteTodoHandler = (id: string) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);

    setTodos(filterTodo);
  };

  const contextValue: Context = {
    items: todos,
    addTodo: onAddTodoHandler,
    deleteTodo: onDeleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
