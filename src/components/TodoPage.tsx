import { Check, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState("");

  const handleFetchTasks = async () => {
    try {
      setTasks(await api.get('/tasks'));
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      handleFetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handlePost = async () => {
    try {
      const data = { name: newTask };
      await api.post('/tasks', data);
      setNewTask("");
      await handleFetchTasks();
    } catch (error) {
      console.error('Failed to post task:', error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      await api.patch(`/tasks/${id}`, { name: editedTask });
      setEditingTaskId(null);
      await handleFetchTasks();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {tasks.map((task) => (
          <Box key={task.id} display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
            <TextField
              size="small"
              value={editingTaskId === task.id ? editedTask : task.name}
              fullWidth
              sx={{ maxWidth: 350 }}
              onChange={(e) => setEditedTask(e.target.value)}
              disabled={editingTaskId !== task.id}
            />
            <Box>
              {editingTaskId === task.id ? (
                <IconButton color="success" onClick={() => handleUpdate(task.id)} disabled={!editedTask.trim() || editedTask === task.name}>
                  <Check />
                </IconButton>
              ) : (
                <IconButton color="secondary" onClick={() => { setEditingTaskId(task.id); setEditedTask(task.name); }}>
                  <Edit />
                </IconButton>
              )}
              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}

        <Box display="flex" justifyContent="center" gap={1} alignItems="center" mt={2}>
          <TextField size="small" placeholder="Nouvelle tâche..." fullWidth sx={{ maxWidth: 250 }} value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <Button variant="outlined" onClick={handlePost} disabled={!newTask.trim()}>
            Ajouter
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TodoPage;
