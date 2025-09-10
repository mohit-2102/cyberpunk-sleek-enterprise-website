import { createContext, useContext, useEffect, useState } from 'react';

// Create context
const CartContext = createContext();

// Custom hook for using the context
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem('cartItems');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (service) => {
    // Avoid duplicates based on slug
    setCartItems((prev) => {
      if (!prev.find((item) => item.slug === service.slug)) {
        return [...prev, service];
      }
      return prev;
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
