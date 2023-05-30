import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import Nav from '../Home/Header/Nav/Nav';
import UserPic from '../../assets/User.jpg';
import Banner from '../../assets/UserBanner.png';
import Footer from '../Home/Footer/Footer';
import './EditProfile.scss';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const userid = sessionStorage.getItem('userId');
  const token = sessionStorage.getItem('token');

  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showAdressForm, setShowAdressForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmail(sessionStorage.getItem('userEmail'));
    setAdress(sessionStorage.getItem('userAdress'));
    setFirstName(sessionStorage.getItem('userName'));
    setLastName(sessionStorage.getItem('lastName'));
  }, []);

  const handleUpdate = async (event, fieldToUpdate) => {
    event.preventDefault();

    const api = axios.create({
      baseURL: 'https://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: `Bearer`, 
      },
    });

    const updateData = {};
    switch (fieldToUpdate) {
      case 'email':
        updateData.email = email;
        break;
      case 'adress':
        updateData.adress = adress;
        break;
      default:
        break;
    }

    console.log('fieldToUpdate:', fieldToUpdate);
    console.log('updateData:', updateData);
    try {
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, JSON.stringify(updateData));

      if (response.data.email) {
        setUser(response.data);
        sessionStorage.setItem('userEmail', response.data.email);
        sessionStorage.setItem('userAdress', response.data.adress);
        navigate('/edit-profil');
      } else {
        alert('La mise à jour du profil a échoué');
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div className="edit-profile">
      <Nav />
      <div className="user-banner">
        <img className="banner-image" src={Banner} alt="Banner" />
        <div className="user-details">
          <img className="user-image" src={UserPic} alt="Jean Dupont" />
          <div className="name-address">
            <h1>{firstName} {lastName}</h1>
            <p>{adress}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="button-link"> Mes commandes </Link>
        <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
      </div>

      <div className="account">
        {showEmailForm ? (
          <form onSubmit={(event) => handleUpdate(event, 'email')}>
            <div className="account-info">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{email}</label>
            <button type="button" onClick={() => setShowEmailForm(true)}>Modifier</button>
          </div>
        )}
        {showAdressForm ? (
          <form onSubmit={(event) => handleUpdate(event, 'adress')}>
            <div className="account-info">
              <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{adress}</label>
            <button type="button" onClick={() => setShowAdressForm(true)}>Modifier</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
