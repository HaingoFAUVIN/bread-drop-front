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

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

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
          element={<Bakery isVisible={isVisible} setIsVisible={setIsVisible} toggleIsVisible={toggleIsVisible} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
