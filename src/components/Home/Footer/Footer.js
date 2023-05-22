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
          <NavLink to="/">
            <div className="footer-link1">LINK FOOTER</div>
          </NavLink>
          <NavLink to="/">
            <div className="footer-link2">LINK FOOTER</div>
          </NavLink>
          <NavLink to="/">
            <div className="footer-link3">LINK FOOTER</div>
          </NavLink>
        </div>
        <div className="footer-linkTwo">
          <NavLink to="/">
            <div className="footer-link4">LINK FOOTER</div>
          </NavLink>
          <NavLink to="/">
            <div className="footer-link5">LINK FOOTER</div>
          </NavLink>
          <NavLink to="/">
            <div className="footer-link6">LINK FOOTER</div>
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
