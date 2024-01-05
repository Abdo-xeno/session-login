import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import ProtectedRoute from '../routes/ProtectedRoute';

export default function Logout () {

  const userName = localStorage.getItem('currentUser');
  const navigate = useNavigate ();

  const handleLogout = () => {
    // Rediriger vers la page de déconnexion
    navigate(`/login`);
    localStorage.setItem('currentUser', "");
  };

  return (
    <ProtectedRoute>  
     <UserInfo userName={userName} handleLogout={handleLogout} />
    </ProtectedRoute>
  );
};
