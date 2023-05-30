// Importation des modules et composants nécessaires
import PropTypes from 'prop-types'; // Pour la validation des types de propriétés du composant
import { Link } from 'react-router-dom'; // Pour la navigation entre les différentes routes
import { useState } from 'react'; // Hook useState de React pour gérer l'état local du composant
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Icône pour le bouton d'ajout au panier
import Modal from '../../Modal/Modal'; // Composant Modal pour afficher les détails du produit sélectionné
import sandwichImg from './sandwich.jpg'; // Image par défaut pour les sandwiches sans image
import './styles.scss'; // Styles spécifiques au composant BakerySandwichList

// Composant BakerySandwichList pour afficher la liste des sandwiches
function BakerySandwichList({ sandwiches }) {
  // Déclaration de l'état local pour gérer l'ouverture/fermeture du modal et le produit sélectionné
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour ouvrir le modal et définir le produit sélectionné
  const handleOpenModal = (sandwich) => {
    setSelectedProduct(sandwich);
    setOpenModal(true);
  };

  // Rendu du composant
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {sandwiches.filter((sandwich) => sandwich.category === 'sandwich').map((sandwich) => (
        <div className="card" key={sandwich.id}>
          <div className="card-image">
            <img className="imageCard" src={sandwich.picture || sandwichImg} alt="SANDWICH" />
          </div>
          <h2 className="card-title">{sandwich.name}</h2>
          <div className="card-infos">
            <div className="card-priceQuantite">
              <p>{sandwich.price}€</p>
              <p>En Stock</p>
            </div>
            <Link
              className="OpenModal"
              onClick={() => {
                handleOpenModal(sandwich);
              }}
            >
              <AddCircleOutlineIcon />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

// Valider les types de propriétés passées au composant BakerySandwichList
BakerySandwichList.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, // id est requis et doit être un nombre
    picture: PropTypes.string.isRequired, // picture est requis et doit être une chaîne de caractères
    name: PropTypes.string.isRequired, // name est requis et doit être une chaîne de caractères
    price: PropTypes.number.isRequired, // price est requis et doit être un nombre
  })).isRequired, // Le tableau de sandwiches est requis
};

// Exporter le composant BakerySandwichList pour permettre son utilisation dans d'autres fichiers
export default BakerySandwichList;
