import './styles.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

function Footer() {
  return (
    <section className="footer">

      <div className="footer-logo">
        <NavLink to="/" className="navbar-logo-image">
          <img src={Logo} alt="Logo BreadDrop" height="100" width="100" />
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
        <div>Instagram</div>
        <div>Facebook</div>
        <div>Twitter</div>
      </div>
    </section>
  );
}
export default Footer;
