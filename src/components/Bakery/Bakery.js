// --- COMPOSANTS
import Nav from '../Home/Header/Nav/Nav';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakeryProductsList from './BakeryProductsList/BakeryProductsList';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import BakeryTitleCategories from './BakeryTitleCategories/BakeryTitleCategories';

// DATA, SCSS, ASSETS
import './styles.scss';

function Bakery() {
  return (
    <>
      <Nav />
      <BakeryBanner />
      <BakerySearchProducts />
      <BakeryTitleCategories />
      <BakeryProductsList />
    </>
  );
}

export default Bakery;
