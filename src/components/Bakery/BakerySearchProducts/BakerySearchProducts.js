// Importer les styles spécifiques à ce composant
import './styles.scss';

// Composant BakerySearchProducts qui permet aux utilisateurs de rechercher des produits dans une boulangerie
function BakerySearchProducts() {
  // Rendu du composant
  return (
    <div className="search-container">  
      <input className="product-search" type="text" placeholder="Pain au chocolat" />
    </div>
  );
}

// Exporter le composant BakerySearchProducts pour permettre son utilisation dans d'autres fichiers
export default BakerySearchProducts;
