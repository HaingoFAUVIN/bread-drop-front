/* eslint-disable react/button-has-type */
import axios from 'axios';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Nav from '../Home/Header/Nav/Nav';
import Footer from '../Home/Footer/Footer';
import './styles.scss';
import Bakery from '../../assets/Bakery.jpg';

function Basket() {
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const { cart, clearCart } = useContext(CartContext);

  const [dateTime, setDateTime] = useState("2023-05-23T00:00");

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const userid = sessionStorage.getItem('userId');

  const handlePayment = async () => {
    let [date, time] = dateTime.split('T');

    const orderProducts = cart.map(item => {
      return { product: item.id, quantity: parseInt(item.quantity, 10) };
    });

    const order = {
      date: date,
      price: total,
      status: false,
      delivery: true,
      schedule: time,
      user: userid,
      orderProducts: orderProducts,
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
      <div className="basket">
        <div className="basketCard">
          <div className="basketCard-content">
            {cart.map((item, index) => (
              <div className="basketProduct" key={index}>
                <img className="basketCard-BakeryImg" src={Bakery} alt="boulangerie" height="100" width="100" />
                <h1 className="basketCard-BakeryName">Pain quotidien</h1>
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

export default Basket;
