import './styles.scss';

function BakeryBanner() {
  return (
    <div className="banner">
      <div className="banner-card">
        {/* METTRE EN DYNAMIQUE LES INFORMATIONS DE LA BOULANGERIE (TITRE,HORAIRE,DESCRIPTION) */}
        <h1>TITRE
          <p>HORAIRES</p>
          <p>DESCRIPTION</p>
        </h1>
      </div>
    </div>
  );
}

export default BakeryBanner;
