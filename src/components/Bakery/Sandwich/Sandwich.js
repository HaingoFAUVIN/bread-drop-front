import PropTypes from 'prop-types';

import BakeryTitleSandwich from './BakeryTitleSandwich/BakeryTitleSandwich';
import BakerySandwichList from './BakerySandwichList/BakerySandwichList';

function Sandwich({ isVisible4, setIsVisible4 }) {
  return (
    <>
      <BakeryTitleSandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} />
      { isVisible4 && <BakerySandwichList /> }
    </>
  );
}

Sandwich.propTypes = {
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
};

export default Sandwich;
