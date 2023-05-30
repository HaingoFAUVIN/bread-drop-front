import { useState } from 'react';
import './styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartContext';
import Home from '../Home/Home';
import { UserProvider } from '../../contexts/UserContext';
import Login from '../User/Login/Login';
import CheckIn from '../User/CheckIn/CheckIn';
import Bakery from '../Bakery/Bakery';
import NotFound from '../NotFound/NotFound';
import Orders from '../Profile/Orders';
import Basket from '../Basket/Basket';
import EditProfile from '../Profile/EditProfile';
// import Basket from '../Basket/BasketBis';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/inscription" element={<CheckIn />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/boulangeries/:id"
              element={(
                <Bakery
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                  isVisible2={isVisible2}
                  setIsVisible2={setIsVisible2}
                  isVisible3={isVisible3}
                  setIsVisible3={setIsVisible3}
                  isVisible4={isVisible4}
                  setIsVisible4={setIsVisible4}
                />
              )}
            />
            <Route path="/profil" element={<Orders />} />
            <Route path="/edit-profil" element={<EditProfile />} />
            <Route path="/panier" element={<Basket />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
