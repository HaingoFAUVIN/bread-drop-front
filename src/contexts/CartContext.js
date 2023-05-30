// Importer les modules nécessaires de React
import React, { createContext, useState, useEffect } from 'react';

// Créer un nouveau contexte pour le panier
export const CartContext = createContext();

// Créer un composant fournisseur pour le contexte du panier
export const CartProvider = ({ children }) => {
    // Initialiser l'état du panier à partir des données stockées dans localStorage, ou à un tableau vide si aucune donnée n'est stockée
    const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });
  
    // Mettre à jour localStorage chaque fois que l'état du panier change
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    // Fonction pour ajouter un produit au panier, avec une certaine quantité
    const addToCart = (product, quantity) => {
      // Ajouter le produit à l'état du panier, en préservant l'état précédent et en ajoutant le nouveau produit
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    };

    // Fonction pour vider le panier
    const clearCart = () => {
      setCart([]); // Réinitialiser l'état du panier à un tableau vide
    };
  
    // Rendu du composant fournisseur, qui passe l'état du panier et les fonctions de manipulation du panier à tous les composants enfants
    return (
      <CartContext.Provider value={{ cart, addToCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  };
