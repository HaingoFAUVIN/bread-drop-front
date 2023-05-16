import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import pastryImg from './pastry.jpg';
import './styles.scss';

function BakeryPastryList({ pastries }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} />}
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
                setOpenModal(true);
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

BakeryPastryList.propTypes = {
  pastries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default BakeryPastryList;
