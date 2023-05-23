import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    
    if (token) {
      let decodedToken = jwt_decode(token);
        console.log(decodedToken);
        console.log(decodedToken.username);

      const api = axios.create({
        baseURL: 'http://davyvistel-server.eddi.cloud/',
        headers: {
          Authorization: `Bearer`, 
        },
      });

      const userInfo = async () => {
          try {
            const response = await api.get('api/utilisateurs');
            if (response.data) {
              const user = response.data.find(user => user.email === decodedToken.username); 
              if (user) {
                console.log(user);
                sessionStorage.setItem('userId', user.id);
                sessionStorage.setItem('userName', user.username);
                sessionStorage.setItem('lastName', user.lastname);
                sessionStorage.setItem('userEmail', user.email);
                sessionStorage.setItem('userAddress', user.address);
              }
            }
          }
          catch (error) {
            console.log('erreur');
          }
      };

      setIsUserLoggedIn(true);
      userInfo();
    }
  }, []);

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
