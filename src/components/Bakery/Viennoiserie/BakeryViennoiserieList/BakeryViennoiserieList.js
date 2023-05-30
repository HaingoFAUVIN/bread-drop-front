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

// Importer l'image par défaut pour les viennoiseries
import viennoiserieImg from './viennoiserie.jpg';

// Importer les styles spécifiques à ce composant
import './styles.scss';

// Composant BakeryViennosierieList qui affiche une liste de viennoiseries disponibles
function BakeryViennoiserieList({ viennoiseries }) {
  // État local pour contrôler l'ouverture de la modal et le produit sélectionné
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour gérer l'ouverture de la modal
  const handleOpenModal = (viennoiserie) => {
    setSelectedProduct(viennoiserie);  // Mettre à jour le produit sélectionné
    setOpenModal(true);  // Ouvrir la modal
  };

  // Rendu du composant
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {viennoiseries.map((viennoiserie) => ( // Parcourir chaque viennoiserie et afficher ses informations
        <div className="card" key={viennoiserie.id}>
          <div className="card-image">
            <img className="imageCard" src={viennoiserie.picture || viennoiserieImg} alt="VIENNOISERIE" />
          </div>
          <h2 className="card-title">{viennoiserie.name}</h2>
          <div className="card-infos">
            <div className="card-priceQuantite">
              <p>{viennoiserie.price}€</p>
              <p>En Stock</p>
            </div>
            <Link
              className="OpenModal"
              onClick={() => {
                handleOpenModal(viennoiserie);  // Ouvre la modal avec les détails de la viennoiserie lorsque l'on clique sur le bouton d'ajout au panier
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

// Valider les types de propriétés passées au composant BakeryViennoiserieList
BakeryViennoiserieList.propTypes = {
  viennoiseries: PropTypes.arrayOf(PropTypes.shape({ // Les viennoiseries doivent être un tableau d'objets avec certains attributs
    id: PropTypes.number.isRequired, // L'ID est requis et doit être un nombre
    picture: PropTypes.string.isRequired, // L'image est requise et doit être une chaîne de caractères
    description: PropTypes.string.isRequired, // La description est requise et doit être une chaîne de caractères
    price: PropTypes.number.isRequired, // Le prix est requis et doit être un nombre
  })).isRequired,
};

// Exporter le composant BakeryViennoiserieList pour permettre son utilisation dans d'autres fichiers
export default BakeryViennoiserieList;
