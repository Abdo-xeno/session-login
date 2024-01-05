import React from 'react';
import { Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('currentUser') !== "";

  if (isAuthenticated) {
    return children;
  } else {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    return <Box>Vous n'êtes pas autorisé à accéder à cette page</Box>
  }
};

export default ProtectedRoute;