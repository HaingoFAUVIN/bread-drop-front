import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    
    if (token) {
      let decodedToken = jwt_decode(token);
        sessionStorage.setItem('userRoles', decodedToken.roles);
        console.log(decodedToken.roles);

      const api = axios.create({
        baseURL: 'https://davyvistel-server.eddi.cloud/',
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
                sessionStorage.setItem('userName', user.firstname);
                sessionStorage.setItem('lastName', user.lastname);
                sessionStorage.setItem('userEmail', user.email);
                sessionStorage.setItem('userAddress', user.adress);
                sessionStorage.setItem('userOrders', JSON.stringify(user.orders));
                setUser(user);
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
      <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, user, setUser }}>
        {children}
      </UserContext.Provider>
    );
};
