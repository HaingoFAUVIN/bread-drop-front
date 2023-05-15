import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../User/Login/Login';
import CheckIn from '../User/CheckIn/CheckIn';
import CheckInPro from '../User/CheckInPro/CheckInPro';
import Bakery from '../Bakery/Bakery';
import Orders from '../Profile/Orders';
import Basket from '../Basket/Basket';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inscription" element={<CheckIn />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription-pro" element={<CheckInPro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/boulangerie-produit" element={<Bakery />} />
        <Route path="/profil" element={<Orders />} />
        <Route path="/panier" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
