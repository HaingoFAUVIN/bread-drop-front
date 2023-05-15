import './CheckInPro.scss';
import checkinproImage from '../../../assets/CheckInPro.jpg';

function CheckInPro() {
  return (
    <div className="login-page">
      <div className="login-banner">
        <img src={checkinproImage} alt="CheckInPro" className="background-image" />
      </div>
      <div className="checkin-card">
        <h1 className="checkin-card--title">BreadDrop Pro</h1>
        <br />
        <p className="checkin-card--text">Plus de commandes, plus de clients, une interface fluide... Qu'est ce qu'il faut de plus ?</p>
      </div>
      <div className="form-pro">
        <form>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <p>Mot de Passe</p>
            <input type="password" placeholder="Mot de passe" />
          </div>
          <div className="input-group">
            <p>Adresse de la Boulangerie</p>
            <input type="text" placeholder="Adresse de la boulangerie" />
          </div>
          <div className="input-group">
            <p>Numéro de Téléphone</p>
            <input type="tel" placeholder="Numéro de téléphone" />
          </div>
        </form>
        <div className="button-group">
          <button className="form-button" type="submit">Découvrir mon Tableau de Bord</button>
        </div>
      </div>
    </div>
  );
}

export default CheckInPro;
