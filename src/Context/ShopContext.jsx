import React, { createContext, useEffect, useState } from "react";

// Sample static product data (replace this with your actual product data)
const staticProducts = [
  { id: 1, name: "Product 1", new_price: 100 },
  { id: 2, name: "Product 2", new_price: 150 },
  // Add more products here
];

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const [products, setProducts] = useState(staticProducts); // Using static data

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < staticProducts.length; i++) {
      cart[staticProducts[i].id] = 0; // Initialize cart with 0 quantity for each product
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.new_price;
        } catch (error) {
          console.error("Error calculating total amount:", error);
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalItem += itemInfo ? cartItems[item] : 0;
        } catch (error) {
          console.error("Error calculating total items:", error);
        }
      }
    }
    return totalItem;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    products,
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
