import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import API from '../services/api';

function CreateSoftware() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [accessLevels, setAccessLevels] = useState('');

  const handleCreate = async () => {
    await API.post('/software', {
      name,
      description,
      accessLevels: accessLevels.split(',').map(level => level.trim()),
    });
    alert('Software created');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5">Create Software</Typography>
        <TextField label="Name" fullWidth margin="normal" onChange={(e) => setName(e.target.value)} />
        <TextField label="Description" fullWidth margin="normal" onChange={(e) => setDescription(e.target.value)} />
        <TextField
          label="Access Levels (comma separated)"
          fullWidth
          margin="normal"
          onChange={(e) => setAccessLevels(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mt: 2 }}>
          Create
        </Button>
      </Box>
    </Container>
  );
}

export default CreateSoftware;
