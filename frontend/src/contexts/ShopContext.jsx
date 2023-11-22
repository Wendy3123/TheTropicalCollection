import React, { createContext, useState, useEffect } from "react";
export const ShopContext = createContext(null);
//define all our states and function logic here to use in other places in project
// const [products, setProducts] = useState([]);

// // useEffect(() => {
// const fetchData = async () => {
//   const res = await fetch(`/api/products/`);
//   const resData = await res.json();
//   setProducts(resData);
// };
// //   fetchData();
// // }, []);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < products.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider = (props) => {
  //provides the shopcontext state/logic to anything within the provider tag
  //usestate will keep track of object with a id and quantity added to cart
  //it will look like {id:quantity, 1:0, 2:0 ,3:0} all objects have default of zero quantity at the start

  const [cartItems, setCartItems] = useState();
  const addToCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((previous) => ({
      ...previous,
      [itemId]: previous[itemId] - 1,
    }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
