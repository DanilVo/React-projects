import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return !todos.length ? (
    <h2>Todo list is empty</h2>
  ) : (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={() => deleteTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
