import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Access Management
        </Typography>

        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>

        {role === 'Admin' && (
          <Button color="inherit" component={Link} to="/create-software">Create Software</Button>
        )}
        {role === 'Employee' && (
          <Button color="inherit" component={Link} to="/request-access">Request Access</Button>
        )}
        {role === 'Manager' && (
          <Button color="inherit" component={Link} to="/pending-requests">Pending Requests</Button>
        )}
        {role && (
          <Button color="inherit" onClick={logout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
