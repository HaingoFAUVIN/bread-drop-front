<<<<<<< HEAD
// Importer les modules nécessaires
import { Link } from 'react-router-dom';  // Importe le composant Link de react-router-dom pour permettre la navigation
import { useContext } from 'react';  // Importe la fonction useContext pour accéder au contexte
import { UserContext } from '../../contexts/UserContext';  // Importe le contexte de l'utilisateur
import Nav from '../Home/Header/Nav/Nav';  // Importe le composant Nav qui représente la barre de navigation
import Banner from '../../assets/UserBanner.png';  // Importe l'image de la bannière utilisateur
import Bakery from '../../assets/Bakery.jpg';  // Importe l'image de la boulangerie
import UserPic from '../../assets/User.jpg';  // Importe l'image de l'utilisateur
import './Orders.scss';  // Importe les styles spécifiques à ce composant
=======
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Home/Header/Nav/Nav';
import Banner from '../../assets/UserBanner.png';
import UserPic from '../../assets/User.jpg';
import './Orders.scss';
import axios from 'axios';

import Footer from '../Home/Footer/Footer';
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4

// Composant Orders qui représente la page des commandes
function Orders() {
<<<<<<< HEAD
  const { user } = useContext(UserContext);  // Récupère l'utilisateur à partir du contexte
  const usermail = sessionStorage.getItem('userEmail');  // Récupère le courriel de l'utilisateur à partir de la sessionStorage
  const userFirstName = sessionStorage.getItem('userName');  // Récupère le prénom de l'utilisateur à partir de la sessionStorage
  const userLastName = sessionStorage.getItem('lastName');  // Récupère le nom de l'utilisateur à partir de la sessionStorage
  const userid = sessionStorage.getItem('userId');  // Récupère l'ID de l'utilisateur à partir de la sessionStorage
  const userAdress = sessionStorage.getItem('userAddress');  // Récupère l'adresse de l'utilisateur à partir de la sessionStorage
=======
  const usermail = sessionStorage.getItem('userEmail');
  const userFirstName = sessionStorage.getItem('userName');
  const userLastName = sessionStorage.getItem('lastName');
  const userid = sessionStorage.getItem('userId');
  const userAdress = sessionStorage.getItem('userAddress');
  const initialOrders = JSON.parse(sessionStorage.getItem('userOrders')) || [];

  const [orders, setOrders] = useState(initialOrders);

  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const orderInfo = async () => {
    if (!orders || orders.length === 0) return;
  
    const updatedOrders = await Promise.all(orders.map(async (order) => {
      try {
        const response = await api.get(`api/commandes/${order.id}`);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(`Erreur dans la commande ${order.id}.`, error);
      }
    }));

    setOrders(updatedOrders);
    sessionStorage.setItem('userOrders', JSON.stringify(updatedOrders));
  };

  useEffect(() => {
    if (userid) {
      orderInfo();
    }
  }, [userid]);
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4

  // Rendu du composant
  return (
    <>
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
          <Link to="/profil" className="button-link"> Mes commandes </Link>
          <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
        </div>
      </div>

    <div className="newcardorder">
  {orders && orders.map(order => (
    <section className="newcardorder-only" key={order.id}>
      <div className="newCard">
        {order.orderProducts && order.orderProducts.map(orderProduct => (
          <div key={orderProduct.product.id}>
            <div className="newCard-bakery">
              <div className="newCard-bakeryText">
                <h2 className="newCard-title">{orderProduct.product.bakery.name}</h2>
                <p className="newCard-adress">{orderProduct.product.bakery.adress}</p>
              </div>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">{orderProduct.product.name}</p>
              <p className="newCard-productPrice">{orderProduct.product.price}€</p>
            </div>
          </div>
        ))}
        <div>
          <p className="newCard-date" id="date">Commande effectué le {order.date}</p>
        </div>
        <div className="newCard-total">
          <p className="newCard-totalName">Total</p>
          <p className="newCard-totalProduct">{order.price}€</p>
        </div>
      </div>
    </section>
  ))}
</div>
      <Footer />
    </>
  );
}

// Exporter le composant Orders pour permettre son utilisation dans d'autres fichiers
export default Orders;
