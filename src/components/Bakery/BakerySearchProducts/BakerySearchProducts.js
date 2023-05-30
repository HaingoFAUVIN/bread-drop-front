<<<<<<< HEAD
// Importer les styles spécifiques à ce composant
import './styles.scss';

// Composant BakerySearchProducts qui permet aux utilisateurs de rechercher des produits dans une boulangerie
function BakerySearchProducts() {
  // Rendu du composant
  return (
    <div className="search-container">  
      <input className="product-search" type="text" placeholder="Pain au chocolat" />
=======
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
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
    </div>
  );
}

// Exporter le composant BakerySearchProducts pour permettre son utilisation dans d'autres fichiers
export default BakerySearchProducts;
