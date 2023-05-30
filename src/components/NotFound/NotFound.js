// Importer les modules nécessaires de React
import { Link } from 'react-router-dom';
// Importer le fichier de style
import './styles.scss';

// Créer un composant NotFound qui s'affiche lorsque l'utilisateur tente d'accéder à une route qui n'existe pas
function NotFound() {
  // Le composant renvoie une page 404 avec un message d'erreur et un lien vers la page d'accueil
  return (
    <div className="bodyNotFound">
      <div className="containerNotFound">
        <h2 className="containerNotFound-title">Oops ! Page non trouvée</h2>
        <h1 className="containerNotFound-404">404</h1>
        <p className="containerNotFound-texte">Nous ne trouvons pas la page que vous recherchez</p>
        <Link to="/home" className="containerNotFound-RedirectionHome">
          Page d'accueil
        </Link>
      </div>
    </div>
  );
}

// Exporter le composant NotFound pour pouvoir l'utiliser dans d'autres parties de l'application
export default NotFound;
