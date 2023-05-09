import './styles.scss';
import pain from './pain.jpg';

function BakeryProductsList() {
  return (
    <div className="card">
      <a href="#">
        {/* Image du produit */}
        <div className="card-image">
          <img src={pain} alt="pain" />
        </div>
      </a>
      {/* Fin de l'image à la une */}

      {/* Corp de notre carte */}
      <div className="card-body">

        {/* Titre du produit */}
        <div className="card-title">
          <time>TITRE</time>
        </div>

        {/* Infos produits */}
        <div className="card-infos">
          <br /> PRICE
          <br /> QUANTITY
        </div>
      </div>
      {/* Fin du corp de notre carte */}
    </div>
  );
}

export default BakeryProductsList;
