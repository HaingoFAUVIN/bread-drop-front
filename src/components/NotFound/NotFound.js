// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './styles.scss';

function NotFound() {
  return (
    <body className="bodyNotFound">
      <div className="containerNotFound">
        <h2 className="containerNotFound-title">Oops ! Page non trouvée</h2>
        <h1 className="containerNotFound-404">404</h1>
        <p className="containerNotFound-texte">Nous ne trouvons pas la page que vous recherchez</p>
        <Link to="/home" className="containerNotFound-RedirectionHome">
          Page d'accueil
        </Link>
      </div>
    </body>
  );
}

NotFound.propTypes = {

};

export default NotFound;
