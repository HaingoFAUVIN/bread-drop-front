import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product, quantity) => {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    };

    const clearCart = () => {
      setCart([]);
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  };
