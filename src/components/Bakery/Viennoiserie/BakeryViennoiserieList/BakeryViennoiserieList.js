import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import viennoiserieImg from './viennoiserie.jpg';
import './styles.scss';

function BakeryViennoiserieList({ viennoiseries }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (viennoiserie) => {
    setSelectedProduct(viennoiserie);
    setOpenModal(true);
  };

  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      {viennoiseries.map((viennoiserie) => (
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
                handleOpenModal(viennoiserie);
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

BakeryViennoiserieList.propTypes = {
  viennoiseries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default BakeryViennoiserieList;
