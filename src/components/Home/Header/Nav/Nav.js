<<<<<<< HEAD
// Importer les modules nécessaires
import { useState, useContext } from 'react';  // Importer useState pour gérer l'état local et useContext pour accéder au contexte
import { Link } from 'react-router-dom';  // Importer Link pour gérer la navigation
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  // Importer l'icône du panier
import MenuIcon from '@mui/icons-material/Menu';  // Importer l'icône du menu
import CloseIcon from '@mui/icons-material/Close';  // Importer l'icône de fermeture
import Logo from '../../../../assets/Logo.png';  // Importer le logo
import profileImg from '../../../../assets/profile.jpg';  // Importer l'image de profil par défaut
import { UserContext } from '../../../../contexts/UserContext';  // Importer le contexte utilisateur
=======
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from '../../../../contexts/UserContext';
import Logo from '../../../../assets/Logo.png';
import profileImg from '../../../../assets/profile.jpg';
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4

import './styles.scss';  // Importer les styles du composant

// Composant de la barre de navigation
function Nav() {
  // Définir l'état pour afficher ou masquer l'overlay du menu responsive
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  // Utiliser le contexte utilisateur pour accéder aux informations de l'utilisateur et à l'état de connexion
  const { user, isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);

<<<<<<< HEAD
  // Fonction pour ouvrir l'overlay du menu responsive
=======
  const userRole = sessionStorage.getItem('userRoles');
  const userId = sessionStorage.getItem('userId');
  console.log(userId);

  const isManager = userRole === 'ROLE_MANAGER';


>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  // Fonction pour fermer l'overlay du menu responsive
  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    sessionStorage.removeItem('token');  // Supprimer le token de la session
    setIsUserLoggedIn(false);  // Mettre à jour l'état de connexion de l'utilisateur
  };

  // Rendu du composant
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
        {isManager && (
          <Link to={`https://davyvistel-server.eddi.cloud/back/boulangerie/utilisateur/${userId}`} className="navbar-item navbar-pro">
            BreadDrop Pro
          </Link>
        )}
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

      {/* Overlay pour le menu responsive */}
      <div id="overlay" className={isOverlayVisible ? "overlay--active" : ""} style={{ display: isOverlayVisible ? "block" : "none" }}>
        <button type="button" className="navbar-responsive-close-button" onClick={handleCloseOverlay}> <CloseIcon fontSize="large" /></button>
        <div className="navbar-responsive-menu">
          <div className="overlay-top">
            <Link to="/profil" className="navbar-mobile-item navbar-panier">
              Mon compte
            </Link>
            {isManager && (
              <Link to={`https://davyvistel-server.eddi.cloud/back/boulangerie/utilisateur/${userId}`} className="navbar-item navbar-pro">
                BreadDrop Pro
              </Link>
            )}
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

// Exporter le composant pour pouvoir l'utiliser dans d'autres modules
export default Nav;
