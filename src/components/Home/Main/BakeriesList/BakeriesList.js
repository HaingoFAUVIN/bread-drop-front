/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import './styles.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BakeriesList() {
  const api = axios.create({
    baseURL: 'https://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const opencageApi = 'https://api.opencagedata.com/geocode/v1/json';
  const opencageKey = 'ce00865e2ae0474cb2ed1101cd1e7c9e';

  const [bakeriesList, setBakeriesList] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [search, setSearch] = useState('');

  const bakeries = async () => {
    try {
      const response = await api.get('api/boulangeries');
      const bakeriesWithCoords = await Promise.all(
        response.data.map(async (bakery) => {
          const geoResponse = await axios.get(
            `${opencageApi}?q=${encodeURIComponent(bakery.adress)}&key=${opencageKey}`,
          );
          const coordinates = geoResponse.data.results[0].geometry;
          return {
            ...bakery,
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          };
        }),
      );
      setBakeriesList(bakeriesWithCoords);
    }
    catch (error) {
      console.log('erreur');
    }
  };

  const bakeriesTime = async () => {
    try {
      const response = await api.get('api/horraires/');
      setSchedules(response.data);
    }
    catch (error) {
      console.log('erreur');
    }
  };

  useEffect(() => {
    bakeries();
    bakeriesTime();
  }, []);

  const handleSearch = () => {
    if (search !== '') {
      axios
        .get(`${opencageApi}?q=${search}&key=${opencageKey}`)
        .then((response) => {
          const coordinates = response.data.results[0].geometry;
          setBakeriesList(
            bakeriesList.filter(
              (bakery) =>
                Math.sqrt(
                  Math.pow(bakery.latitude - coordinates.lat, 2) +
                  Math.pow(bakery.longitude - coordinates.lng, 2),
                ) <= 0.20,
            ),
          );
        })
        .catch((error) => console.log(error));
    } else {
      bakeries();
    }
  };

  const getDayName = (dayIndex) => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return days[dayIndex];
  };

  const currentDay = getDayName(new Date().getDay());

  return (
    <div className="bakerie">
      <div className="search-container">
        <input className="bakerie-search" type="text" placeholder="Entrer votre adresse" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}> Rechercher</button>
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

export default BakeriesList;
