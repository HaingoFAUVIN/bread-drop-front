import './CheckIn.scss';
import axios from 'axios';
import { useState } from 'react';
import checkinImage from '../../../assets/CheckIn.jpg';

function CheckIn() {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [role, setRole] = useState(['ROLE_USER']);

  const api = axios.create({
    baseURL: 'http://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const handleInscription = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('api/utilisateurs', {
        lastname,
        firstname,
        email,
        password,
        adress,
        roles: [role],
        createdAt: "now",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkin-page">
      <div className="checkin-form-section">
        <h1 className="title">S'inscrire</h1>
        <form onSubmit={handleInscription}>
          <div className="input-group">
            <p>Nom</p>
            <input type="text" placeholder="Nom" value={lastname} onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="text" placeholder="Prénom" value={firstname} onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Mot de Passe</p>
            <input type="password" placeholder="Mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Adresse de Livraison</p>
            <input type="text" placeholder="Adresse de Livraison" value={adress} onChange={(event) => setAdress(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Rôle</p>
            <div>
              <input type="radio" id="user" name="role" value="ROLE_USER" checked={role === "ROLE_USER"} onChange={(event) => setRole(event.target.value)} />
              <label htmlFor="user"> Je suis seulement un Client </label>
            </div>
            <div>
              <input type="radio" id="manager" name="role" value="ROLE_MANAGER" checked={role === "ROLE_MANAGER"} onChange={(event) => setRole(event.target.value)} />
              <label htmlFor="manager"> Je suis à la fois Professionnel et Client</label>
            </div>
          </div>

          <div className="button-group">
            <button className="form-button checkin-button" type="submit">Inscription</button>
          </div>
        </form>

      </div>

      <div className="checkin-image-section">
        <img src={checkinImage} alt="CheckIn" className="background-image" />
        <div className="checkin-card">
          <h1 className="checkin-card--title">BreadDrop</h1>
          <br />
          <p className="checkin-card--text">Inscrivez-vous en tant qu'utilisateur ou en tant que professionnel.</p>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
