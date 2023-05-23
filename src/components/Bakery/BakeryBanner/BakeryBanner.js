import PropTypes from 'prop-types';
import './styles.scss';

function BakeryBanner({ bakery }) {
  return (
    <div className="banner">
      <div className="banner-card">
        <h1>{bakery ? bakery.name : 'Chargement...'}</h1>
        <p>{bakery ? bakery.adress : 'Chargement...'}</p>
        <p>HORAIRES</p>
      </div>
    </div>
  );
}

BakeryBanner.propTypes = {
  bakery: PropTypes.shape({
    name: PropTypes.string,
    adress: PropTypes.string,
  }),
};

BakeryBanner.defaultProps = {
  bakery: null,
};

export default BakeryBanner;
