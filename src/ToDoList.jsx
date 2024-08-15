import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function startEditTask(index) {
    setEditIndex(index); // Armazena o índice da tarefa que está sendo editada
    setEditTaskValue(tasks[index].text); // Preenche o input de edição com o valor atual da tarefa
  }

  function saveEditTask() {
    const updatedTasks = tasks.map((task, i) =>
      i === editIndex ? { ...task, text: editTaskValue } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null); // Finaliza o modo de edição
    setEditTaskValue(""); // Limpa o input de edição
  }

  function cancelEditTask() {
    setEditIndex(null); // Cancela a edição
    setEditTaskValue(""); // Limpa o input de edição
  }

  function doneTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className='add-button'
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index} className={task.done ? 'done' : ''}>
            {editIndex === index ? (
              <div className="editing-container">
                <input
                  type="text"
                  className="editing-input"
                  value={editTaskValue}
                  onChange={(e) => setEditTaskValue(e.target.value)}
                />
                <button className="save-button" onClick={saveEditTask}>Save</button>
                <button className="cancel-button" onClick={cancelEditTask}>Cancel</button>
              </div>
            ) : (
              <>
                <span className='text'>{task.text}</span>
                <button
                  className='delete-button'
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className='edit-button'
                  onClick={() => startEditTask(index)}
                >
                  Edit
                </button>
                <button
                  className='done-button'
                  onClick={() => doneTask(index)}
                >
                  {task.done ? 'Undo' : 'Done'}
                </button>
              </>
            )}
          </li>
        )}
      </ol>
    </div>
  );
}

export default ToDoList;
