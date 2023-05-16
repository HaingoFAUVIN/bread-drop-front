import PropTypes from 'prop-types';

import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';

function Bread({ isVisible, setIsVisible, breads }) {
  return (
    <>
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList breads={breads} /> }
    </>
  );
}

Bread.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  breads: PropTypes.array.isRequired,
};

export default Bread;
