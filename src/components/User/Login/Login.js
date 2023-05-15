import './Login.scss';
import loginImage from '../../../assets/Login.jpg';

function Login() {
  return (
    <div className="login-page">
      <div className="login-form-section">
        <h1 className="title">Se Connecter</h1>
        <form>
          <div className="input-group">
            <p>Adresse e-mail</p>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <p>Mot de Passe</p>
            <input type="password" placeholder="Mot de passe" />
          </div>

          <div className="button-group">
            <button className="form-button" type="submit">Connexion</button>
            <p className="form-text">Se connecter avec</p>
            <button className="form-button pro-button" type="submit">BreadDrop Pro</button>
            <div className="triangle-card">
              <p>Vous possédez une boulangerie ?
                Connectez-vous à BreadDrop Pro pour accéder à votre tableau de bord !
              </p>
            </div>
          </div>

          <hr />

          <div className="first-time-section">
            <p>Première Fois ?</p>
            <div className="button-group">
              <button className="form-button registration-button" type="submit">Inscription</button>
            </div>
          </div>
        </form>
      </div>

      <div className="login-image-section">
        <img src={loginImage} alt="Login" className="background-image" />
        <div className="login-card">
          <h1 className="login-card--title">BreadDrop</h1>
          <br />
          <p className="login-card--text">Connectez-vous en tant qu'utilisateur ou en tant que professionnel.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
