import { AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <AnimatePresence>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default TodoList;
