import PropTypes from 'prop-types';
import Footer from '../Home/Footer/Footer';

// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';
import BakeryPastryList from './BakeryPastryList/BakeryPastryList';
import BakerySandwichList from './BakerySandwichList/BakerySandwichList';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';
import BakeryTitlePastry from './BakeryTitlePastry/BakeryTitlePastry';
import BakeryTitleSandwich from './BakeryTitleSandwich/BakeryTitleSandwich';
import BakeryTitleViennoiserie from './BakeryTitleViennoiserie/BakeryTitleViennoiserie';
import BakeryViennoiserieList from './BakeryViennoiserieList/BakeryViennoiserieList';

// DATA, SCSS, ASSETS
import './styles.scss';

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
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList /> }
      <BakeryTitlePastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />
      { isVisible2 && <BakeryPastryList /> }
      <BakeryTitleViennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} />
      { isVisible3 && <BakeryViennoiserieList /> }
      <BakeryTitleSandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} />
      { isVisible4 && <BakerySandwichList /> }
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
