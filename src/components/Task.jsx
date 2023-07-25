import {useState} from 'react'


function Task({ name, status, onStatusChange, onDelete, onUpdate}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);

  const handleCheckboxChange = () => onStatusChange();
  
  const handleDelete = () => onDelete();

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTaskName(name)
  }

  const handleSaveClick = () => {
    if (updatedTaskName.trim() !== ''){
      onUpdate(updatedTaskName);
      setIsEditing(false);
    }
  }

  const handleInputChange = (e) => {
    setUpdatedTaskName(e.currentTarget.value);
  }

  return (
    <div className='contenedor'>
      <input 
          type='checkbox'
          checked={ status }
          onChange={ handleCheckboxChange }
       />
       {isEditing ? (
        <input 
            type='text' 
            value={ updatedTaskName }
            onChange={ handleInputChange }
        />
       ) : (
        <p className={`Tarea ${status ? 'Tarea-tachada' : ''}`}>{name} </p>     
       )}
       {isEditing ? (
        <>
            <button onClick={ handleSaveClick }> Guardar </button>
            <button onClick={ handleCancelClick }> Cancelar </button>
        </>
       ):(
        <>
            <button onClick={ handleEditClick }> Editar </button>
            <button onClick={ handleDelete }> Borrar </button>
        </>
       )}
    </div>
  )
}

export default Task