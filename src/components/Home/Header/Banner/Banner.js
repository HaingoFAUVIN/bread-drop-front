// Importer les styles nécessaires
import './styles.scss';

function Banner() {
  // Rendu du composant
  return (
    <div className="banner">
      <div className="banner-card">
        <h1>Bread Drop <br /> Des produits de qualité sans bouger de chez vous ! </h1>
      </div>
    </div>
  );
}

// Exporter le composant Banner pour pouvoir l'utiliser dans d'autres modules
export default Banner;
