import React from 'react'


function Task({ name, status }) {

  return (
    <div className='contenedor'>
      <p className={`tareas ${status ? 'task-with-line' : 'task-without-line'}`}>{name} </p>     
    </div>
  )
}

export default Task