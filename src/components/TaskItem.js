import React from 'react';
import { useTasks } from '../contexts/TasksContext';

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
      <div>
        <button onClick={() => toggleTask(task.id)} className="mr-2 text-blue-500">{task.completed ? 'Desmarcar' : 'Concluir'}</button>
        <button onClick={() => removeTask(task.id)} className="text-red-500">Remover</button>
      </div>
    </div>
  );
};

export default TaskItem;
