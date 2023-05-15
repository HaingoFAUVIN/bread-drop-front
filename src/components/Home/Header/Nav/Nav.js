import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconTextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../../assets/Logo.png';
import profileImg from '../../../../assets/profile.jpg';
import CloseIcon from '@mui/icons-material/Close';

import './styles.scss';

function Nav() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='navbar-responsive-open'>
          <button className="navbar-responsive-open-button"  onClick={handleOpenOverlay}><MenuIcon fontSize='large' /></button>
        </div>
        <div className="navbar-logo">
          <Link to="/home" className="navbar-logo-image">
            <img src={Logo} alt="Logo BreadDrop" height="100" width="100" />
          </Link>
        </div>
        <div className="adress-input">
          <IconTextField
            label="Entrez votre adresse"
            iconStart={<AddLocationIcon sx={{ color: 'green', fontSize: 20 }} />}
          />
        </div>
      </div>

      <div className="navbar-menu">
        <Link to="/panier" className="navbar-item navbar-panier">
          <ShoppingCartIcon fontSize="small" />
          Panier
        </Link>
        <Link to="/connexion-pro" className="navbar-item navbar-pro">
          BreadDrop Pro
        </Link>
        <Link to="/inscription" className="navbar-item navbar-inscription">
          Inscription
        </Link>
        <Link to="/connexion" className="navbar-item navbar-connexion">
          Connexion
        </Link>
        <Link to="/" className="navbar-profile">
          <img className='navbar-profile-img' src={profileImg} alt="profile" height="50" width="50" />
        </Link>
      </div>
      <div id='overlay' className={isOverlayVisible ? "overlay--active" : ""} style={{ display: isOverlayVisible ? "block" : "none" }}>
        <button className="navbar-responsive-close-button" onClick={handleCloseOverlay}><CloseIcon fontSize='large' /></button>
        <div className="navbar-responsive-menu">
          <div className='overlay-top'>
            <Link to="/" className="navbar-mobile-item navbar-panier">
              Mon compte
            </Link>
            <div className="adress-mobile-input">
              <IconTextField
                label="Entrez votre adresse"
                iconStart={<AddLocationIcon sx={{ color: "green", fontSize: 20 }} />}
              />
            </div>
            <Link to="/connexion-pro" className="navbar-mobile-item navbar-pro">
              BreadDrop Pro
            </Link>
          </div>
          <div className='overlay-bottom'>
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
