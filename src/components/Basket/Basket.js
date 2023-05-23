import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Nav from '../Home/Header/Nav/Nav';
import axios from 'axios';
import './styles.scss';

function Basket() {

  const api = axios.create({
    baseURL: 'http://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const { cart, clearCart } = useContext(CartContext);

  const [dateTime, setDateTime] = useState("2023-05-23T00:00");

  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


const handlePayment = async () => {
  let [date, time] = dateTime.split('T');

  const order = {
    date: date,
    price: total,
    status: false,
    delivery: true,
    schedule: time,
    createdAt: new Date().toISOString(),
    user: 1,
    products: cart.map(item => item.id)
  };

  try {
    const response = await api.post('api/commandes', order);
    console.log(response.data);
    clearCart(); 
  } catch (error) {
    console.error('Erreur dans la commande.', error);
  }
};

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

export default Basket;
