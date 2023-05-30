// Importer les modules nécessaires de React et autres bibliothèques
import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";  // Importer la fonction pour décoder les tokens JWT
import axios from 'axios';  // Importer la bibliothèque Axios pour gérer les requêtes HTTP

// Créer un nouveau contexte pour l'utilisateur
export const UserContext = createContext();

// Créer un composant fournisseur pour le contexte de l'utilisateur
export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);  // Initialiser l'état de la connexion de l'utilisateur
  const [user, setUser] = useState(null);  // Initialiser l'état des informations de l'utilisateur

  // Gérer les effets de côté de l'état de l'utilisateur
  useEffect(() => {
    const token = sessionStorage.getItem('token');  // Récupérer le token de l'utilisateur depuis sessionStorage
    
    // Si un token est présent, l'utilisateur est connecté
    if (token) {
      let decodedToken = jwt_decode(token);  // Décoder le token JWT

      // Créer une instance d'Axios avec la configuration de base
      const api = axios.create({
        baseURL: 'https://davyvistel-server.eddi.cloud/',
        headers: {
          Authorization: `Bearer`,  // Spécifier le schéma d'autorisation dans l'en-tête
        },
      });

      // Fonction asynchrone pour récupérer les informations de l'utilisateur
      const userInfo = async () => {
          try {
            // Effectuer une requête GET à l'API pour récupérer les informations des utilisateurs
            const response = await api.get('api/utilisateurs');
            if (response.data) {
              // Trouver l'utilisateur correspondant à l'adresse e-mail décodée du token
              const user = response.data.find(user => user.email === decodedToken.username);
              if (user) {
                // Si un utilisateur correspondant est trouvé, stocker ses informations dans sessionStorage
                sessionStorage.setItem('userId', user.id);
                sessionStorage.setItem('userName', user.firstname);
                sessionStorage.setItem('lastName', user.lastname);
                sessionStorage.setItem('userEmail', user.email);
                sessionStorage.setItem('userAddress', user.adress);
                setUser(user);  // Mettre à jour l'état de l'utilisateur
              }
            }
          }
          catch (error) {
            console.log('erreur');  // Gérer toute erreur survenue pendant la requête
          }
      };

      setIsUserLoggedIn(true);  // Mettre à jour l'état de la connexion de l'utilisateur
      userInfo();  // Récupérer les informations de l'utilisateur
    }
  }, []);

  // Rendu du composant fournisseur, qui passe l'état de l'utilisateur et les fonctions de gestion de l'utilisateur à tous les composants enfants
  return (
      <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, user, setUser }}>
        {children}
      </UserContext.Provider>
    );
};
