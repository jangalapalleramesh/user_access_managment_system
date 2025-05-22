import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box
} from '@mui/material';
import API from '../services/api';

function PendingRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get('/requests/pending').then(res => setRequests(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/requests/${id}`, { status });
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Pending Access Requests</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {requests.map((r) => (
            <Grid item xs={12} key={r.id}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">
                    <strong>{r.user.username}</strong> requested <strong>{r.accessType}</strong> access to <strong>{r.software.name}</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ my: 1 }}>
                    Reason: {r.reason}
                  </Typography>
                  <Button onClick={() => updateStatus(r.id, 'Approved')} color="success" variant="contained" sx={{ mr: 1 }}>
                    Approve
                  </Button>
                  <Button onClick={() => updateStatus(r.id, 'Rejected')} color="error" variant="contained">
                    Reject
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default PendingRequests;
