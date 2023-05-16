import { Link } from 'react-router-dom';
import Nav from '../Home/Header/Nav/Nav';
import UserPic from '../../assets/User.jpg';
import Banner from '../../assets/UserBanner.png';
import './EditProfile.scss';

function EditProfile() {
  return (
    <div className="edit-profile">
      <Nav />
      <div className="user-banner">
        <img className="banner-image" src={Banner} alt="Banner" />
        <div className="user-details">
          <img className="user-image" src={UserPic} alt="Jean Dupont" />
          <div className="name-address">
            <h1>Jean Dupont</h1>
            <p>456 Boulevard Saint-Germain</p>
            <div className="buttons">
              <button type="button">Modifier mon pseudo</button>
              <button type="button">Modifier mon adresse</button>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="navbar-logo-image"> Commandes Récentes</Link>
        <Link to="/edit-profil" className="navbar-logo-image"> Modifier mon profil</Link>
      </div>
      <div className="account">
        <div className="account-info">
          <h2>Compte</h2>
          <p>Adresse-email</p>
          <button type="button">Modifier</button>
        </div>
        <div className="account-info">
          <p>Mot de passe</p>
          <button type="button">Modifier</button>
        </div>
        <div className="account-info">
          <p>Numéro de téléphone</p>
          <button type="button">Modifier</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
