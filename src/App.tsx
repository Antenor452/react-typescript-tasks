import React, { useState } from "react";
import InputField from "./components/inputField";
import "./App.css";
import { Todo } from "./models/todo";
import TodoList from "./components/todoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    let add,
      active = todos,
      completed = completedTodos;

    if (source.droppableId === "active") {
      add = active[source.index];
      active.splice(source.index, 1);
      console.log("OnDragStart", active);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "active") {
      active.splice(destination.index, 0, add);
      console.log("OnDragEnd", active);
    } else {
      completed.splice(destination.index, 0, add);
    }

    // console.log("todo:", active);

    // if (source.droppableId === "active") {
    //   add = active[source.index];
    //   active.splice(source.index);
    //   console.log("splice:", active);
    // } else {
    //   add = completed[source.index];
    //   completed.splice(source.index);
    //   console.log("splice:", completed);
    // }

    // if (destination.droppableId === "active") {
    //   active.splice(destination.index, 0, add);
    // } else {
    //   completed.splice(destination.index, 0, add);
    // }
    // console.log(active, completed, add);

    setTodos(active);
    setCompletedTodos(completed);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="title">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
