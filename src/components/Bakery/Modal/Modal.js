/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import './styles.scss';
import viennoiserie from './viennoiserie.jpg';
import QuantityForm from '../QuantityForm/QuantityForm';

function Modal({ closeModal }) {
  return (
    <div className="modal-contain">
      <div className="modal-card">
        <div className="modal-image">
          <Link
            className="closeModal"
            onClick={() => closeModal(false)}
          >
            <HighlightOffOutlinedIcon />
          </Link>
        </div>
        <div className="bakeryBreadList">
          {/* <Modal /> */}
        </div>
        <h2 className="modal-title">PAIN</h2>
        <div className="modal-description">
          <p className="descriptionModal">DESCRIPTION DU PRODUIT</p>
        </div>
        <div className="modal-other">
          <h2 className="modal-likes">Vous aimerez peut-être ceci</h2>
          <div className="modal-pictures">
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
            <img src={viennoiserie} alt="viennoiserie" className="modal-otherPicture" />
          </div>
        </div>
        <div className="modal-choice">
          <QuantityForm />
        </div>
        {/* <div className="modal-add">
          ADD
        </div> */}
      </div>
    </div>
  );
}
// FAIRE PROPTYPE
// FORM
// RESPONSIVE POPUP
// ADD DU PANIER ??

export default Modal;
