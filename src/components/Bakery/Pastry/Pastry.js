// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer les composants enfants qui seront utilisés dans ce composant
import BakeryTitlePastry from './BakeryTitlePastry/BakeryTitlePastry';
import BakeryPastryList from './BakeryPastryList/BakeryPastryList';

// Composant Pastry qui affiche le titre de la section des pâtisseries et la liste des pâtisseries si isVisible2 est vrai
function Pastry({ isVisible2, setIsVisible2, pastries }) {
  // Rendu du composant
  return (
    <>

      <BakeryTitlePastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} />

      { isVisible2 && <BakeryPastryList pastries={pastries} /> }
    </>
  );
}

// Valider les types de propriétés passées au composant Pastry
Pastry.propTypes = {
  isVisible2: PropTypes.bool.isRequired,  // isVisible2 est requis et doit être un booléen
  setIsVisible2: PropTypes.func.isRequired,  // setIsVisible2 est requis et doit être une fonction
  pastries: PropTypes.array.isRequired,  // pastries est requis et doit être un tableau
};

// Exporter le composant Pastry pour permettre son utilisation dans d'autres fichiers
export default Pastry;
