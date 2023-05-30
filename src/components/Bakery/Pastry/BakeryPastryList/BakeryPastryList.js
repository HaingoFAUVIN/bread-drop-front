// Importer les modules et composants nécessaires
import { Link } from 'react-router-dom'; // Pour la navigation et le comportement du bouton
import PropTypes from 'prop-types'; // Pour la validation des types de propriétés du composant
import { useState } from 'react'; // Pour utiliser l'état dans le composant
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Icone pour le bouton d'ajout
import Modal from '../../Modal/Modal'; // Composant modal pour afficher les détails du produit
import pastryImg from './pastry.jpg'; // Image par défaut pour une pâtisserie
import './styles.scss'; // Styles spécifiques à ce composant

// Composant BakeryPastryList qui affiche une liste de pâtisseries
function BakeryPastryList({ pastries }) {
  // Initialiser l'état pour gérer l'affichage du modal et le produit sélectionné
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour gérer l'ouverture du modal
  const handleOpenModal = (pastry) => {
    setSelectedProduct(pastry); // Définir le produit sélectionné
    setOpenModal(true); // Ouvrir le modal
  };

  // Rendu du composant
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {pastries.map((pastry) => (
        <div className="card" key={pastry.id}>
          <div className="card-image">
            <img className="imageCard" src={pastry.picture || pastryImg} alt="PÂTISSERIE" />
          </div>
          <h2 className="card-title">{pastry.name}</h2>
          <div className="card-infos">
            <div className="card-priceQuantite">
              <p>{pastry.price}€</p>
              <p>En Stock</p>
            </div>
            <Link
              className="OpenModal"
              onClick={() => {
                handleOpenModal(pastry); // Appeler la fonction handleOpenModal lorsqu'on clique sur le lien
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

// Valider les types de propriétés passées au composant BakeryPastryList
BakeryPastryList.propTypes = {
  pastries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, // L'ID est requis et doit être un nombre
    picture: PropTypes.string.isRequired, // L'image est requise et doit être une chaîne de caractères
    name: PropTypes.string.isRequired, // Le nom est requis et doit être une chaîne de caractères
    price: PropTypes.number.isRequired, // Le prix est requis et doit être un nombre
  })).isRequired, // Le tableau de pâtisseries est requis
};

// Exporter le composant BakeryPastryList pour permettre son utilisation dans d'autres fichiers
export default BakeryPastryList;
