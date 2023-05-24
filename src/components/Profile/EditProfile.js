import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import Nav from '../Home/Header/Nav/Nav';
import UserPic from '../../assets/User.jpg';
import Banner from '../../assets/UserBanner.png';
import './EditProfile.scss';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const usermail = sessionStorage.getItem('userEmail');
  const userid = sessionStorage.getItem('userId');
  const userAdress = sessionStorage.getItem('userAddress');

  const [email, setEmail] = useState(usermail);
  const [address, setAddress] = useState(userAdress);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();

    const api = axios.create({
      baseURL: 'http://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: 'Bearer',
      },
    });

    try {
      const response = await api.put(`/api/profil/modifier/${userid}`, { email, address });

      if (response.data.success) {
        setUser(response.data.user);
        sessionStorage.setItem('userEmail', response.data.user.email);
        sessionStorage.setItem('userAddress', response.data.user.address);
        navigate('/profil');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    const api = axios.create({
      baseURL: 'http://davyvistel-server.eddi.cloud/',
      headers: {
        Authorization: 'Bearer',
      },
    });

    try {
      const response = await api.put(`/api/profil/modifier`, { oldPassword, newPassword });

      if (response.data.success) {
        alert('Mot de passe modifié avec succès');
        setOldPassword('');
        setNewPassword('');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Failed to change password:', error);
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
            <h1>{usermail}</h1>
            <p>{userAdress}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="button-link"> Commandes </Link>
        <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
      </div>
      <div className="account">
        <form onSubmit={handleUpdate}>
          <div className="account-info">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Modifier</button>
          </div>
          <div className="account-info">
            <label>Adresse</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Modifier</button>
          </div>
        </form>
        <form onSubmit={handleChangePassword}>
          <div className="account-info">
            <label>Ancien mot de passe</label>
            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
          </div>
          <div className="account-info">
            <label>Nouveau mot de passe</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <button type="submit">Modifier</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
