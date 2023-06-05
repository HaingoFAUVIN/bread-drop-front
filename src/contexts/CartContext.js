import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    if (cart.length === 0) {
      setCart([{ ...product, quantity }]);
    } else {
      const bakeryId = cart[0].bakeryId;
      if (product.bakeryId === bakeryId) {
        setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      } else {
        setErrorMessage('Vous ne pouvez pas commander dans deux boulangeries différentes');
        console.error('Vous ne pouvez pas commander dans deux boulangeries différentes');
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearErrorMessage = () => {
    setErrorMessage(null);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, errorMessage, clearErrorMessage }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
