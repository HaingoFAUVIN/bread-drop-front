// Importation des modules et composants nécessaires
import PropTypes from 'prop-types'; // Pour la validation des types de propriétés du composant
import BakeryTitleSandwich from './BakeryTitleSandwich/BakeryTitleSandwich'; // Composant pour le titre de la section sandwich
import BakerySandwichList from './BakerySandwichList/BakerySandwichList'; // Composant pour la liste des sandwiches

// Composant Sandwich qui affiche le titre de la section sandwich et la liste des sandwiches, en fonction de l'état de visibility
function Sandwich({ isVisible4, setIsVisible4, sandwiches }) {
  // Rendu du composant
  return (
    <>
      <BakeryTitleSandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} />
      { isVisible4 && <BakerySandwichList sandwiches={sandwiches} /> }
    </>
  );
}

// Valider les types de propriétés passées au composant Sandwich
Sandwich.propTypes = {
  isVisible4: PropTypes.bool.isRequired, // L'état de visibilité (isVisible4) est requis et doit être un booléen
  setIsVisible4: PropTypes.func.isRequired, // La fonction pour modifier l'état de visibilité (setIsVisible4) est requise et doit être une fonction
  sandwiches: PropTypes.array.isRequired, // Le tableau des sandwiches est requis
};

// Exporter le composant Sandwich pour permettre son utilisation dans d'autres fichiers
export default Sandwich;
