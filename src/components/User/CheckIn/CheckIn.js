import './CheckIn.scss';
import checkinImage from '../../../assets/CheckIn.jpg';

function CheckIn() {
  return (
    <div className="checkin-page">
      <div className="checkin-form-section">
        <h1 className="title">S'inscrire</h1>
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
            <p>Adresse</p>
            <input type="text" placeholder="Adresse" />
          </div>

          <div className="button-group">
            <button className="form-button checkin-button" type="submit">Inscription</button>
            <div className="triangle-card">
              <p>Trouvez de nouveaux clients en vous inscrivant sur BreadDrop Pro
                et découvrez votre nouvelle interface de commandes !
              </p>
            </div>
          </div>

          <hr />

          <div className="pro-section">
            <h2>BreadDrop Pro</h2>
            <div className="input-group">
              <p>Nom de ma Boulangerie</p>
              <input type="text" placeholder="Nom" />
            </div>
            <div className="button-group">
              <button className="form-button registration-button" type="submit">Suivant</button>
            </div>
          </div>
        </form>
      </div>

      <div className="checkin-image-section">
        <img src={checkinImage} alt="CheckIn" className="background-image" />
        <div className="checkin-card">
          <h1 className="checkin-card--title">BreadDrop</h1>
          <br />
          <p className="checkin-card--text">Connectez-vous en tant qu'utilisateur ou en tant que professionnel.</p>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
