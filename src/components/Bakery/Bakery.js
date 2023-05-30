// Importation des dépendances nécessaires
import axios from 'axios'; // Bibliothèque pour effectuer des requêtes HTTP
import PropTypes from 'prop-types'; // Bibliothèque pour le typage des props
import { useParams } from 'react-router-dom'; // Hook pour accéder aux paramètres de l'URL
import { useState, useEffect } from 'react'; // Hooks de React pour la gestion d'état et d'effets

// --- COMPOSANTS
// Importation des composants nécessaires
import Nav from '../Home/Header/Nav/Nav';
import Footer from '../Home/Footer/Footer';
import BakeryBanner from './BakeryBanner/BakeryBanner';
import BakerySearchProducts from './BakerySearchProducts/BakerySearchProducts';
import Bread from './Bread/Bread';
import Pastry from './Pastry/Pastry';
import Viennoiserie from './Viennoiserie/Viennoiserie';
import Sandwich from './Sandwich/Sandwich';
import NotFound from '../NotFound/NotFound';
import CircularIndeterminate from '../CircularIndeterminate';

function Bakery({
  isVisible,
  setIsVisible,
  isVisible2,
  setIsVisible2,
  isVisible3,
  setIsVisible3,
  isVisible4,
  setIsVisible4,
}) {
  // Utilisation du hook useParams pour récupérer l'ID de la boulangerie dans l'URL
  const { id } = useParams();
  
  // Initialisation des états locaux avec le hook useState
  const [bakery, setBakery] = useState(null);
  const [bakeryHours, setBakeryHours] = useState(null);
  const [pastries, setPastries] = useState([]);
  const [viennoiseries, setViennoiseries] = useState([]);
  const [breads, setBreads] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // État de chargement pour gérer l'affichage pendant que les données sont récupérées
  
  // Création d'une instance axios avec une URL de base
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer', // Header d'autorisation (à compléter avec un token si nécessaire)
    },
  });

  // Utilisation du hook useEffect pour effectuer les requêtes HTTP lors du chargement du composant
  useEffect(() => {
    const fetchBakery = async () => { // Récupération des données de la boulangerie
      setIsLoading(true);
      try {
        const response = await api.get(`api/boulangeries/${id}`); // Requête GET pour obtenir les informations de la boulangerie
        setBakery(response.data);
        const pastriesData = response.data.products.filter(
          (products) => products.category.name === 'Pâtisserie',
        );
        setPastries(pastriesData);
        // Etc... pour chaque catégorie de produits

        // La gestion d'erreur est importante pour éviter des problèmes lors de l'exécution du code
      } catch (erreur) {
        console.log(erreur);
      }
      setIsLoading(false); // Le chargement est terminé, on met à jour l'état
    };

    // Même chose pour les horaires de la boulangerie
    const fetchBakeryHours = async () => { // Récupération des horaires de la boulangerie
      try {
        const response = await api.get(`api/horraires/`);
        setBakeryHours(response.data);
      } catch (erreur) {
        console.log(erreur);
      }
    };

    // Lancer les requêtes
    fetchBakery();
    fetchBakeryHours();
  }, [id]); // Le tableau de dépendances indique quand le hook doit se ré-exécuter

  // Le rendu du composant affiche un spinner de chargement si les données sont en cours de chargement, un message d'erreur si les données n'ont pas pu être récupérées, ou les données de la boulangerie sinon
  return (
    isLoading ? <CircularIndeterminate />
      : bakery === null
        ? <NotFound />
        : (
          <>
            <Nav />
            <BakeryBanner bakery={bakery} bakeryHours={bakeryHours} />
            <BakerySearchProducts />
            <Bread isVisible={isVisible} setIsVisible={setIsVisible} breads={breads} />
            <Pastry isVisible2={isVisible2} setIsVisible2={setIsVisible2} pastries={pastries} />
            <Viennoiserie isVisible3={isVisible3} setIsVisible3={setIsVisible3} viennoiseries={viennoiseries} />
            <Sandwich isVisible4={isVisible4} setIsVisible4={setIsVisible4} sandwiches={sandwiches} />
            <Footer />
          </>
        )
  );
}

// Utilisation de PropTypes pour valider les props
Bakery.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible2: PropTypes.bool.isRequired,
  setIsVisible2: PropTypes.func.isRequired,
  isVisible3: PropTypes.bool.isRequired,
  setIsVisible3: PropTypes.func.isRequired,
  isVisible4: PropTypes.bool.isRequired,
  setIsVisible4: PropTypes.func.isRequired,
};

// Exporter le composant pour pouvoir l'utiliser ailleurs
export default Bakery;
