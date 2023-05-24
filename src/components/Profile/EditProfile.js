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
  const userFirstName = sessionStorage.getItem('userName');
  const userLastName = sessionStorage.getItem('lastName');
  const userid = sessionStorage.getItem('userId');
  const userAdress = sessionStorage.getItem('userAddress');

  const [email, setEmail] = useState(usermail);
  const [address, setAddress] = useState(userAdress);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

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
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, { email, address });

      if (response.data.email) {
        setUser(response.data);
        sessionStorage.setItem('userEmail', response.data.email);
        sessionStorage.setItem('userAddress', response.data.adress); // Notez que c'est "adress", pas "address"
        navigate('/edit-profil');
      } else {
        alert('La mise à jour du profil a échoué');
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
      const response = await api.put(`/api/utilisateurs/${userid}/modifier`, { oldPassword, newPassword });

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
            <h1>{userFirstName} {userLastName}</h1>
            <p>{userAdress}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/profil" className="button-link"> Commandes </Link>
        <Link to="/edit-profil" className="button-link"> Modifier mon profil</Link>
      </div>
      <div className="account">
        {showEmailForm ? (
          <form onSubmit={handleUpdate}>
            <div className="account-info">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{usermail}</label>
            <button type="button" onClick={() => setShowEmailForm(true)}>Modifier</button>
          </div>
        )}
        {showAddressForm ? (
          <form onSubmit={handleUpdate}>
            <div className="account-info">
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
              <button type="submit">Modifier</button>
            </div>
          </form>
        ) : (
          <div className="account-info">
            <label>{userAdress}</label>
            <button type="button" onClick={() => setShowAddressForm(true)}>Modifier</button>
          </div>
        )}
        {showPasswordForm ? (
          <form onSubmit={handleChangePassword} style={{ flexDirection: 'column' }}>
            <div className="account-info">
              <label>Ancien mot de passe</label>
              <input style={{ padding: '10px', margin: '10px 0' }} type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
            </div>
            <div className="account-info">
              <label>Nouveau mot de passe</label>
              <input style={{ padding: '10px', margin: '10px 0' }} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <button className="submit-button" type="submit">Modifier le mot de passe</button>
          </form>
        ) : (
          <div className="account-info">
            <label>Mot de Passe</label>
            <button className="submit-button" type="button" onClick={() => setShowPasswordForm(true)}>Modifier</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditProfile;
