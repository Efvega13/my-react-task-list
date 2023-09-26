import { useState } from 'react';
import {
  Box,
  Checkbox,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react'; 

function Task({ name, description, status, onStatusChange, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);
  const [updatedTaskDescription, setUpdatedTaskDescription] = useState(description);

  const handleCheckboxChange = () => onStatusChange();
  const handleDelete = () => onDelete();
  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTaskName(name);
    setUpdatedTaskDescription(description);
  };

  const handleSaveClick = () => {
    if (updatedTaskName.trim() !== '') {
      onUpdate(updatedTaskName, updatedTaskDescription);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => setUpdatedTaskName(e.currentTarget.value);
  const handleDescriptionChange = (e) => setUpdatedTaskDescription(e.currentTarget.value);

  return (
    <Box p={3} borderWidth="1px" borderRadius="md">
      <Checkbox
        isChecked={status}
        onChange={handleCheckboxChange}
        mr={2}
      />
      {isEditing ? (
        <>
          <Input
            type='text'
            value={updatedTaskName}
            onChange={handleInputChange}
            variant="unstyled" 
          />
          <Textarea
            value={updatedTaskDescription}
            onChange={handleDescriptionChange}
            variant="unstyled" 
          />
        </>
      ) : (
        <>
          <p className={`Tarea ${status ? 'Tarea-tachada' : ''}`}>{name}</p>
          <p className={`Tarea ${status ? 'Tarea-tachada' : ''}`}>
            {description}
          </p>
        </>
      )}
      {isEditing ? (
        <>
          <Button
            onClick={handleSaveClick}
            colorScheme="blue" 
            size="sm" 
            mr={2}
          >
            Guardar
          </Button>
          <Button
            onClick={handleCancelClick}
            colorScheme="gray" 
            size="sm" 
          >
            Cancelar
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={handleEditClick}
            colorScheme="teal" 
            size="sm" 
            mr={2}
          >
            Editar
          </Button>
          <Button
            onClick={handleDelete}
            colorScheme="red" 
            size="sm" 
          >
            Borrar
          </Button>
        </>
      )}
    </Box>
  );
}

export default Task;
