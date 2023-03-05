import React, { useState } from "react";
import InputField from "./components/inputField";
import "./App.css";
import { Todo } from "./models/todo";
import TodoList from "./components/todoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo === "") {
      alert("Enter todo");
      return;
    }
    setTodos([
      ...todos,
      { id: Date.now().toString(), todo: todo, isDone: false },
    ]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="title">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
