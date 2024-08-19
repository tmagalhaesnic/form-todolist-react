import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function ToDoList() {
  const { isAuthenticated, userName,logout } = useAuth();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");
  const [taskError, setTaskError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
    setTaskError("");
  }

  function addTask() {
    if (newTask.trim() === '') {
      setTaskError(" ");
      return;
    }
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
    setTaskError("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function startEditTask(index) {
    setEditIndex(index);
    setEditTaskValue(tasks[index].text);
  }

  function saveEditTask() {
    const updatedTasks = tasks.map((task, i) =>
      i === editIndex ? { ...task, text: editTaskValue } : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTaskValue("");
  }

  function cancelEditTask() {
    setEditIndex(null);
    setEditTaskValue("");
  }

  function doneTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  function handleSearchChange(event){
    setSearchTerm(event.target.value);
  }

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
 
  return (
     <div className="to-do-list">
      <header className="header">
        <h1>Lista de Tarefas</h1>
        <p>Bem-vindo, {userName}!</p>
      </header>

      <div>
        <input
          type='text'
          placeholder='Insira uma task...'
          value={newTask}
          onChange={handleInputChange}
          className={taskError ? 'error-input' : ''}
        />
        <button
          className='add-button'
          onClick={addTask}
        >
          Add
        </button>
        {taskError && <p className="error-message">{taskError}</p>}
      </div>
      
      <input
        type="text"
        placeholder="Pesquisar tarefas..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <ol>
        {filteredTasks.map((task, index) =>
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
      <button className="logout-button"onClick={logout}>Logout</button>
    </div>
  );
}

export default ToDoList;
