// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';
// Importer les icônes de la bibliothèque de matériaux de conception pour les utiliser dans le composant
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
// Importer les styles spécifiques à ce composant
import './styles.scss';
// Importer le composant Link de la bibliothèque react-router-dom pour créer des liens navigables
import { Link } from 'react-router-dom';

// Composant BakeryTitleSandwich qui affiche le titre de la section des sandwichs et une icône qui change selon l'état de isVisible4
function BakeryTitleSandwich({ isVisible4, setIsVisible4 }) {
  // Rendu du composant
  return (
    <section className="category">
      <h1 className="category-title"> SANDWICH</h1>
      <Link
        className="category-button"  // Le bouton qui affiche l'icône est rendu en tant que lien pour la navigation
        type="button"
        onClick={() => {  // Lorsqu'on clique sur le bouton, l'état de isVisible4 est inversé
          setIsVisible4(!isVisible4);
        }}
      >
<<<<<<< HEAD
        {isVisible4 ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
=======
        {/* STYLISER LE BUTTON  */}
        {isVisible4 ? <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} /> : <ArrowCircleDownOutlinedIcon sx={{ fontSize: 40 }} />}
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
      </Link>
    </section>
  );
}

// Valider les types de propriétés passées au composant BakeryTitleSandwich
BakeryTitleSandwich.propTypes = {
  isVisible4: PropTypes.bool.isRequired,  // isVisible4 est requis et doit être un booléen
  setIsVisible4: PropTypes.func.isRequired,  // setIsVisible4 est requis et doit être une fonction
};

// Exporter le composant BakeryTitleSandwich pour permettre son utilisation dans d'autres fichiers
export default BakeryTitleSandwich;
