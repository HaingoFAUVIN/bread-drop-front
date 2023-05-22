import PropTypes from 'prop-types';
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useState, useContext } from 'react';

import { CartContext } from '../../../contexts/CartContext';
import './styles.scss';

function QuantityForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToCart(product, quantity);
  };
  return (
    <form onSubmit={handleSubmit} className="formQuantity">
      <label className="labelQuantity">
        Quantité :
        <input
          className="inputNumber"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <button type="submit" className="formAddQuantity">Ajouter au panier</button>
    </form>
  );
}

QuantityForm.propTypes = {
  product: PropTypes.array.isRequired,
};

export default QuantityForm;
