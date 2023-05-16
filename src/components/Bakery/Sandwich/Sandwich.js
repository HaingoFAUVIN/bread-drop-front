import PropTypes from 'prop-types';

import BakeryTitleSandwich from './BakeryTitleSandwich/BakeryTitleSandwich';
import BakerySandwichList from './BakerySandwichList/BakerySandwichList';

function Sandwich({ isVisible4, setIsVisible4, sandwiches }) {
  return (
    <>
      <BakeryTitleSandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} />
      { isVisible4 && <BakerySandwichList sandwiches={sandwiches} /> }
    </>
  );
}

Sandwich.propTypes = {
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
  sandwiches: PropTypes.array.isRequired,
};

export default Sandwich;
