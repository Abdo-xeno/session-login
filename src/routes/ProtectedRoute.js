import React from 'react';
import AlertConnexion from '../components/AlertConnexion';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('currentUser') !== "";

  if (isAuthenticated) {
    return children;
  } else {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    return <AlertConnexion />
  }
};

export default ProtectedRoute;