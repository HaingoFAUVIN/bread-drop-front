// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer les icônes pour l'indication de visibilité
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

// Importer les styles spécifiques à ce composant
import './styles.scss';

// Importer le composant Link pour la navigation
import { Link } from 'react-router-dom';

// Composant BakeryTitleBread qui affiche le titre de la section "Pains" et un bouton pour alterner la visibilité de la liste des pains
function BakeryTitleBread({ isVisible, setIsVisible }) {
  // Rendu du composant
  return (
    <section className="category">
<<<<<<< HEAD
      <h1 className="category-title"> PAINS</h1>
      <Link
        className="category-button"  // Classe pour le bouton
        onClick={() => {  // Gestionnaire de clic pour le bouton
          setIsVisible(!isVisible);  // Inverse l'état de visibilité lorsqu'on clique sur le bouton
        }}
      >
        {/* Icône qui change en fonction de l'état de visibilité */}
        {isVisible ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
      </Link>
=======
      <div className="category-h1">
        <h1 className="category-title">PAINS</h1>
      </div>
      <div className="category-div">
        <Link
          className="category-button"
          onClick={() => {
            // console.log('Boutton cliqué');
            setIsVisible(!isVisible);
          }}
        >
          {/* STYLISER LE BUTTON  */}
          {isVisible ? <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} /> : <ArrowCircleDownOutlinedIcon sx={{ fontSize: 40 }} />}
        </Link>
      </div>
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
    </section>
  );
}

// Valider les types de propriétés passées au composant BakeryTitleBread
BakeryTitleBread.propTypes = {
  isVisible: PropTypes.bool.isRequired,  // L'état de visibilité est requis et doit être un booléen
  setIsVisible: PropTypes.func.isRequired,  // La fonction de mise à jour de l'état de visibilité est requise et doit être une fonction
};

// Exporter le composant BakeryTitleBread pour permettre son utilisation dans d'autres fichiers
export default BakeryTitleBread;
