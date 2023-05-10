import './styles.scss';
import pastry from './pastry.jpg';

function BakeryPastryList() {
  return (
    <main className="main">
      <div className="card">
        <a href="#">
          {/* Image du produit */}
          <div className="card-image">
            <img src={pastry} alt="pâtisserie" />
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
      </div>
      {/* Fin du corp de notre carte */}

      <div className="card">
        <a href="#">
          {/* Image du produit */}
          <div className="card-image">
            <img src={pastry} alt="pâtisserie" />
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
      </div>
      {/* Fin du corp de notre carte */}

      <div className="card">
        <a href="#">
          {/* Image du produit */}
          <div className="card-image">
            <img src={pastry} alt="pâtisserie" />
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
      </div>
      {/* Fin du corp de notre carte */}

      <div className="card">
        <a href="#">
          {/* Image du produit */}
          <div className="card-image">
            <img src={pastry} alt="pâtisserie" />
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
      </div>
      {/* Fin du corp de notre carte */}
    </main>
  );
}

export default BakeryPastryList;
