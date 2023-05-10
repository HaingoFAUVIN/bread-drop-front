import PropTypes from 'prop-types';

import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';

function Bread({ isVisible, setIsVisible }) {
  return (
    <>
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList /> }
    </>
  );
}

Bread.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default Bread;
