// Importer les modules et les styles nécessaires
import './styles.scss';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';

function Header() {
  // Rendu du composant
  return (
    <>
      <Nav />
      <Banner />
    </>
  );
}

// Exporter le composant pour pouvoir l'utiliser dans d'autres modules
export default Header;
