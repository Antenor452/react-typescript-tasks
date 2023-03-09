import React from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../models/todo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({
  todos,
  completedTodos,
  setTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="active">
        {(provided) => (
          <div
            className="todo_list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_list_heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <TodoListItem
                index={index}
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="completed">
        {(provided) => (
          <div
            className="todo_list remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_list_heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <TodoListItem
                index={index}
                todos={completedTodos}
                todo={todo}
                setTodos={setCompletedTodos}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
