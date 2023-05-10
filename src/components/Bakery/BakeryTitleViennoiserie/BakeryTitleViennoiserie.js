import PropTypes from 'prop-types';
import './styles.scss';

function BakeryTitleViennoiserie({ isVisible3, setIsVisible3 }) {
  return (
    <section className="category">
      <h1 className="category-title"> VIENNOISERIE</h1>
      <button
        className="category-button"
        type="button"
        onClick={() => {
          // console.log('Boutton cliqué');
          setIsVisible3(!isVisible3);
        }}
      >
        {/* STYLISER LE BUTTON  */}
        {isVisible3 ? 'Cachez' : 'Afficher'} la liste
      </button>
    </section>
  );
}

BakeryTitleViennoiserie.propTypes = {
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
};

export default BakeryTitleViennoiserie;
