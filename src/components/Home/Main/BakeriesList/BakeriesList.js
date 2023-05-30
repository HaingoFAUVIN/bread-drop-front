// Désactivation de certaines règles eslint
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */

// Importer les modules nécessaires
import './styles.scss';  // Importe les styles pour la liste de boulangeries
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';  // Importe l'icône de flèche vers le bas de la librairie Material UI
import { useEffect, useState } from 'react';  // Importe les hooks useEffect et useState de React pour gérer les effets de bord et l'état du composant
import { Link } from 'react-router-dom';  // Importe le composant Link de react-router-dom pour gérer les liens de navigation
import axios from 'axios';  // Importe le module axios pour faire des requêtes HTTP

// Composant pour la liste des boulangeries
function BakeriesList() {
  // Crée une instance d'axios avec la base URL et les headers pour les requêtes
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',  // URL de base pour les requêtes API
    headers: {
      Authorization: 'Bearer',  // Header d'autorisation pour les requêtes API
    },
  });

  // Constantes pour l'API Opencage pour la géolocalisation
  const opencageApi = 'https://api.opencagedata.com/geocode/v1/json';
  const opencageKey = 'ce00865e2ae0474cb2ed1101cd1e7c9e';

  // États pour la liste des boulangeries, les horaires et la recherche
  const [bakeriesList, setBakeriesList] = useState([]);  // État pour la liste des boulangeries
  const [schedules, setSchedules] = useState([]);  // État pour les horaires des boulangeries
  const [search, setSearch] = useState('');  // État pour la recherche d'adresse

  // Fonction asynchrone pour récupérer la liste des boulangeries avec leurs coordonnées géographiques
  const bakeries = async () => {
    try {
<<<<<<< HEAD
      const response = await api.get('api/boulangeries');  // Fait une requête GET pour récupérer la liste des boulangeries
=======
      const response = await api.get('api/boulangeries');
      console.log(response.data);
>>>>>>> fa720bf8bb4284c62d87b4f48644389bbe1c51a4
      const bakeriesWithCoords = await Promise.all(
        response.data.map(async (bakery) => {
          const geoResponse = await axios.get(
            `${opencageApi}?q=${encodeURIComponent(bakery.adress)}&key=${opencageKey}`,
          );
          const coordinates = geoResponse.data.results[0].geometry;  // Récupère les coordonnées géographiques de la boulangerie
          return {
            ...bakery,  // Retourne la boulangerie avec ses coordonnées géographiques
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          };
        }),
      );
      setBakeriesList(bakeriesWithCoords);  // Met à jour l'état de la liste des boulangeries
    } catch (error) {
      console.log('erreur');  // Affiche une erreur dans la console en cas d'échec de la requête
    }
  };

  // Fonction asynchrone pour récupérer les horaires des boulangeries
  const bakeriesTime = async () => {
    try {
      const response = await api.get('api/horraires/');  // Fait une requête GET pour récupérer les horaires des boulangeries
      setSchedules(response.data);  // Met à jour l'état des horaires des boulangeries
    } catch (error) {
      console.log('erreur');  // Affiche une erreur dans la console en cas d'échec de la requête
    }
  };

  // Utilise l'effet useEffect pour exécuter les fonctions de récupération des boulangeries et de leurs horaires au chargement du composant
  useEffect(() => {
    bakeries();  // Appelle la fonction de récupération des boulangeries
    bakeriesTime();  // Appelle la fonction de récupération des horaires des boulangeries
  }, []);  // Dépendances vides pour ne l'exécuter qu'une seule fois au chargement du composant

  // Fonction pour gérer la recherche d'adresse
  const handleSearch = () => {
    if (search !== '') {
      axios
        .get(`${opencageApi}?q=${search}&key=${opencageKey}`)  // Fait une requête GET à l'API Opencage pour obtenir les coordonnées géographiques de l'adresse recherchée
        .then((response) => {
          const coordinates = response.data.results[0].geometry;  // Récupère les coordonnées géographiques de la recherche
          setBakeriesList(
            bakeriesList.filter(
              (bakery) =>
                Math.sqrt(
                  Math.pow(bakery.latitude - coordinates.lat, 2) +
                  Math.pow(bakery.longitude - coordinates.lng, 2),
                ) <= 0.20,  // Filtre la liste des boulangeries pour ne garder que celles à moins de 0.20 unités de distance de l'adresse recherchée
            ),
          );
        })
        .catch((error) => console.log(error));  // Affiche une erreur dans la console en cas d'échec de la requête
    } else {
      bakeries();  // Appelle la fonction de récupération des boulangeries si la recherche est vide
    }
  };

  // Fonction pour obtenir le nom du jour à partir de son index
  const getDayName = (dayIndex) => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];  // Tableau des noms des jours en français
    return days[dayIndex];  // Retourne le nom du jour correspondant à l'index
  };

  // Obtient le nom du jour actuel
  const currentDay = getDayName(new Date().getDay());

  // Rendu du composant
  return (
    <div className="bakerie">
      <div className="search-container">
        <input className="bakerie-search" type="text" placeholder="Entrer votre adresse" onChange={(e) => setSearch(e.target.value)} />
        <button className="bakerie-searchBis" onClick={handleSearch}> Rechercher</button>
      </div>
      <h1 className="bakerie-section-title"> </h1>
      <div className="bakerie-element">
        {bakeriesList.map((bakery) => (
          <Link className="bakerie-box" key={bakery.id} to={`/boulangeries/${bakery.id}`}>
            <div> {/* Suppression de la classe */}
              <div className="bakerie-img-container">
                <img className="bakerie-img" src={bakery.picture} alt="Boulangerie" />
              </div>
              <div className="bakerie-content">
                <h1 className="bakerie-title">{bakery.name}</h1>
                <p className="bakerie-description">{bakery.adress}</p>
                {schedules
                  .filter((schedule) => schedule.bakery.id === bakery.id && schedule.day === currentDay)
                  .map((schedule, index) => (
                    <p key={index}>
                      {schedule.day}: {schedule.openMorning} - {schedule.closeMorning}, {schedule.openAfternoon} - {schedule.closeAfternoon}
                    </p>
                  ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bakerie-all-btn">
        <button className="bakerie-btn">
          <ArrowDownwardIcon />
        </button>
      </div>
    </div>
  );
}

// Exporter le composant BakeriesList pour permettre son utilisation dans d'autres fichiers
export default BakeriesList;
