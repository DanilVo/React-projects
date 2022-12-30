import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);
  const [deleteButtonStatus, setDeleteButtonStatus] = useState(true);

  useEffect(() => {
    if (todos.some((todo) => todo.isCompleted)) {
      setDeleteButtonStatus(false);
    } else {
      setDeleteButtonStatus(true);
    }
  }, [todos]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const editTodoHandler = () => {
    setTodos(<input></input>)
  }

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deletCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deletCompletedTodosHandler}
          deleteButtonStatus={deleteButtonStatus}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        editTodo={editTodoHandler}
      />
      <h2>
        {completedTodosCount > 0
          ? `You have completed ${completedTodosCount} ${
              completedTodosCount > 1 ? "todos" : "todo"
            }!`
          : ""}
      </h2>
    </div>
  );
}

export default App;
