import { useState, useEffect } from 'react';
import useAdminTarea from '../hooks/useAdminTarea';
import Task from './Task';
import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'; 

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
    <VStack align="stretch" spacing={4}>
      <form onSubmit={addTask}>
        <Input
          type='text'
          placeholder='Task Name'
          value={taskName}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder='Task Description (optional)'
          value={taskDescription}
          onChange={handleDescriptionChange}
          resize="none" 
        />
        <Button
         colorScheme="teal" size="sm"
         onClick={addTask}>
          Add
        </Button>
        {error && <Text color="red.500">{error}</Text>}
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
      {pendingTasks > 0 && (
        <Text>
          You have {pendingTasks} pending tasks.
        </Text>
      )}
      <Box>
        <Button colorScheme="red" size="sm" onClick={handleClearAll}>
          Clean completed tasks
        </Button>
      </Box>
    </VStack>
  );
}

export default TaskList;