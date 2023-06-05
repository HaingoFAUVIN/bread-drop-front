import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PropTypes from 'prop-types';
import './styles.scss';
import viennoiserie from './viennoiserie.jpg';
import QuantityForm from '../QuantityForm/QuantityForm';

function Modal({ closeModal, product }) {
  const [productDetails, setProductDetails] = useState(null);
  const { errorMessage, clearErrorMessage } = useContext(CartContext);

  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`api/produit/${product.id}`);
        setProductDetails(response.data);
      }
      catch (error) {
        console.log(error);
      }
    };

    if (product) {
      fetchProductDetails();
    }
  }, [product]);

  const handleCloseModal = () => {
    closeModal(false);
    clearErrorMessage();
  };

  return (
    <div className="modal-contain">
      <div className="modal-card">
        <div className="modal-image">
          <Link
            className="closeModal"
            onClick={handleCloseModal}
          >
            <HighlightOffOutlinedIcon />
          </Link>
        </div>
        <h2 className="modal-title">{product.name}</h2>
        <div className="modal-description">
          <p className="descriptionModal">{product.description}</p>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="modal-other">
          <h2 className="modal-likes">Vous aimerez peut-être ceci</h2>
          <div className="modal-pictures">
            {/* METTRE EN DYNAMIQUE LES SRC */}
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

Modal.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Modal;
