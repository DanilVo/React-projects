import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { AiOutlineEdit } from "react-icons/ai";
import { FaCheck } from 'react-icons/fa';

function Todo({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div
      className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}
    >
      <RiTodoFill className={styles.reactIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <AiOutlineEdit className={styles.checkIcon} onClick={() => editTodo()}/>
    </div>
  );
}

export default Todo;
