import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Home/Header/Nav/Nav';
import Banner from '../../assets/UserBanner.png';
import UserPic from '../../assets/User.jpg';
import './Orders.scss';
import axios from 'axios';

import Footer from '../Home/Footer/Footer';

function Orders() {
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

export default Orders;
