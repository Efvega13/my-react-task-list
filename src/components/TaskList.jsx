import {useState, useEffect} from 'react';
import useAdminTarea from '../hooks/useAdminTarea';
import Task from './Task';


function TaskList() {
  const { tasks, createTask, deleteTask, updateTask, updateTaskStatus } = useAdminTarea();
  const [taskName, setTaskName] = useState('');
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => !task.status).length)}, [tasks])

  const handleTaskStatusChange = (index) => updateTaskStatus(index)

  const addTask = (e) => {
    e.preventDefault();
    if(taskName.trim() !== ''){
      createTask(taskName)
      setTaskName('')
    }
  }

  const handleDeleteTask = (index) => deleteTask(index)

  const handleUpdateTask = (index, updateName) => updateTask(index, {name: updateName})

  const handleInputChange = (e) => setTaskName(e.target.value)

  const handleClearAll = () =>{
    const completedTaskIndexes = tasks.reduce((indexes, task, index) => {
      if(task.status)
        indexes.push(index)
      return indexes
    }, [])
    completedTaskIndexes.reverse().forEach((index) => {
      deleteTask(index)
    })
  }

  return (
    <>
      <form onSubmit={ addTask }>
        <input 
          type="text" 
          placeholder='Add new task'
          value={ taskName }
          onChange={ handleInputChange }
          />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={ index }>
            <Task 
              name={task.name} 
              status={task.status}
              onStatusChange={() => handleTaskStatusChange(index)}
              onDelete={()=> handleDeleteTask(index)}
              onUpdate={(updatedName) => handleUpdateTask(index, updatedName)}
            />
          </li>
        ))}
      </ul>
      <>
          <p> You have { pendingTasks } pending tasks. </p>
      </>
      <div className='borrar-contenedor'>
          <button onClick={handleClearAll}> Clean completed tasks </button>
      </div>
    </>
  )
}

export default TaskList