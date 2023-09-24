import { useState, useEffect } from 'react';
import useAdminTarea from '../hooks/useAdminTarea';
import Task from './Task';

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask, updateTaskStatus } =
    useAdminTarea();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [pendingTasks, setPendingTasks] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => !task.status).length);
  }, [tasks]);

  const handleTaskStatusChange = (index) => updateTaskStatus(index);

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim().length >= 3) {
      createTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
      setError('');
    } else {
      setError('El nombre de la tarea debe tener al menos 3 caracteres.');
    }
  };

  const handleDeleteTask = (index) => deleteTask(index);

  const handleUpdateTask = (index, updateName, updateDescription) =>
    updateTask(index, { name: updateName, description: updateDescription });

  const handleInputChange = (e) => setTaskName(e.target.value);

  const handleDescriptionChange = (e) => setTaskDescription(e.target.value);

  const handleClearAll = () => {
    const completedTaskIndexes = tasks.reduce((indexes, task, index) => {
      if (task.status) indexes.push(index);
      return indexes;
    }, []);
    completedTaskIndexes.reverse().forEach((index) => {
      deleteTask(index);
    });
  };

  return (
    <>
      <form onSubmit={addTask}>
        <input
          type='text'
          placeholder='Task Name'
          value={taskName}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Task Description (optional)'
          value={taskDescription}
          onChange={handleDescriptionChange}
        />
        <button>Add</button>
        {error && <p className='error'>{error}</p>}
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task
              name={task.name}
              description={task.description}
              status={task.status}
              onStatusChange={() => handleTaskStatusChange(index)}
              onDelete={() => handleDeleteTask(index)}
              onUpdate={(updatedName, updatedDescription) =>
                handleUpdateTask(index, updatedName, updatedDescription)
              }
            />
          </li>
        ))}
      </ul>
      <>
        <p>You have {pendingTasks} pending tasks.</p>
      </>
      <div className='borrar-contenedor'>
        <button onClick={handleClearAll}>Clean completed tasks</button>
      </div>
    </>
  );
}

export default TaskList;

