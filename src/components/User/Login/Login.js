import './Login.scss';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import loginImage from '../../../assets/Login.jpg';

function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setIsUserLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://davyvistel-server.eddi.cloud/',
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('api/login_check', {
        username,
        password,
      });
      sessionStorage.setItem('token', response.data.token);
      setIsUserLoggedIn(true);
      navigate('/home'); 
    } catch (error) {
      console.log(error.response.data);
      setIsUserLoggedIn(false);
    }
  };

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

        <hr />

        <div className="first-time-section">
          <p>Première Fois ?</p>
          <div className="button-group">
            <Link to="/inscription" className="form-button registration-button">
              Inscription
            </Link>
          </div>
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

export default Login;