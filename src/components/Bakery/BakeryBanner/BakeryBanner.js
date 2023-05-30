// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';
// Importer les styles spécifiques à ce composant
import './styles.scss';

// Fonction qui renvoie le nom du jour de la semaine en français, basé sur un index (0: dimanche, 6: samedi)
const getDayName = (dayIndex) => {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return days[dayIndex];
};

// Composant BakeryBanner qui affiche les informations de la boulangerie et les horaires d'ouverture actuels
function BakeryBanner({ bakery, bakeryHours }) {
  // Obtenir le nom du jour actuel
  const currentDay = getDayName(new Date().getDay());
  // Trouver les heures d'ouverture de la boulangerie pour le jour actuel
  const currentDayHours = bakeryHours && bakeryHours.find((hour) => hour.day === currentDay && hour.bakery.id === bakery.id);

  // Rendu du composant
  return (
    <div className="banner">
      <div className="banner-card">
        <h1>{bakery ? bakery.name : 'Chargement...'}</h1>
        <p>{bakery ? bakery.adress : 'Chargement...'}</p>
        {currentDayHours && (  // Si les heures d'ouverture pour le jour actuel existent
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

// Valider les types de propriétés passées au composant BakeryBanner
BakeryBanner.propTypes = {
  bakery: PropTypes.shape({  // La boulangerie doit être un objet avec certains attributs
    id: PropTypes.number.isRequired,  // ID est requis et doit être un nombre
    name: PropTypes.string,  // Le nom peut être une chaîne de caractères
    adress: PropTypes.string,  // L'adresse peut être une chaîne de caractères
  }),
  bakeryHours: PropTypes.arrayOf(  // Les horaires de la boulangerie doivent être un tableau d'objets avec certains attributs
    PropTypes.shape({
      day: PropTypes.string,  // Le jour peut être une chaîne de caractères
      openMorning: PropTypes.string,  // L'heure d'ouverture du matin peut être une chaîne de caractères
      closeMorning: PropTypes.string,  // L'heure de fermeture du matin peut être une chaîne de caractères
      openAfternoon: PropTypes.string,  // L'heure d'ouverture de l'après-midi peut être une chaîne de caractères
      closeAfternoon: PropTypes.string,  // L'heure de fermeture de l'après-midi peut être une chaîne de caractères
      bakery: PropTypes.shape({  // La boulangerie liée aux horaires doit être un objet avec certains attributs
        id: PropTypes.number.isRequired,  // ID est requis et doit être un nombre
      }).isRequired,  // La boulangerie liée aux horaires est requise
    }),
  ),
};

// Définir les propriétés par défaut si elles ne sont pas fournies lors de l'utilisation du composant BakeryBanner
BakeryBanner.defaultProps = {
  bakery: null,  // Par défaut, la boulangerie est nulle
  bakeryHours: null,  // Par défaut, les heures d'ouverture de la boulangerie sont nulles
};

// Exporter le composant BakeryBanner pour permettre son utilisation dans d'autres fichiers
export default BakeryBanner;
