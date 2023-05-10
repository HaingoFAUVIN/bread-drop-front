import PropTypes from 'prop-types';

// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';
import BakeryPastryList from './BakeryPastryList/BakeryPastryList';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';
import BakeryTitlePastry from './BakeryTitlePastry/BakeryTitlePastry';

// DATA, SCSS, ASSETS
import './styles.scss';

function Bakery({
  isVisible,
  setIsVisible,
  isVisible2,
  setIsVisible2,
}) {
  return (
    <>
      <Nav />
      <BakeryBanner />
      <BakerySearchProducts />
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList /> }
      <BakeryTitlePastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />
      { isVisible2 && <BakeryPastryList /> }
    </>
  );
}

Bakery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
};
export default Bakery;
