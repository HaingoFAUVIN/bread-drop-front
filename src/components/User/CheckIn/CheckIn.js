// Importer les styles spécifiques à ce composant
import './CheckIn.scss';

// Importer Axios pour les appels API
import axios from 'axios';

// Importer useState pour gérer l'état local
import { useState } from 'react';

// Importer l'image qui sera utilisée dans ce composant
import checkinImage from '../../../assets/CheckIn.jpg';

// Composant CheckIn, qui est le formulaire d'inscription pour les nouveaux utilisateurs
function CheckIn() {
  // Définir les variables d'état pour chaque champ du formulaire
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [role, setRole] = useState(['ROLE_USER']);

  // Créer une instance d'axios avec des configurations par défaut
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',  // URL de base pour toutes les demandes à l'API
    headers: {
      Authorization: 'Bearer',  // Le token d'autorisation qui sera ajouté dans les headers de chaque requête
    },
  });

  // Fonction à exécuter lors de la soumission du formulaire
  const handleInscription = async (event) => {
    event.preventDefault();  // Empêcher le comportement par défaut de la soumission du formulaire

    try {
      // Envoyer une requête POST à l'API pour créer un nouvel utilisateur avec les données du formulaire
      const response = await api.post('api/utilisateurs', {
        lastname,
        firstname,
        email,
        password,
        adress,
        roles: [role],
      });

      console.log(response.data);  // Imprimer la réponse de l'API dans la console
    } catch (error) {
      console.log(error);  // Imprimer l'erreur dans la console si la requête échoue
    }
  };

  // Rendu du composant
  return (
    <div className="checkin-page">
      <div className="checkin-form-section">
        <h1 className="title">S'inscrire</h1>
        <form onSubmit={handleInscription}>
          <div className="input-group">
            <p>Nom</p>
            <input type="text" placeholder="Bread" value={lastname} onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Prénom</p>
            <input type="text" placeholder="Drop" value={firstname} onChange={(event) => setFirstName(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="email" placeholder="123@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Mot de Passe</p>
            <input type="password" placeholder="*****" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="input-group">
            <p>Adresse de Livraison</p>
            <input type="text" placeholder="7 rue Bread Drop, 75000 paris" value={adress} onChange={(event) => setAdress(event.target.value)} />
          </div>
          <div className="input-group">
            <h6 className="roleUser">Vous êtes ? </h6>
            <div className="userSelection">
              <div>
                <input type="radio" id="manager" name="role" value="ROLE_MANAGER" checked={role === "ROLE_MANAGER"} onChange={(event) => setRole(event.target.value)} />
                <label htmlFor="user"> Je suis Professionnel et Client</label>
              </div>
              <div>
                <input type="radio" id="user" name="role" value="ROLE_USER" checked={role === "ROLE_USER"} onChange={(event) => setRole(event.target.value)} />
                <label htmlFor="manager"> Je suis uniquement Client </label>
              </div>
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
          <p className="checkin-card--text">Inscrivez-vous en tant qu'utilisateur ou bien professionnel.</p>
        </div>
      </div>
    </div>
  );
}

// Exporter le composant CheckIn pour permettre son utilisation dans d'autres fichiers
export default CheckIn;
