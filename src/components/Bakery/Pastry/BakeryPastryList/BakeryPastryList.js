import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '../../Modal/Modal';
import pastry from './pastry.jpg';
import './styles.scss';

function BakeryPastryList() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="container">
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={pastry} alt="PÂTISSERIE" />
        </div>
        <h2 className="card-title">PÂTISSERIE</h2>
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
          <img className="imageCard" src={pastry} alt="PÂTISSERIE" />
        </div>
        <h2 className="card-title">PÂTISSERIE</h2>
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
          <img className="imageCard" src={pastry} alt="PÂTISSERIE" />
        </div>
        <h2 className="card-title">PÂTISSERIE</h2>
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
          <img className="imageCard" src={pastry} alt="PÂTISSERIE" />
        </div>
        <h2 className="card-title">PÂTISSERIE</h2>
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

export default BakeryPastryList;
