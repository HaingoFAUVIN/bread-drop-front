import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../../../assets/Logo.png';
import profileImg from '../../../../assets/profile.jpg';
import { UserContext } from '../../../Profile/UserContext';

import './styles.scss';

function Nav() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user);

  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-responsive-open">
          <button type="button" className="navbar-responsive-open-button"  onClick={handleOpenOverlay}><MenuIcon fontSize='large' /></button>
        </div>
        <div className="navbar-logo">
          <Link to="/home" className="navbar-logo-image">
            <img src={Logo} alt="Logo BreadDrop" height="100" width="100" />
          </Link>
        </div>
      </div>

      <div className="navbar-menu">
        <Link to="/panier" className="navbar-item navbar-panier">
          <ShoppingCartIcon fontSize="small" />
          Panier
        </Link>
        <Link to="?" className="navbar-item navbar-pro">
          BreadDrop Pro
        </Link>
        <Link to="/inscription" className="navbar-item navbar-inscription">
          Inscription
        </Link>
        <Link to="/connexion" className="navbar-item navbar-connexion">
          Connexion
        </Link>
        <Link to="/" className="navbar-profile">
          <img className="navbar-profile-img" src={profileImg} alt="profile" height="50" width="50" />
        </Link>
      </div>
      <div id="overlay" className={isOverlayVisible ? "overlay--active" : ""} style={{ display: isOverlayVisible ? "block" : "none" }}>
        <button type="button" className="navbar-responsive-close-button" onClick={handleCloseOverlay}> <CloseIcon fontSize="large" /></button>
        <div className="navbar-responsive-menu">
          <div className="overlay-top">
            <Link to="/" className="navbar-mobile-item navbar-panier">
              Mon compte
            </Link>
            <Link to="?" className="navbar-item navbar-pro" style={{ display: (user && user.role.includes('ROLE_MANAGER')) ? 'block' : 'none' }}>
              BreadDrop Pro
            </Link>
          </div>
          <div className="overlay-bottom">
            <Link to="/connexion" className="navbar-mobile-item navbar-connexion">
              Connexion
            </Link>
            <Link to="/connexion" className="navbar-mobile-item navbar-connexion">
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
