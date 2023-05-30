/* eslint-disable react/prop-types */
// Importer les modules nécessaires
import { Link } from 'react-router-dom';
import axios from 'axios';  // Axios pour effectuer des requêtes HTTP
import { useEffect, useState } from 'react';  // useEffect et useState pour gérer les effets de bord et l'état local
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';  // Icône pour fermer la modale
import PropTypes from 'prop-types';  // Pour la validation des types de propriétés
import './styles.scss';  // Styles spécifiques à ce composant
import viennoiserie from './viennoiserie.jpg';  // Image par défaut pour les produits sans image
import QuantityForm from '../QuantityForm/QuantityForm';  // Formulaire pour sélectionner la quantité de produit

// Composant Modal qui affiche les détails d'un produit
function Modal({ closeModal, product }) {
  const [productDetails, setProductDetails] = useState(null);  // État local pour les détails du produit

  // Créer une instance d'axios avec la configuration de base
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',  // Base de l'URL pour toutes les requêtes
    headers: {
      Authorization: 'Bearer',  // En-tête d'autorisation pour toutes les requêtes
    },
  });

  // Utiliser useEffect pour exécuter du code lors de la mise à jour de certaines dépendances
  useEffect(() => {
    const fetchProductDetails = async () => {  // Fonction pour récupérer les détails du produit
      try {
        const response = await api.get(`api/produit/${product.id}`);  // Effectuer une requête GET pour récupérer les détails du produit
        setProductDetails(response.data);  // Mettre à jour l'état avec les données de réponse
      }
      catch (error) {  // Attraper et afficher l'erreur si la requête échoue
        console.log(error);
      }
    };

    if (product) {  // Si un produit a été passé en tant que propriété, récupérer ses détails
      fetchProductDetails();
    }
  }, [product]);  // Exécuter le code de l'effet chaque fois que le produit change

  // Rendu du composant
  return (
    <div className="modal-contain">
      <div className="modal-card">
        <div className="modal-image">
          <Link
            className="closeModal"
            onClick={() => closeModal(false)}  // Fermer la modale lorsque l'utilisateur clique sur l'icône de fermeture
          >
            <HighlightOffOutlinedIcon />
          </Link>
        </div>
        <h2 className="modal-title">{product.name}</h2>
        <div className="modal-description">
          <p className="descriptionModal">{product.description}</p>
        </div>
        <div className="modal-other">
          <h2 className="modal-likes">Vous aimerez peut-être ceci</h2>
          <div className="modal-pictures">
            {/* METTRE EN DYNAMIQUE LES SRC */}
            {/* Afficher quatre images de produits similaires */}
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
          </div>
        </div>
        <div className="modal-choice">
          <QuantityForm product={product} />
        </div>
      </div>
    </div>
  );
}

// Spécifier les types de propriétés pour ce composant
Modal.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,  // L'ID du produit est requis et doit être un nombre
    name: PropTypes.string.isRequired,  // Le nom du produit est requis et doit être une chaîne
    description: PropTypes.string.isRequired,  // La description du produit est requise et doit être une chaîne
  })).isRequired,
};

// Exporter le composant Modal pour permettre son utilisation dans d'autres fichiers
export default Modal;
