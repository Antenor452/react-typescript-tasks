import React, { useState } from "react";
import { Todo } from "../models/todo";
import "./style.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoListItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [tempTodo, setTempTodo] = useState<string>(todo.todo);

  const handleDone = (id: string) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleUpdate = (id: string) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, todo: tempTodo } : todo
      )
    );
    setEditMode(false);
  };
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <div className="todo_item">
      <form
        className="todo_item_text"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(todo.id);
        }}
      >
        {editMode ? (
          <input
            type="text"
            value={tempTodo}
            onChange={(e) => setTempTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
      </form>
      <AiFillEdit className="todo_item_icon" onClick={toggleEditMode} />
      <AiFillDelete
        className="todo_item_icon"
        onClick={() => handleDelete(todo.id)}
      />
      <MdOutlineDone
        className="todo_item_icon"
        onClick={() => handleDone(todo.id)}
      />
    </div>
  );
};

export default TodoListItem;
