import './styles.scss';

function BakeriesList() {
  return (
    <div className="bakerie-section">
      <div className="search-container">
        <input className="bakerie-search" type="text" placeholder="Search for bakeries" />
      </div>
      <h1 className="bakerie-section-title">Boulangeries</h1>
      <div className="bakerie-element">
        <div className="bakerie-box" />
      </div>
    </div>
  );
}

export default BakeriesList;
