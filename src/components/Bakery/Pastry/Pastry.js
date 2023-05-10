import PropTypes from 'prop-types';

import BakeryTitlePastry from './BakeryTitlePastry/BakeryTitlePastry';
import BakeryPastryList from './BakeryPastryList/BakeryPastryList';

function Pastry({ isVisible2, setIsVisible2 }) {
  return (
    <>
      <BakeryTitlePastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />
      { isVisible2 && <BakeryPastryList /> }
    </>
  );
}

Pastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
};

export default Pastry;
