// Importer les modules et styles nécessaires
import BakeriesList from './BakeriesList/BakeriesList';
import Newsletter from './Newsletter/Newsletter';
import Faq from './FAQ/Faq';
import './styles.scss';

function Main() {
  // Rendu du composant
  return (
    <>
      <BakeriesList />
      <Newsletter />
      <Faq />
    </>
  );
}

// Exporter le composant pour pouvoir l'utiliser dans d'autres modules
export default Main;
