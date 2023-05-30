// Importer les modules et les composants nécessaires
import PropTypes from 'prop-types'; // Pour la validation des types de propriétés du composant
import { useState, useContext } from 'react'; // Pour utiliser l'état et le contexte dans le composant
import { CartContext } from '../../../contexts/CartContext'; // Pour accéder au contexte du panier
import './styles.scss'; // Styles spécifiques à ce composant

// Composant QuantityForm qui permet aux utilisateurs de choisir la quantité d'un produit et de l'ajouter au panier
function QuantityForm({ product }) {
  // Initialiser l'état de la quantité à 1
  const [quantity, setQuantity] = useState(1);

  // Extraire la fonction addToCart du contexte du panier
  const { addToCart } = useContext(CartContext);

  // Gérer le changement de la quantité
  const handleQuantityChange = (event) => {
    // Mettre à jour la quantité avec la valeur entrée par l'utilisateur
    setQuantity(event.target.value);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher l'actualisation de la page lors de la soumission du formulaire
    addToCart(product, quantity); // Ajouter le produit et la quantité au panier
  };

  // Rendu du composant
  return (
    <form onSubmit={handleSubmit} className="formQuantity">
      <label className="labelQuantity">
        Quantité :
        <input
          className="inputNumber"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange} // Appeler handleQuantityChange chaque fois que la valeur de l'input change
        />
      </label>
      <button type="submit" className="formAddQuantity">Ajouter au panier</button>
    </form>
  );
}

// Valider les types de propriétés passées au composant QuantityForm
QuantityForm.propTypes = {
  product: PropTypes.array.isRequired, // Le produit est requis et doit être un tableau
};

// Exporter le composant QuantityForm pour permettre son utilisation dans d'autres fichiers
export default QuantityForm;
