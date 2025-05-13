import { useEffect, useState } from 'react';
import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot
} from 'firebase/firestore';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const todosRef = collection(db, 'todos');

  useEffect(() => {
    const unsubscribe = onSnapshot(todosRef, snapshot => {
      const todosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async (text) => {
    await addDoc(todosRef, {
      text,
      completed: false
    });
  };

  const toggleComplete = async (id, completed) => {
    const todoDoc = doc(db, 'todos', id);
    await updateDoc(todoDoc, {
      completed: !completed
    });
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
      <h1> chela  To-Do</h1>
      <TodoInput addTodo={addTodo} />

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFilter('all')}>All</button>{' '}
        <button onClick={() => setFilter('active')}>Active</button>{' '}
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleComplete={(id, completed) => toggleComplete(id, completed)}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
