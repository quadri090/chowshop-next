"use client"

import React, { createContext, useState, useContext } from 'react'
import { ITEMS } from '../items';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ITEMS.length + 1; i++) {
    cart[i] = 0
  }
  // console.log(typeof(cart))
  return cart;
}


export default function HomeContextProvider(props) {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [location, setLocation] = useState("");
  const [addressClick , setAddressClick] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [alternateNum, setAlternateNum] = useState({
    num: ""
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    info: ""
  });

  const [showAlternateNum, setShowAlernateNum] = useState(false)

  const [currentUser, setCurrentUser] = React.useState({
    username: "",
    phonenumber: "",
    email: "",
    _id: ""
})

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ITEMS.find((x) => x.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalItemsCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCount += cartItems[item] + 0;
      }
    }
    return totalCount;
  };


  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

  const clearItem = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] * 0}))
  };
  
  const clearCart = () => {
    const zeroedState = {};

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        zeroedState[item] = 0;
      } else {
        zeroedState[item] = cartItems[item];
      }
    }
    setCartItems(zeroedState)
  };

  const addressInputOpen = () => {
    setAddressClick(true)
  };

  const addressInputClose = () => {
    setAddressClick(false)
  };

  const isVisible = () => {
    setVisibility(true)
  };

  const isNotVisible = () => {
    setVisibility(!visibility)
  };



  const contextValue = {
    cartItems, 
    getTotalCartAmount, 
    addToCart, 
    removeFromCart, 
    clearItem, 
    clearCart,
    getTotalItemsCount,
    addressClick,
    addressInputOpen,
    addressInputClose,
    visibility,
    isVisible,
    isNotVisible,
    location,
    setLocation,
    currentUser,
    setCurrentUser,
    alternateNum,
    setAlternateNum,
    showAlternateNum,
    setShowAlernateNum,
    additionalInfo,
    setAdditionalInfo
  };


  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  )
}


export function useShopContext() {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error(
      "useShopContext must be used within a ShopContextProvider"
    );
  }
  return context;
}