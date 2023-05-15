/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useState } from 'react';
import './styles.scss';

function QuantityForm() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faire quelque chose avec la quantité choisie, comme l'envoyer à un serveur ou la stocker localement.
    // console.log(quantity);
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

export default QuantityForm;
