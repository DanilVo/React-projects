import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmiteHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={onSubmiteHandler}>
      <input
      className='input'
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submite</button>
    </form>
  );
}

export default TodoForm;
