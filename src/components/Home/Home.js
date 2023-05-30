// Importer les modules et styles nécessaires
import './styles.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function Home() {
  // Rendu du composant
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

// Exporter le composant pour pouvoir l'utiliser dans d'autres modules
export default Home;
