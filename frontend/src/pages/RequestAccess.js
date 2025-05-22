import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  FormControl,
  InputLabel
} from '@mui/material';
import API from '../services/api';

function RequestAccess() {
  const [softwareId, setSoftwareId] = useState('');
  const [accessType, setAccessType] = useState('Read');
  const [reason, setReason] = useState('');
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    API.get('/software').then((res) => setSoftwares(res.data));
  }, []);

  const handleSubmit = async () => {
    await API.post('/requests', { softwareId, accessType, reason });
    alert('Request submitted');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5">Request Software Access</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Software</InputLabel>
          <Select value={softwareId} onChange={(e) => setSoftwareId(e.target.value)}>
            {softwares.map((s) => (
              <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Access Type</InputLabel>
          <Select value={accessType} onChange={(e) => setAccessType(e.target.value)}>
            <MenuItem value="Read">Read</MenuItem>
            <MenuItem value="Write">Write</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Reason"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(e) => setReason(e.target.value)}
        />

        <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
          Submit Request
        </Button>
      </Box>
    </Container>
  );
}

export default RequestAccess;
