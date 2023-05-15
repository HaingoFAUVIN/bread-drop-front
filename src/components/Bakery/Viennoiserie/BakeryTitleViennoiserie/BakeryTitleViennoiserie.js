import PropTypes from 'prop-types';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import './styles.scss';
import { Link } from 'react-router-dom';

function BakeryTitleViennoiserie({ isVisible3, setIsVisible3 }) {
  return (
    <section className="category">
      <h1 className="category-title"> VIENNOISERIE</h1>
      <Link
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible3(!isVisible3);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible3 ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
      </Link>
    </section>
  );
}

BakeryTitleViennoiserie.propTypes = {
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
};

export default BakeryTitleViennoiserie;
