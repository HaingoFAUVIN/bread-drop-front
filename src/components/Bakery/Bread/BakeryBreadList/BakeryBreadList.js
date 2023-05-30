// Importer le module PropTypes pour valider les types de propriétés du composant
import PropTypes from 'prop-types';

// Importer la possibilité de mener à des pages
import { Link } from 'react-router-dom';

// Importer le hook useState pour gérer l'état local du composant
import { useState } from 'react';

// Importer l'icône pour le bouton d'ajout au panier
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Importer le composant Modal pour afficher les détails du produit
import Modal from '../../Modal/Modal';

// Importer l'image par défaut pour le pain
import pain from './pain.jpg';

// Importer les styles spécifiques à ce composant
import './styles.scss';

// Composant BakeryBreadList qui affiche une liste de pains disponibles
function BakeryBreadList({ breads }) {
  // État local pour contrôler l'ouverture de la modal et le produit sélectionné
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour gérer l'ouverture de la modal
  const handleOpenModal = (bread) => {
    setSelectedProduct(bread);  // Mettre à jour le produit sélectionné
    setOpenModal(true);  // Ouvrir la modal
  };

  // Rendu du composant
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {breads.map((bread) => (  // Parcourir chaque pain et afficher ses informations
        <div className="card" key={bread.id}>
          <div className="card-image">
            <img className="imageCard" src={bread.picture || pain} alt="pain" />
          </div>
          <h2 className="card-title">{bread.name}</h2>
          <div className="card-infos">
            <div className="card-priceQuantite">
              <p>{bread.price}€</p>
              <p>En Stock</p>
            </div>
            <Link
              className="OpenModal"
              onClick={() => {
                handleOpenModal(bread);  // Ouvre la modal avec les détails du pain lorsque l'on clique sur le bouton d'ajout au panier
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

// Valider les types de propriétés passées au composant BakeryBreadList
BakeryBreadList.propTypes = {
  breads: PropTypes.arrayOf(PropTypes.shape({  // Les pains doivent être un tableau d'objets avec certains attributs
    id: PropTypes.number.isRequired,  // L'ID est requis et doit être un nombre
    picture: PropTypes.string.isRequired,  // L'image est requise et doit être une chaîne de caractères
    description: PropTypes.string.isRequired,  // La description est requise et doit être une chaîne de caractères
    price: PropTypes.number.isRequired,  // Le prix est requis et doit être un nombre
  })).isRequired,
};

// Exporter le composant BakeryBreadList pour permettre son utilisation dans d'autres fichiers
export default BakeryBreadList;
