import PropTypes from 'prop-types';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import './styles.scss';
import { Link } from 'react-router-dom';

function BakeryTitlePastry({ isVisible2, setIsVisible2 }) {
  return (
    <section className="category">
      <h1 className="category-title"> PÂTISSERIE</h1>
      <Link
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible2(!isVisible2);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible2 ? <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} /> : <ArrowCircleDownOutlinedIcon sx={{ fontSize: 40 }} />}
      </Link>
    </section>
  );
}

BakeryTitlePastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
};

export default BakeryTitlePastry;
