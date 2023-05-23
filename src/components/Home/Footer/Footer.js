import './styles.scss';
import { Link, NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../../../assets/Logo.png';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-logo">
        <NavLink to="/" className="navbar-logo-image">
          <img src={Logo} alt="Logo BreadDrop" />
        </NavLink>
      </div>

      <div className="footer-link">
        <div className="footer-linkOne">
          <NavLink to="/home">
            <div className="footer-link1">ACCUEIL</div>
          </NavLink>
          <NavLink to="/home">
            <div className="footer-link2">A PROPOS</div>
          </NavLink>
          <NavLink to="/home">
            <div className="footer-link3">CONTACT</div>
          </NavLink>
        </div>
        <div className="footer-linkTwo">
          <NavLink to="/home">
            <div className="footer-link4">MENTIONS LEGALES</div>
          </NavLink>
          <NavLink to="/home">
            <div className="footer-link5">CONFIDENTIALITE ET SECURITE</div>
          </NavLink>
          <NavLink to="/home">
            <div className="footer-link6">CONDITIONS GENERALES DE VENTE</div>
          </NavLink>
        </div>
      </div>
      <div className="footer-sociaux">
        <Link to="#" className="footer-sociaux-icons"><InstagramIcon /></Link>
        <Link to="#" className="footer-sociaux-icons"><FacebookIcon /></Link>
        <Link to="#" className="footer-sociaux-icons"><TwitterIcon /></Link>
      </div>
    </section>
  );
}
export default Footer;
