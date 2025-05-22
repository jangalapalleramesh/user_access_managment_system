import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import API from '../services/api';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await API.post('/auth/signup', { username, password });
      alert('Signup successful');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;
