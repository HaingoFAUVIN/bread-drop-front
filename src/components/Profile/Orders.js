import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Nav from '../Home/Header/Nav/Nav';
import Banner from '../../assets/UserBanner.png';
import Bakery from '../../assets/Bakery.jpg';
import UserPic from '../../assets/User.jpg';
import './Orders.scss';
import Footer from '../Home/Footer/Footer';

function Orders() {
  const { user } = useContext(UserContext);
  const usermail = sessionStorage.getItem('userEmail');
  const userFirstName = sessionStorage.getItem('userName');
  const userLastName = sessionStorage.getItem('lastName');
  const userid = sessionStorage.getItem('userId');
  const userAdress = sessionStorage.getItem('userAddress');

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
        <section className="newcardorder-only">
          <div className="newCard">
            <div className="newCard-bakery">
              <div className="newCard-bakeryText">
                <h2 className="newCard-title">La Petite Boulangerie</h2>
                <p className="newCard-adress">123 Rue de Paris</p>
              </div>
            </div>
            <div>
              <p className="newCard-date" id="date">Commande effectué le 01-05-2023</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Baguette</p>
              <p className="newCard-productPrice">1.5€</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Croissant</p>
              <p className="newCard-productPrice">2€</p>
            </div>
            <div className="newCard-total">
              <p className="newCard-totalName">Total</p>
              <p className="newCard-totalProduct">3.5€</p>
            </div>
          </div>
        </section>
        <section className="newcardorder-only">
          <div className="newCard">
            <div className="newCard-bakery">
              <div className="newCard-bakeryText">
                <h2 className="newCard-title">La Petite Boulangerie</h2>
                <p className="newCard-adress">123 Rue de Paris</p>
              </div>
            </div>
            <div>
              <p className="newCard-date" id="date">Commande effectué le 01-05-2023</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Baguette</p>
              <p className="newCard-productPrice">1.5€</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Croissant</p>
              <p className="newCard-productPrice">2€</p>
            </div>
            <div className="newCard-total">
              <p className="newCard-totalName">Total</p>
              <p className="newCard-totalProduct">3.5€</p>
            </div>
          </div>
        </section>
        <section className="newcardorder-only">
          <div className="newCard">
            <div className="newCard-bakery">
              <div className="newCard-bakeryText">
                <h2 className="newCard-title">La Petite Boulangerie</h2>
                <p className="newCard-adress">123 Rue de Paris</p>
              </div>
            </div>
            <div>
              <p className="newCard-date" id="date">Commande effectué le 01-05-2023</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Baguette</p>
              <p className="newCard-productPrice">1.5€</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Croissant</p>
              <p className="newCard-productPrice">2€</p>
            </div>
            <div className="newCard-total">
              <p className="newCard-totalName">Total</p>
              <p className="newCard-totalProduct">3.5€</p>
            </div>
          </div>
        </section>
        <section className="newcardorder-only">
          <div className="newCard">
            <div className="newCard-bakery">
              <div className="newCard-bakeryText">
                <h2 className="newCard-title">La Petite Boulangerie</h2>
                <p className="newCard-adress">123 Rue de Paris</p>
              </div>
            </div>
            <div>
              <p className="newCard-date" id="date">Commande effectué le 01-05-2023</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Baguette</p>
              <p className="newCard-productPrice">1.5€</p>
            </div>
            <div className="newCard-product">
              <p className="newCard-productName">Croissant</p>
              <p className="newCard-productPrice">2€</p>
            </div>
            <div className="newCard-total">
              <p className="newCard-totalName">Total</p>
              <p className="newCard-totalProduct">3.5€</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
