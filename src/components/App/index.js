import { useState } from 'react';
import './styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext'; // Assurez-vous que le chemin est correct

import Home from '../Home/Home';
import Login from '../User/Login/Login';
import CheckIn from '../User/CheckIn/CheckIn';
import CheckInPro from '../User/CheckInPro/CheckInPro';
import Bakery from '../Bakery/Bakery';

import Orders from '../Profile/Orders';
import Basket from '../Basket/Basket';
import EditProfile from '../Profile/EditProfile';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/inscription" element={<CheckIn />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription-pro" element={<CheckInPro />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/boulangeries/:id"
            // eslint-disable-next-line max-len
            element={<Bakery isVisible={isVisible} setIsVisible={setIsVisible} isVisible2={isVisible2} setIsVisible2={setIsVisible2} isVisible3={isVisible3} setIsVisible3={setIsVisible3} isVisible4={isVisible4} setIsVisible4={setIsVisible4} />}
          />
          <Route path="/profil" element={<Orders />} />
          <Route path="edit-profil" element={<EditProfile />} />
          <Route path="/panier" element={<Basket />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;