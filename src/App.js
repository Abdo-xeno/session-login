import { useEffect } from 'react';
import './App.css';
import { useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate();

  const checkAuthentication = () => {
    const isAuthenticated = localStorage.getItem('currentUser');

    if (isAuthenticated) {
      // Si l'utilisateur est authentifié, redirige vers la page de déconnexion
      navigate('/logout');
    } else {
      // Sinon, redirige vers la page de connexion
      navigate('/login');
    }
  };
  useEffect(() => {
    checkAuthentication()
    },[navigate])

  return (
         <div></div>
  );
}

export default App;
