import PropTypes from 'prop-types';

import BakeryTitleViennoiserie from './BakeryTitleViennoiserie/BakeryTitleViennoiserie';
import BakeryViennoiserieList from './BakeryViennoiserieList/BakeryViennoiserieList';

function Viennoiserie({ isVisible3, setIsVisible3, viennoiseries }) {
  return (
    <>
      <BakeryTitleViennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} />
      { isVisible3 && <BakeryViennoiserieList viennoiseries={viennoiseries} /> }
    </>
  );
}

Viennoiserie.propTypes = {
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
  viennoiseries: PropTypes.array.isRequired,
};

export default Viennoiserie;
