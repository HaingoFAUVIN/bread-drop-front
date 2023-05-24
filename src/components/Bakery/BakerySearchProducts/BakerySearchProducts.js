import { useState } from 'react';
import Modal from '../Modal/Modal';
import './styles.scss';

function BakerySearchProducts({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      {openModal && <Modal closeModal={setOpenModal} product={selectedProduct} />}
      <input
        className="product-search"
        type="text"
        placeholder="Pain au chocolat"
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => handleOpenModal(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BakerySearchProducts;
