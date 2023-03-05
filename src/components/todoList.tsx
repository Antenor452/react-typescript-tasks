import React from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../models/todo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
