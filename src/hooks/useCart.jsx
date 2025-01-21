import { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../utils';

const CART_STORAGE_KEY = 'cartedItems';

const useCart = () => {
  const [cartedItems, setCartedItems] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const syncLocalStorage = useCallback((items) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, []);

  useEffect(() => {
    syncLocalStorage(cartedItems);
  }, [cartedItems, syncLocalStorage]);

  const addToCart = useCallback((id, size, quantity = 1) => {
    setCartedItems((prev) => {
      const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || prev;

      const existingProductIndex = savedCart.findIndex((item) => item.id === id && item.size === size);
      let updatedCart;

      if (existingProductIndex !== -1) {
        updatedCart = [...savedCart];
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        updatedCart = [...savedCart, { id, quantity, size }];
      }

      syncLocalStorage(updatedCart);
      return updatedCart;
    });
  }, [syncLocalStorage]);

  const updateQuantity = useCallback((id, size, quantity) => {
    setCartedItems((prev) => {
      const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || prev;
  
      const existingProductIndex = savedCart.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...savedCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity,
        };
  
        syncLocalStorage(updatedCart);
  
        return updatedCart;
      }
  
      return savedCart;
    });
  }, [syncLocalStorage]);
  
  

  const removeFromCart = useCallback((id, size) => {
    setCartedItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id || item.size !== size);
      syncLocalStorage(updatedCart);
      return updatedCart;
    });
  }, [syncLocalStorage]);

  const clearCart = useCallback(() => {
    setCartedItems([]);
    syncLocalStorage([]);
  }, [syncLocalStorage]);

  const retrieveCartItems = useCallback(async () => {
    const products = await getProducts();

    return cartedItems.map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
  
      if (product) {
        return {
          id: cartItem.id,
          size: cartItem.size,
          quantity: cartItem.quantity,
          product: product,
        };
      }
  
      return null;
    }).filter(item => item !== null);
  }, [cartedItems]);
  
  
  const cartLength = cartedItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartedItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartLength,
    retrieveCartItems,
  };
};

export default useCart;
