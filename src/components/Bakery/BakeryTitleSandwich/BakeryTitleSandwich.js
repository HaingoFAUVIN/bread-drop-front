import PropTypes from 'prop-types';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import './styles.scss';

function BakeryTitleSandwich({ isVisible4, setIsVisible4 }) {
  return (
    <section className="category">
      <h1 className="category-title"> SANDWICH</h1>
      <button
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible4(!isVisible4);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible4 ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
      </button>
    </section>
  );
}

BakeryTitleSandwich.propTypes = {
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
};

export default BakeryTitleSandwich;
