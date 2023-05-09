import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import  Home from '../Home/Home';
import  Login from '../User/Login/Login';
import  CheckIn from '../User/CheckIn/CheckIn';
import  CheckInPro from '../User/CheckInPro/CheckInPro';
import  Bakery from '../Bakery/Bakery';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/inscription" element={<Login />} />
        <Route path="/connexion" element={<CheckIn />} />
        <Route path="/connexion-pro" element={<CheckInPro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/boulangerie-produit" element={<Bakery />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
