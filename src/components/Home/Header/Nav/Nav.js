import { useState, useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
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
  const { user, isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);

  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsUserLoggedIn(false);
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
      </div>

      <div className="navbar-menu">
        <Link to="/panier" className="navbar-item navbar-panier">
          <ShoppingCartIcon fontSize="small" />
          Panier
        </Link>
        <Link to="?" className="navbar-item navbar-pro">
          BreadDrop Pro
        </Link>
        {isUserLoggedIn ? (
          <Link to="/profil" className="navbar-profile">
            <img className="navbar-profile-img" src={profileImg} alt="profile" height="50" width="50" />
          </Link>
        ) : (
          <>
            <Link to="/inscription" className="navbar-item navbar-inscription">
              Inscription
            </Link>
            <Link to="/connexion" className="navbar-item navbar-connexion">
              Connexion
            </Link>
          </>
        )}
      </div>
      
      <div id="overlay" className={isOverlayVisible ? "overlay--active" : ""} style={{ display: isOverlayVisible ? "block" : "none" }}>
        <button type="button" className="navbar-responsive-close-button" onClick={handleCloseOverlay}> <CloseIcon fontSize="large" /></button>
        <div className="navbar-responsive-menu">
          <div className="overlay-top">
            <Link to="/profil" className="navbar-mobile-item navbar-panier">
              Mon compte
            </Link>
            <Link to="/connexion-pro" className="navbar-mobile-item navbar-pro">
              BreadDrop Pro
            </Link>
          </div>
          <div className='overlay-bottom'>
            {isUserLoggedIn  ? (
              <Link to="#" onClick={handleLogout} className="navbar-mobile-item navbar-connexion">
                Déconnexion
              </Link>
            ) : (
              <Link to="/connexion" className="navbar-mobile-item navbar-connexion">
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;