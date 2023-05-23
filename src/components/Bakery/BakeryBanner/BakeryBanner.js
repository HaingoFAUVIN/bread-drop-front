import PropTypes from 'prop-types';
import './styles.scss';

// Récupérer le nom du jour actuel
const getDayName = (dayIndex) => {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return days[dayIndex];
};

function BakeryBanner({ bakery, bakeryHours }) {
  const currentDay = getDayName(new Date().getDay());
  const currentDayHours = bakeryHours && bakeryHours.find((hour) => hour.day === currentDay && hour.bakery.id === bakery.id);

  return (
    <div className="banner">
      <div className="banner-card">
        <h1>{bakery ? bakery.name : 'Chargement...'}</h1>
        <p>{bakery ? bakery.adress : 'Chargement...'}</p>
        {currentDayHours && (
          <div>
            <p>
              {`${currentDayHours.day}: ${currentDayHours.openMorning} - ${currentDayHours.closeMorning}`}
            </p>
            <p>
              {`${currentDayHours.openAfternoon} - ${currentDayHours.closeAfternoon}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

BakeryBanner.propTypes = {
  bakery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    adress: PropTypes.string,
  }),
  bakeryHours: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      openMorning: PropTypes.string,
      closeMorning: PropTypes.string,
      openAfternoon: PropTypes.string,
      closeAfternoon: PropTypes.string,
      bakery: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ),
};

BakeryBanner.defaultProps = {
  bakery: null,
  bakeryHours: null,
};

export default BakeryBanner;
