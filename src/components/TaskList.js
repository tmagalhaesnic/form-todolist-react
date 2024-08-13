import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, addTask, setSearch } = useTasks();
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask({ id: Date.now(), text: taskInput });
      setTaskInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Lista de Tarefas</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleAddTask} className="w-full bg-blue-500 text-white py-2 rounded">Adicionar Tarefa</button>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mt-4 mb-2"
        placeholder="Pesquisar tarefas"
      />
      {tasks.length > 0 ? (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="text-gray-500">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};

export default TaskList;
