import PropTypes from 'prop-types';

import BakeryTitlePastry from './BakeryTitlePastry/BakeryTitlePastry';
import BakeryPastryList from './BakeryPastryList/BakeryPastryList';

function Pastry({ isVisible2, setIsVisible2, pastries }) {
  return (
    <>
      <BakeryTitlePastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />
      { isVisible2 && <BakeryPastryList pastries={pastries} /> }
    </>
  );
}

Pastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
  pastries: PropTypes.array.isRequired,
};

export default Pastry;
