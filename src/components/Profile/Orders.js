import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import Nav from '../Home/Header/Nav/Nav';
// import UserPic from '../../assets/User.jpg';
import Banner from '../../assets/UserBanner.png';
import Bakery from '../../assets/Bakery.jpg';
import './Orders.scss';

function Orders() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="orders">
      <Nav />
      <div className="user-banner">
        <img className="banner-image" src={Banner} alt="Banner" />
        <div className="user-details">
          <img className="user-image" src={user?.picture} alt="Jean Dupont" />
          <div className="name-address">
            <h1>{user?.username}</h1>
            <p>{user?.adress}</p>
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

export default Orders;
