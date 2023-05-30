// Importation des modules nécessaires
import { Link, useNavigate } from 'react-router-dom'; // Modules pour la gestion de la navigation et des liens
import { useContext, useState } from 'react'; // useContext pour accéder au contexte, useState pour la gestion de l'état
import axios from 'axios'; // Librairie pour effectuer des requêtes HTTP
import { UserContext } from '../../contexts/UserContext'; // Contexte de l'utilisateur
import Nav from '../Home/Header/Nav/Nav'; // Composant de la barre de navigation
import UserPic from '../../assets/User.jpg'; // Photo de l'utilisateur par défaut
import Banner from '../../assets/UserBanner.png'; // Bannière de profil par défaut
import './EditProfile.scss'; // Importation des styles spécifiques à ce composant

// Composant de la page d'édition de profil
function EditProfile() {
  // Récupération des données de l'utilisateur depuis le contexte et la session
  const { user, setUser } = useContext(UserContext);
  const usermail = sessionStorage.getItem('userEmail');
  const userFirstName = sessionStorage.getItem('userName');
  const userLastName = sessionStorage.getItem('lastName');
  const userid = sessionStorage.getItem('userId');
  const userAdress = sessionStorage.getItem('userAddress');

  // Définition de l'état local du composant
  const [email, setEmail] = useState(usermail);
  const [address, setAddress] = useState(userAdress);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // États pour contrôler l'affichage des formulaires de modification
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  // Utilisation de l'hook useNavigate pour naviguer programmatically
  const navigate = useNavigate();

  // Fonction de gestion de la mise à jour du profil de l'utilisateur
  const handleUpdate = async (event) => {
    event.preventDefault();

    // Création de l'instance Axios pour communiquer avec le serveur
    const api = axios.create({
      baseURL: 'https://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: 'Bearer',
      },
    });

    try {
      // Envoi de la requête PUT pour mettre à jour les données de l'utilisateur
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, { email, address });

      if (response.data.email) {
        setUser(response.data);  // Mise à jour des données de l'utilisateur dans le contexte
        sessionStorage.setItem('userEmail', response.data.email);  // Mise à jour du courriel de l'utilisateur dans la session
        sessionStorage.setItem('userAddress', response.data.adress);  // Mise à jour de l'adresse de l'utilisateur dans la session
        navigate('/edit-profil');  // Redirection vers la page d'édition de profil
      } else {
        alert('La mise à jour du profil a échoué');  // Notification en cas d'échec
      }
    } catch (error) {
      console.error('Failed to update profile:', error);  // Gestion de l'erreur
    }
  };

  // Fonction de gestion du changement de mot de passe
  const handleChangePassword = async (event) => {
    event.preventDefault();

    // Création de l'instance Axios pour communiquer avec le serveur
    const api = axios.create({
      baseURL: 'https://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: 'Bearer',
      },
    });

    try {
      // Envoi de la requête PUT pour modifier le mot de passe de l'utilisateur
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, { oldPassword, newPassword });

      if (response.data.success) {
        alert('Mot de passe modifié avec succès');  // Notification en cas de succès
        setOldPassword('');  // Réinitialisation du champ du mot de passe
        setNewPassword('');  // Réinitialisation du champ du nouveau mot de passe
      } else {
        alert(response.data.message);  // Notification en cas d'échec
      }
    } catch (error) {
      console.error('Failed to change password:', error);  // Gestion de l'erreur
    }
  };

  // Retour du rendu JSX du composant
  return (
    <div className="edit-profile">
      <Nav />
      <div className="user-banner">
        <img className="banner-image" src={Banner} alt="Banner" />
        <div className="user-details">
          <img className="user-image" src={UserPic} alt="Jean Dupont" />
          <div className="name-address">
            <h1>{userFirstName} {userLastName}</h1>
            <p>{userAdress}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="button-link"> Commandes </Link>
        <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
      </div>
      <div className="account">
        {showEmailForm ? (
          <form onSubmit={handleUpdate}>
            <div className="account-info">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{usermail}</label>
            <button type="button" onClick={() => setShowEmailForm(true)}>Modifier</button>
          </div>
        )}
        {showAddressForm ? (
          <form onSubmit={handleUpdate}>
            <div className="account-info">
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{userAdress}</label>
            <button type="button" onClick={() => setShowAddressForm(true)}>Modifier</button>
          </div>
        )}
        {showPasswordForm ? (
          <form onSubmit={handleChangePassword} style={{ flexDirection: 'column' }}>
            <div className="account-info">
              <label>Ancien mot de passe</label>
              <input style={{ padding: '10px', margin: '10px 0' }} type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
            </div>
            <div className="account-info">
              <label>Nouveau mot de passe</label>
              <input style={{ padding: '10px', margin: '10px 0' }} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <button className="submit-button" type="submit">Modifier le mot de passe</button>
          </form>
        ) : (
          <div className="account-info">
            <label>Mot de Passe</label>
            <button className="submit-button" type="button" onClick={() => setShowPasswordForm(true)}>Modifier</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Exporter le composant EditProfile pour permettre son utilisation dans d'autres fichiers
export default EditProfile;
