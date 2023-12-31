import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import pain from './pain.jpg';
import './styles.scss';

function BakeryBreadList({ breads }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (bread) => {
    setSelectedProduct(bread);
    setOpenModal(true);
  };

  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {breads.map((bread) => (
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
                handleOpenModal(bread);
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

BakeryBreadList.propTypes = {
  breads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default BakeryBreadList;
