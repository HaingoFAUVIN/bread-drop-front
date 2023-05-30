// Importer les hooks et les contextes nécessaires
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

// Importer les composants nécessaires
import Nav from '../Home/Header/Nav/Nav';

// Importer Axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Importer le CSS spécifique pour ce composant
import './styles.scss';

// Composant Basket qui représente le panier d'achats de l'utilisateur
function Basket() {

  // Créer une instance d'Axios avec une configuration de base
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

  // Calculer le total du panier en multipliant le prix de chaque article par sa quantité et en ajoutant le tout
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Récupérer l'ID de l'utilisateur stocké dans la session
  const userid = sessionStorage.getItem('userId');

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
  return (
    <>
      <Nav />
      <div className='basket'>
        <h1 className='basket-title'>Votre panier</h1>
        {cart.map((item, index) => (
          <div key={index} className='basket-element'>
            <div className='basket-box'>
              <div className='basket-box-img'>
                <img className='basket-box-img-element' src={item.picture} alt={item.name} height='100' width='100' />
              </div>
              <div className='basket-box-text'>
                <h2 className='basket-box-text-title'>{item.name}</h2>
                <p className='basket-box-text-description'>{item.description}</p>
              </div>
              <div className='basket-box-price'>
                <h2 className='basket-box-price-text'>Prix</h2>
                <p className='basket-box-price-number'>{item.price}€</p>
              </div>
              <div className='basket-box-quantity'>
                <h2 className='basket-box-quantity-text'>Quantité</h2>
                <p className='basket-box-quantity-number'>{item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
        <label for="meeting-time">Choisisser la date et l'heures de livraison:</label>

        <input type="datetime-local" id="meeting-time"
        name="meeting-time" value={dateTime} 
        onChange={e => setDateTime(e.target.value)} 
        min="2023-05-23T00:00" max="2025-06-14T00:00">
        </input>
      </div>
      <div className='checkout'>
        <div className='checkout-element'>
          <div className='checkout-text'>
            <h1>Finaliser la Commande</h1>
            <div className='checkout-text-price'>
              <h2>Total:</h2>
              <p>{total.toFixed(2)}€</p>
            </div>
          </div>
          <div className='checkout-payement-btn'>
            <button className='checkout-payement-btn-element' onClick={handlePayment}>Payer</button>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporter le composant Basket pour permettre son utilisation dans d'autres fichiers
export default Basket;
