// Importer les modules nécessaires
import React, { useState } from 'react';  // Importe le module de base React ainsi que la fonction useState pour gérer l'état des composants
import './styles.scss';  // Importe les styles généraux de l'application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importe les éléments de routage pour gérer la navigation dans l'application
import { CartProvider } from '../../contexts/CartContext';  // Importe le Provider de contexte du panier
import Home from '../Home/Home';  // Importe le composant de la page d'accueil
import { UserProvider } from '../../contexts/UserContext';  // Importe le Provider de contexte de l'utilisateur
import Login from '../User/Login/Login';  // Importe le composant de la page de connexion
import CheckIn from '../User/CheckIn/CheckIn';  // Importe le composant de la page d'inscription
import Bakery from '../Bakery/Bakery';  // Importe le composant de la page de la boulangerie
import NotFound from '../NotFound/NotFound';  // Importe le composant de la page 404 (not found)
import Orders from '../Profile/Orders';  // Importe le composant de la page des commandes
import Basket from '../Basket/Basket';  // Importe le composant de la page du panier
import EditProfile from '../Profile/EditProfile'; // Importe le composant de la page d'édition de profil

// Composant principal de l'application
function App() {
  // Initialiser l'état de visibilité pour divers éléments de l'interface utilisateur. Ces états sont ensuite passés à l'élément Bakery
  const [isVisible, setIsVisible] = useState(true); // Initialiser l'état de visibilité 1
  const [isVisible2, setIsVisible2] = useState(true); // Initialiser l'état de visibilité 2
  const [isVisible3, setIsVisible3] = useState(true); // Initialiser l'état de visibilité 3
  const [isVisible4, setIsVisible4] = useState(true); // Initialiser l'état de visibilité 4

  // Rendu du composant
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/inscription" element={<CheckIn />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/boulangeries/:id" // Route pour la page d'une boulangerie en particulier. L'ID est passé en tant que paramètre
              element={
                <Bakery
                  isVisible={isVisible} // Passe l'état de visibilité à l'élément Bakery
                  setIsVisible={setIsVisible} // Passe la fonction de mise à jour de l'état de visibilité à l'élément Bakery
                  isVisible2={isVisible2} // Passe l'état de visibilité 2 à l'élément Bakery
                  setIsVisible2={setIsVisible2} // Passe la fonction de mise à jour de l'état de visibilité 2 à l'élément Bakery
                  isVisible3={isVisible3} // Passe l'état de visibilité 3 à l'élément Bakery
                  setIsVisible3={setIsVisible3}  // Passe la fonction de mise à jour de l'état de visibilité 3 à l'élément Bakery
                  isVisible4={isVisible4}  // Passe l'état de visibilité 4 à l'élément Bakery
                  setIsVisible4={setIsVisible4}  // Passe la fonction de mise à jour de l'état de visibilité 4 à l'élément Bakery
                />
              }
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

// Exporter le composant pour pouvoir l'utiliser dans d'autres modules
export default App;
