import PropTypes from 'prop-types';
import Footer from '../Home/Footer/Footer';

// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import Bread from './Bread/Bread';
import Pastry from './Pastry/Pastry';
import Viennoiserie from './Viennoiserie/Viennoiserie';
import Sandwich from './Sandwich/Sandwich';

// DATA, SCSS, ASSETS

function Bakery({
  isVisible,
  setIsVisible,
  isVisible2,
  setIsVisible2,
  isVisible3,
  setIsVisible3,
  isVisible4,
  setIsVisible4,
}) {
  return (
    <>
      {/* SUPPRIMER LA NAV AVANT DE PULL */}
      <Nav />

      <BakeryBanner />
      <BakerySearchProducts />
      <Bread isVisible={isVisible} setIsVisible={setIsVisible} />
      <Pastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />
      <Viennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} />
      <Sandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} />

      {/* SUPPRIMER LE FOOTER AVANT DE PULL */}
      <Footer />

    </>
  );
}

Bakery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
};
export default Bakery;
