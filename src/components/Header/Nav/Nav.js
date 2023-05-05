import { Link } from 'react-router-dom';
import IconTextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Logo from '../../../assets/Logo.png';

import './styles.scss';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-image">
            <img src={Logo} alt="Logo BreadDrop" height="100" width="100" />
          </Link>
        </div>
        <div className="adress-input">
          <IconTextField
            placeholder="Modifier mon adresse"
            iconStart={<AddLocationIcon sx={{ color: 'white', fontSize: 20 }} />}
          />
        </div>
      </div>

      <div className="navbar-menu">
        <Link to="/" className="navbar-item navbar-panier">
          <ShoppingCartIcon fontSize="small" />
          Panier
        </Link>
        <Link to="/" className="navbar-item navbar-pro">
          BreadDrop Pro
        </Link>
        <Link to="/" className="navbar-item navbar-inscription">
          Inscription
        </Link>
        <Link to="/" className="navbar-item navbar-connexion">
          Connexion
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
