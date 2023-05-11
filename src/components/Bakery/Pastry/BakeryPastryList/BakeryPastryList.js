import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import pastry from './pastry.jpg';
import './styles.scss';

function BakeryPastryList() {
  return (
    <section className="container">
      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={pastry} alt="pain" />
        </div>
        <h2 className="card-title">PAIN</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
            <p>En Stock</p>
          </div>
          <boutton className="OpenModal"><AddCircleOutlineIcon /></boutton>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={pastry} alt="pain" />
        </div>
        <h2 className="card-title">PAIN</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
            <p>En Stock</p>
          </div>
          <boutton className="OpenModal"><AddCircleOutlineIcon /></boutton>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={pastry} alt="pain" />
        </div>
        <h2 className="card-title">PAIN</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
            <p>En Stock</p>
          </div>
          <boutton className="OpenModal"><AddCircleOutlineIcon /></boutton>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img className="imageCard" src={pastry} alt="pain" />
        </div>
        <h2 className="card-title">PAIN</h2>
        <div className="card-infos">
          <div className="card-priceQuantite">
            <p>1€</p>
            <p>En Stock</p>
          </div>
          <boutton className="OpenModal"><AddCircleOutlineIcon /></boutton>
        </div>
      </div>
    </section>
  );
}

export default BakeryPastryList;
