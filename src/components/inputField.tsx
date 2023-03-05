import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        props.addTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="input_box"
        type="text"
        placeholder="Enter a task"
        value={props.todo}
        onChange={(e) => {
          props.setTodo(e.target.value);
        }}
        ref={inputRef}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
