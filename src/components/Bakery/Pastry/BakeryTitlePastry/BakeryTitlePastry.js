// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';
// Importer les icônes nécessaires pour le composant
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
// Importer les styles spécifiques à ce composant
import './styles.scss';
// Importer le composant Link de react-router-dom pour la navigation
import { Link } from 'react-router-dom';

// Composant BakeryTitlePastry qui affiche le titre de la section des pâtisseries et un bouton pour afficher ou cacher la liste des pâtisseries
function BakeryTitlePastry({ isVisible2, setIsVisible2 }) {
  // Rendu du composant
  return (
    <section className="category">
      <h1 className="category-title"> PÂTISSERIE</h1>
      <Link
        className="category-button"
        type="button"
        onClick={() => {
          // Change l'état de isVisible2 à son inverse actuel
          setIsVisible2(!isVisible2);
        }}
      >
<<<<<<< HEAD
        {/* Affiche une icône différente en fonction de l'état de isVisible2 */}
        {isVisible2 ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
=======
        {/* STYLISER LE BUTTON  */}
        {isVisible2 ? <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} /> : <ArrowCircleDownOutlinedIcon sx={{ fontSize: 40 }} />}
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
      </Link>
    </section>
  );
}

// Valider les types de propriétés passées au composant BakeryTitlePastry
BakeryTitlePastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,  // isVisible2 est requis et doit être un booléen
  setIsVisible2: PropTypes.func.isRequired,  // setIsVisible2 est requis et doit être une fonction
};

// Exporter le composant BakeryTitlePastry pour permettre son utilisation dans d'autres fichiers
export default BakeryTitlePastry;
