// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer les icônes pour l'indication de visibilité
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

// Importer les styles spécifiques à ce composant
import './styles.scss';

// Importer le composant Link pour la navigation
import { Link } from 'react-router-dom';

// Composant BakeryTitleViennoiserie qui affiche le titre de la section "Viennoiserie" et un bouton pour alterner la visibilité de la liste des pains
function BakeryTitleViennoiserie({ isVisible3, setIsVisible3 }) {
  // Rendu du composant
  return (
    <section className="category">
      <h1 className="category-title"> VIENNOISERIE</h1>
      <Link
        className="category-button" // Classe pour le bouton
        type="button"
        onClick={() => { // Gestionnaire de clic pour le bouton
          setIsVisible3(!isVisible3);  // Inverse l'état de visibilité lorsqu'on clique sur le bouton
        }}
      >
<<<<<<< HEAD
        {isVisible3 ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
=======
        {/* STYLISER LE BUTTON  */}
        {isVisible3 ? <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} /> : <ArrowCircleDownOutlinedIcon sx={{ fontSize: 40 }} />}
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
      </Link>
    </section>
  );
}
// Valider les types de propriétés passées au composant BakeryTitleViennoiserie
BakeryTitleViennoiserie.propTypes = {
  isVisible3: PropTypes.bool.isRequired, // L'état de visibilité est requis et doit être un booléen
  setIsVisible3: PropTypes.func.isRequired,  // La fonction de mise à jour de l'état de visibilité est requise et doit être une fonction
};

// Exporter le composant BakeryTitleViennoiserie pour permettre son utilisation dans d'autres fichiers
export default BakeryTitleViennoiserie;
