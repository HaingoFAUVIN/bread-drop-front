import { useState } from 'react';

import './styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../User/Login/Login';
import CheckIn from '../User/CheckIn/CheckIn';
import CheckInPro from '../User/CheckInPro/CheckInPro';
import Bakery from '../Bakery/Bakery';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);
  const [isVisible4, setIsVisible4] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/inscription" element={<Login />} />
        <Route path="/connexion" element={<CheckIn />} />
        <Route path="/connexion-pro" element={<CheckInPro />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/boulangerie-produit"
          // eslint-disable-next-line max-len
          element={<Bakery isVisible={isVisible} setIsVisible={setIsVisible} isVisible2={isVisible2} setIsVisible2={setIsVisible2} isVisible3={isVisible3} setIsVisible3={setIsVisible3} isVisible4={isVisible4} setIsVisible4={setIsVisible4} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
