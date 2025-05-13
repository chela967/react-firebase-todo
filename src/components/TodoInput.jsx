import { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: 8, fontSize: 16 }}
      />
    </form>
  );
}

export default TodoInput;
