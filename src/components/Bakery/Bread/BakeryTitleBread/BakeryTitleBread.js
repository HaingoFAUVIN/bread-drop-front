/* eslint-disable react/button-has-type */ // TYPE BUTTON DESACTIVER
import PropTypes from 'prop-types';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import './styles.scss';
import { Link } from 'react-router-dom';

function BakeryTitleBread({ isVisible, setIsVisible }) {
  return (
    <section className="category">
      <h1 className="category-title"> PAINS</h1>
      <Link
        className="category-button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible(!isVisible);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
      </Link>
    </section>
  );
}

BakeryTitleBread.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default BakeryTitleBread;
