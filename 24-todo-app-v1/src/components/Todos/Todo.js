import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={deleteTodo}>
      <RiTodoFill className={styles.reactIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
