<<<<<<< HEAD
// Importer les hooks et les contextes nécessaires
=======
/* eslint-disable react/button-has-type */
import axios from 'axios';
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

// Importer les composants nécessaires
import Nav from '../Home/Header/Nav/Nav';
<<<<<<< HEAD

// Importer Axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Importer le CSS spécifique pour ce composant
=======
import Footer from '../Home/Footer/Footer';
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
import './styles.scss';
import Bakery from '../../assets/Bakery.jpg';

// Composant Basket qui représente le panier d'achats de l'utilisateur
function Basket() {
<<<<<<< HEAD

  // Créer une instance d'Axios avec une configuration de base
=======
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',  // L'URL de base pour toutes les requêtes
    headers: {
      Authorization: 'Bearer',  // Le jeton d'authentification à inclure dans les requêtes
    },
  });

  // Utiliser le contexte du panier pour accéder au contenu du panier et à la fonction pour vider le panier
  const { cart, clearCart } = useContext(CartContext);

  // Utiliser l'état pour gérer la date et l'heure sélectionnées par l'utilisateur pour la livraison
  const [dateTime, setDateTime] = useState("2023-05-23T00:00");

<<<<<<< HEAD
  // Calculer le total du panier en multipliant le prix de chaque article par sa quantité et en ajoutant le tout
=======
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Récupérer l'ID de l'utilisateur stocké dans la session
  const userid = sessionStorage.getItem('userId');

<<<<<<< HEAD
  // Fonction pour gérer le paiement (pour de faux)
  const handlePayment = async () => {
    let [date, time] = dateTime.split('T');  // Séparer la date et l'heure

    // Créer l'objet de commande à envoyer à l'API
    const order = {
      date: date,  // La date de livraison
      price: total,  // Le total du panier
      status: false,  // L'état de la commande (non payée)
      delivery: true,  // La commande sera livrée
      schedule: time,  // L'heure de livraison
      createdAt: new Date().toISOString(),  // La date et l'heure actuelles
      user: userid,  // L'ID de l'utilisateur
      products: cart.map(item => item.id),  // Les ID des produits dans le panier
    };

    try {
      const response = await api.post('api/commandes', order);  // Envoyer la commande à l'API
      console.log(response.data);  // Afficher la réponse de l'API dans la console
      clearCart();  // Vider le panier après le paiement
    } catch (error) {
      console.error('Erreur dans la commande.', error);  // Afficher l'erreur dans la console si quelque chose ne va pas
    }
  };

  // Rendu du composant
=======
  const handlePayment = async () => {
    let [date, time] = dateTime.split('T');

  const handlePayment = async () => {
    let [date, time] = dateTime.split('T');
  
    const orderProducts = cart.map(item => {
      return { product: item.id, quantity: item.quantity };
    });
    
    const order = {
      date: date,
      price: total,
      status: false,
      delivery: true,
      schedule: time,
      user: userid,
      orderProducts: orderProducts
    };
  
    try {
      const response = await api.post('api/commandes', order);
      console.log(response.data);
      clearCart(); 
    } catch (error) {
      console.error('Erreur dans la commande.', error);
    }
  };

>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
  return (
    <>
      <Nav />
      <div className="basket">
        <div className="basketCard">
          <div className="basketCard-content">
            <img className="basketCard-BakeryImg" src={Bakery} alt="boulangerie" height="100" width="100" />
            <h1 className="basketCard-BakeryName">Pain quotidien</h1>
            {cart.map((item, index) => (
              <div className="basketProduct" key={index}>
                <div className="basketProduct-content">
                  <div className="basketProduct-Img">
                    <img src={item.picture} alt={item.name} height="100" width="100" />
                  </div>
                  <div className="">
                    <h2 className="basketProduct-Details">Produit</h2>
                    <p className="basketProduct-DetailsProduct">{item.name}</p>
                    {/* <p className="basketProduct-Details">{item.description}</p> A supprimer */}
                  </div>
                  <div className="">
                    <h2 className="basketProduct-Details">Prix</h2>
                    <p className="basketProduct-DetailsProduct">{item.price}€</p>
                  </div>
                  <div className="">
                    <h2 className="basketProduct-Details">Quantité</h2>
                    <p className="basketProduct-DetailsProduct">{item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <hr className="hre" width="84%" align="center" color="#2d707e" />
            <div className="basketSchedule">
              <label className="basketSchedule-choice" htmlFor="meeting-time">Choisissez la date et l'heure de réception:</label>
              <input
                className="basketSchedule-input"
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
                value={dateTime}
                onChange={e => setDateTime(e.target.value)}
                min="2023-05-23T00:00"
                max="2025-06-14T00:00"
              />
            </div>
            <hr width="84%" align="center" color="#2d707e" />
            <div className="basketCheckout">
              <div className="basketCheckout-element">
                <div className="basketCheckout1">
                  <h1 className="basketCheckout-title">Finaliser votre commande</h1>
                  <div className="checkout-text-price">
                    <h2>Total: {total.toFixed(2)}€</h2>
                  </div>
                </div>
                <div className="basketCheckout-payementBtn">
                  <button className="basketCheckout-payementBtnElement" onClick={handlePayment}>Payer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Exporter le composant Basket pour permettre son utilisation dans d'autres fichiers
export default Basket;
