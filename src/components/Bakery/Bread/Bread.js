// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer les composants enfants utilisés dans ce composant
import BakeryTitleBread from './BakeryTitleBread/BakeryTitleBread';
import BakeryBreadList from './BakeryBreadList/BakeryBreadList';

// Composant Bread qui affiche le titre de la section "Bread" et une liste de pains si la section est visible
function Bread({ isVisible, setIsVisible, breads }) {
  // Rendu du composant
  return (
    <>
      <BakeryTitleBread isVisible={isVisible} setIsVisible={setIsVisible} />
      { isVisible && <BakeryBreadList breads={breads} /> }
    </>
  );
}

// Valider les types de propriétés passées au composant Bread
Bread.propTypes = {
  isVisible: PropTypes.bool.isRequired,  // L'état de visibilité est requis et doit être un booléen
  setIsVisible: PropTypes.func.isRequired,  // La fonction de mise à jour de l'état de visibilité est requise et doit être une fonction
  breads: PropTypes.array.isRequired,  // Le tableau de pains est requis
};

// Exporter le composant Bread pour permettre son utilisation dans d'autres fichiers
export default Bread;
