import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-green-500 text-white rounded">
        Adicionar
      </button>
    </form>
  );
};

export default AddTodo;
