import PropTypes from 'prop-types';

// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';

// DATA, SCSS, ASSETS
import './styles.scss';

function Bakery({ isVisible, setIsVisible }) {
  return (
    <>
      <Nav />
      <BakeryBanner />
      <BakerySearchProducts />
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList /> }
    </>
  );
}

Bakery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};
export default Bakery;
