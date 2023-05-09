import PropTypes from 'prop-types';
import './styles.scss';

function BakeryTitleBread({ isVisible, setIsVisible }) {
  return (
    <section className="category">
      <h1 className="category-title"> PAINS</h1>
      <button
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible(!isVisible);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible ? 'Cachez' : 'Afficher'} la liste
      </button>
    </section>
  );
}

BakeryTitleBread.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default BakeryTitleBread;
