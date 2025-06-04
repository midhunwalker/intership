import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setItems([...items, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={styles.container}>
      <h2>Simple To-Do List</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '20px' },
  inputGroup: { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { marginBottom: '10px', display: 'flex', justifyContent: 'center', gap: '10px' },
  deleteBtn: { backgroundColor: '#ff4d4d', color: '#fff', border: 'none', padding: '4px 8px', cursor: 'pointer' },
};

export default TodoList;
