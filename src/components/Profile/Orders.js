// Importer les modules nécessaires
import { Link } from 'react-router-dom';  // Importe le composant Link de react-router-dom pour permettre la navigation
import { useContext } from 'react';  // Importe la fonction useContext pour accéder au contexte
import { UserContext } from '../../contexts/UserContext';  // Importe le contexte de l'utilisateur
import Nav from '../Home/Header/Nav/Nav';  // Importe le composant Nav qui représente la barre de navigation
import Banner from '../../assets/UserBanner.png';  // Importe l'image de la bannière utilisateur
import Bakery from '../../assets/Bakery.jpg';  // Importe l'image de la boulangerie
import UserPic from '../../assets/User.jpg';  // Importe l'image de l'utilisateur
import './Orders.scss';  // Importe les styles spécifiques à ce composant

// Composant Orders qui représente la page des commandes
function Orders() {
  const { user } = useContext(UserContext);  // Récupère l'utilisateur à partir du contexte
  const usermail = sessionStorage.getItem('userEmail');  // Récupère le courriel de l'utilisateur à partir de la sessionStorage
  const userFirstName = sessionStorage.getItem('userName');  // Récupère le prénom de l'utilisateur à partir de la sessionStorage
  const userLastName = sessionStorage.getItem('lastName');  // Récupère le nom de l'utilisateur à partir de la sessionStorage
  const userid = sessionStorage.getItem('userId');  // Récupère l'ID de l'utilisateur à partir de la sessionStorage
  const userAdress = sessionStorage.getItem('userAddress');  // Récupère l'adresse de l'utilisateur à partir de la sessionStorage

  // Rendu du composant
  return (
    <div className="orders">
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
      <div className="orders-list">
        <div className="order">
          <div className="header">
            <div>
              <img src={Bakery} alt="La Petite Boulangerie" />
              <h2>La Petite Boulangerie</h2>
              <p>123 Rue de Paris</p>
              <p className="date" id="date">01-05-2023</p>
            </div>
          </div>
          <div className="item">
            <p>Baguette</p>
            <p>1.5€</p>
          </div>
          <div className="item">
            <p>Croissant</p>
            <p>2.0€</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>3.5€</h3>
          </div>
        </div>
        <div className="order">
          <div className="header">
            <div>
              <img src={Bakery} alt="La Petite Boulangerie" />
              <h2>La Petite Boulangerie</h2>
              <p>123 Rue de Paris</p>
              <p className="date" id="date">01-05-2023</p>
            </div>
          </div>
          <div className="item">
            <p>Baguette</p>
            <p>1.5€</p>
          </div>
          <div className="item">
            <p>Croissant</p>
            <p>2.0€</p>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>3.5€</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporter le composant Orders pour permettre son utilisation dans d'autres fichiers
export default Orders;
