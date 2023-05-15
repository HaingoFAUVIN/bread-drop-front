import './styles.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BakeriesList() {
  const api = axios.create({
    baseURL: 'http://davyvistel-server.eddi.cloud/',
    headers: {
      Authorization: 'Bearer',
    },
  });

  const [bakeriesList, setBakeriesList] = useState([]);
  const [schedules, setSchedules] = useState([]);

  const bakeries = async () => {
    try {
      const response = await api.get('api/boulangeries');
      console.log(response.data);
      setBakeriesList(response.data);
    } catch (error) {
      console.log('erreur');
    }
  };

  const bakeriesTime = async () => {
    try {
      const response = await api.get('api/horraires/');
      console.log(response.data);
      setSchedules(response.data);
    } catch (error) {
      console.log('erreur');
    }
  };

  useEffect(() => {
    bakeries();
    bakeriesTime();
  }, []);

  const getDayName = (dayIndex) => {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return days[dayIndex];
  };

  const currentDay = getDayName(new Date().getDay());

  return (
    <div className="bakerie">
      <div className="search-container">
        <input className="bakerie-search" type="text" placeholder="Recherche" />
      </div>
      <h1 className="bakerie-section-title"></h1>
      <div className="bakerie-element">
        {bakeriesList.map((bakery) => (
          <div key={bakery.id} className="bakerie-box">
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
                    Jour {schedule.day}: {schedule.openMorning} - {schedule.closeMorning}, {schedule.openAfternoon} - {schedule.closeAfternoon}
                  </p>
                ))}
            </div>
          </div>
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
