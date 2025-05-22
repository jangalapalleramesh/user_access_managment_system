import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateSoftware from './pages/CreateSoftware';
import RequestAccess from './pages/RequestAccess';
import PendingRequests from './pages/PendingRequests';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-software" element={<CreateSoftware />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/pending-requests" element={<PendingRequests />} />
      <Route path="/create-software" element={<ProtectedRoute allowedRoles={['Admin']}><CreateSoftware /></ProtectedRoute>
  }
/>
    </Routes>
    
    </>
    
  );
}

export default App;
