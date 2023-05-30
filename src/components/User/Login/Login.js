// Importer les modules nécessaires
import './Login.scss';  // Importer les styles spécifiques à la page de connexion
import { Link, useNavigate } from 'react-router-dom';  // Importer les éléments de routage nécessaires
import { useContext, useState } from 'react';  // Importer les fonctions nécessaires pour gérer l'état et le contexte
import axios from 'axios';  // Importer la bibliothèque Axios pour gérer les requêtes HTTP
import { UserContext } from '../../../contexts/UserContext';  // Importer le contexte d'utilisateur
import loginImage from '../../../assets/Login.jpg';  // Importer l'image de la page de connexion

// Composant de la page de connexion
function Login() {
  const [username, setEmail] = useState('');  // Initialiser l'état de l'identifiant (ou email) pour le formulaire de connexion
  const [password, setPassword] = useState('');  // Initialiser l'état du mot de passe pour le formulaire de connexion
  const { setUser, setIsUserLoggedIn } = useContext(UserContext);  // Récupérer les fonctions de gestion de l'état de l'utilisateur du contexte

  const navigate = useNavigate();  // Initialiser la fonction de navigation

  // Créer une instance d'Axios avec la configuration de base
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',  // URL de base de l'API
  });

  // Fonction pour gérer la connexion de l'utilisateur
  const handleLogin = async (event) => {
    event.preventDefault();  // Prévenir le comportement par défaut du formulaire
    try {
      // Effectuer une requête POST à l'API pour vérifier les informations de connexion
      const response = await api.post('api/login_check', {
        username,
        password,
      });
      // Si la réponse est réussie, stocker le token dans le sessionStorage
      sessionStorage.setItem('token', response.data.token);
      setIsUserLoggedIn(true);  // Mettre à jour l'état de connexion de l'utilisateur
      navigate('/home');  // Naviguer vers la page d'accueil
    } catch (error) {
      // En cas d'erreur, afficher l'erreur dans la console et mettre à jour l'état de connexion de l'utilisateur
      console.log(error.response.data);
      setIsUserLoggedIn(false);
    }
  };

  // Rendu du composant
  return (
    <div className="login-page">
      <div className="login-form-section">
        <h1 className="title">Se Connecter</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="username" placeholder="Email" value={username} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Mot de Passe</p>
            <input type="password" placeholder="Mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className="button-group">
            <button className="form-button" type="submit">Connexion</button>
          </div>
        </form>
        <div className="inscription">
          <Link to="/inscription" className="form-button registration-button">
            <div className="first-time-section">
              <p className="paragraphe1">Première fois sur BreadDrop ?</p>
              <p className="paragraphe2">Inscrivez-vous</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="login-image-section">
        <img src={loginImage} alt="Login" className="background-image" />
        <div className="login-card">
          <h1 className="login-card--title">BreadDrop</h1>
          <br />
          <p className="login-card--text">Connectez-vous en tant qu'utilisateur ou en tant que professionnel.</p>
        </div>
      </div>
    </div>
  );
}

// Exporter le composant Login pour permettre son utilisation dans d'autres fichiers
export default Login;
