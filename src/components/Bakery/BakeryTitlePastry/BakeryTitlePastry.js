import PropTypes from 'prop-types';
import './styles.scss';

function BakeryTitlePastry({ isVisible2, setIsVisible2 }) {
  return (
    <section className="category">
      <h1 className="category-title"> PÂTISSERIES</h1>
      <button
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible2(!isVisible2);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible2 ? 'Cachez' : 'Afficher'} la liste
      </button>
    </section>
  );
}

BakeryTitlePastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
};

export default BakeryTitlePastry;
