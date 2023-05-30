<<<<<<< HEAD
// Importation des modules nécessaires
import { Link, useNavigate } from 'react-router-dom'; // Modules pour la gestion de la navigation et des liens
import { useContext, useState } from 'react'; // useContext pour accéder au contexte, useState pour la gestion de l'état
import axios from 'axios'; // Librairie pour effectuer des requêtes HTTP
import { UserContext } from '../../contexts/UserContext'; // Contexte de l'utilisateur
import Nav from '../Home/Header/Nav/Nav'; // Composant de la barre de navigation
import UserPic from '../../assets/User.jpg'; // Photo de l'utilisateur par défaut
import Banner from '../../assets/UserBanner.png'; // Bannière de profil par défaut
import './EditProfile.scss'; // Importation des styles spécifiques à ce composant
=======
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import Nav from '../Home/Header/Nav/Nav';
import UserPic from '../../assets/User.jpg';
import Banner from '../../assets/UserBanner.png';
import Footer from '../Home/Footer/Footer';
import './EditProfile.scss';
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4

// Composant de la page d'édition de profil
function EditProfile() {
  // Récupération des données de l'utilisateur depuis le contexte et la session
  const { user, setUser } = useContext(UserContext);
  const userid = sessionStorage.getItem('userId');
  const token = sessionStorage.getItem('token');

<<<<<<< HEAD
  // Définition de l'état local du composant
  const [email, setEmail] = useState(usermail);
  const [address, setAddress] = useState(userAdress);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
=======
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4

  // États pour contrôler l'affichage des formulaires de modification
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showAdressForm, setShowAdressForm] = useState(false);

  // Utilisation de l'hook useNavigate pour naviguer programmatically
  const navigate = useNavigate();

<<<<<<< HEAD
  // Fonction de gestion de la mise à jour du profil de l'utilisateur
  const handleUpdate = async (event) => {
=======
  useEffect(() => {
    setEmail(sessionStorage.getItem('userEmail'));
    setAdress(sessionStorage.getItem('userAdress'));
    setFirstName(sessionStorage.getItem('userName'));
    setLastName(sessionStorage.getItem('lastName'));
  }, []);

  const handleUpdate = async (event, fieldToUpdate) => {
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
    event.preventDefault();

    // Création de l'instance Axios pour communiquer avec le serveur
    const api = axios.create({
      baseURL: 'https://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: `Bearer`, 
      },
    });

    const updateData = {};
    switch (fieldToUpdate) {
      case 'email':
        updateData.email = email;
        break;
      case 'adress':
        updateData.adress = adress;
        break;
      default:
        break;
    }

    console.log('fieldToUpdate:', fieldToUpdate);
    console.log('updateData:', updateData);
    try {
<<<<<<< HEAD
      // Envoi de la requête PUT pour mettre à jour les données de l'utilisateur
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, { email, address });

      if (response.data.email) {
        setUser(response.data);  // Mise à jour des données de l'utilisateur dans le contexte
        sessionStorage.setItem('userEmail', response.data.email);  // Mise à jour du courriel de l'utilisateur dans la session
        sessionStorage.setItem('userAddress', response.data.adress);  // Mise à jour de l'adresse de l'utilisateur dans la session
        navigate('/edit-profil');  // Redirection vers la page d'édition de profil
=======
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, JSON.stringify(updateData));

      if (response.data.email) {
        setUser(response.data);
        sessionStorage.setItem('userEmail', response.data.email);
        sessionStorage.setItem('userAdress', response.data.adress);
        navigate('/edit-profil');
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
      } else {
        alert('La mise à jour du profil a échoué');  // Notification en cas d'échec
      }
    } catch (error) {
      console.error('Failed to update profile:', error);  // Gestion de l'erreur
    }
  };
<<<<<<< HEAD

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
=======
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
  return (
    <div className="edit-profile">
      <Nav />
      <div className="user-banner">
        <img className="banner-image" src={Banner} alt="Banner" />
        <div className="user-details">
          <img className="user-image" src={UserPic} alt="Jean Dupont" />
          <div className="name-address">
            <h1>{firstName} {lastName}</h1>
            <p>{adress}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="button-link"> Mes commandes </Link>
        <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
      </div>

      <div className="account">
        {showEmailForm ? (
          <form onSubmit={(event) => handleUpdate(event, 'email')}>
            <div className="account-info">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{email}</label>
            <button type="button" onClick={() => setShowEmailForm(true)}>Modifier</button>
          </div>
        )}
        {showAdressForm ? (
          <form onSubmit={(event) => handleUpdate(event, 'adress')}>
            <div className="account-info">
              <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{adress}</label>
            <button type="button" onClick={() => setShowAdressForm(true)}>Modifier</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

// Exporter le composant EditProfile pour permettre son utilisation dans d'autres fichiers
export default EditProfile;
