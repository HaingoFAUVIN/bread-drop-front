// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer les composants enfants utilisés dans ce composant
import BakeryTitleViennoiserie from './BakeryTitleViennoiserie/BakeryTitleViennoiserie';
import BakeryViennoiserieList from './BakeryViennoiserieList/BakeryViennoiserieList';

// Composant Viennoiserie qui affiche le titre de la section "Viennoiserie" et une liste de pains si la section est visible
function Viennoiserie({ isVisible3, setIsVisible3, viennoiseries }) {
  // Rendu du composant
  return (
    <>
      <BakeryTitleViennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} />
      { isVisible3 && <BakeryViennoiserieList viennoiseries={viennoiseries} /> }
    </>
  );
}

// Valider les types de propriétés passées au composant Viennoiserie
Viennoiserie.propTypes = {
  isVisible3: PropTypes.bool.isRequired, // L'état de visibilité est requis et doit être un booléen
  setIsVisible3: PropTypes.func.isRequired, // La fonction de mise à jour de l'état de visibilité est requise et doit être une fonction
  viennoiseries: PropTypes.array.isRequired, // Le tableau des viennoiseries est requis
};

// Exporter le composant Viennoiserie pour permettre son utilisation dans d'autres fichiers
export default Viennoiserie;
