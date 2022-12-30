import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm(props) {
  const { addTodo } = props;
  const [text, setText] = useState("");
  const onSubmiteHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmiteHandler}>
        <input
          className="input"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Submit" type="submit" disabled={!text.length}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
