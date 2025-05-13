function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0',
      }}>
        <span
          onClick={() => toggleComplete(todo.id, todo.completed)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            cursor: 'pointer',
            flexGrow: 1,
          }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 10 }}>
          ❌
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  