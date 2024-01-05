import { useState } from 'react';
import { authenticateUser } from '../services/AuthenticateUser';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {

  const navigate = useNavigate();
  const logUser = (email, password) => {
    authenticateUser(email, password).then(response => {
        // Vérifiez si la réponse est réussie
        if (response.status === 201 || response.status === 200) {
          // Vous pouvez également retourner des données spécifiques de la réponse si nécessaire
          navigate(`/logout?username=${email}`);
          localStorage.setItem('currentUser', email);
        } else {
          throw new Error('Authentication failed'); // Générer une erreur si la réponse n'est pas réussie
        }
      })
      .catch(error => {
        throw new Error('Authentication failed'); // Générer une erreur en cas d'échec
      })
  }

  return (
    <LoginForm logUser={logUser}/>
  )
}

