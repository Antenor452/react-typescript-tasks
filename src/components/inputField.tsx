import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}
const inputField = (props: Props) => {
  return (
    <form className="input" onSubmit={props.addTodo}>
      <input
        className="input_box"
        type="text"
        placeholder="Enter a task"
        value={props.todo}
        onChange={(e) => {
          props.setTodo(e.target.value);
        }}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default inputField;
