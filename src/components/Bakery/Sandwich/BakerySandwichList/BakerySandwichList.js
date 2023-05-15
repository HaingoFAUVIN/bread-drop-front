import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import sandwich from './sandwich.jpg';
import './styles.scss';

function BakerySandwichList() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={sandwich} alt="pain" />
        </div>
        <h2 className="card-title">SANDWICH</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
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

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={sandwich} alt="pain" />
        </div>
        <h2 className="card-title">SANDWICH</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
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

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={sandwich} alt="pain" />
        </div>
        <h2 className="card-title">SANDWICH</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
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

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={sandwich} alt="pain" />
        </div>
        <h2 className="card-title">SANDWICH</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
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
    </section>
  );
}

export default BakerySandwichList;
