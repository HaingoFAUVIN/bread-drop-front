import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import sandwichImg from './sandwich.jpg';
import './styles.scss';

function BakerySandwichList({ sandwiches }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} />}
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

BakerySandwichList.propTypes = {
  sandwiches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
};

export default BakerySandwichList;
