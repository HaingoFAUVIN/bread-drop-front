import './styles.scss';

function BakeryTitleCategories() {
  return (
    <section className="category">
      <h1 className="category-title"> PAINS </h1>
      <button
        className="category-button"
        type="button"
      >
        {/* STYLISER LE BUTTON  */}
        Afficher la liste
      </button>
    </section>
  );
}

export default BakeryTitleCategories;
