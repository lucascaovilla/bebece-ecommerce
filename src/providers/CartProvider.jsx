import { createContext, useContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'cartedItems';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartedItems, setCartedItems] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (cartedItems.length > 0) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartedItems));
    }
  }, [cartedItems]);

  const addToCart = (id, quantity = 1) => {
    setCartedItems((prev) => {
      const existingProduct = prev.find((item) => item.id === id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id, quantity }];
    });
  };

  const clearCart = () => setCartedItems([]);

  return (
    <CartContext.Provider
      value={{
        cartedItems,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
