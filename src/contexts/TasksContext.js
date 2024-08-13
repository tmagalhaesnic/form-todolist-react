import React, { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  const addTask = (task) => setTasks([...tasks, { ...task, completed: false }]);
  const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const toggleTask = (id) => setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
  const updateTask = (id, updatedTask) => setTasks(tasks.map(task =>
    task.id === id ? updatedTask : task
  ));
  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <TasksContext.Provider value={{ tasks: filteredTasks, addTask, removeTask, toggleTask, updateTask, setSearch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
