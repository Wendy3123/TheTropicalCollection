import {useEffect, useContext, useState} from "react";

import { CurrentUser } from '../contexts/CurrentUser.js';

function CartScreen() {
  const { currentUser } = useContext(CurrentUser)

  const [userInfo, setUserInfo] = useState([]);
  
  //make a fetch request to users collection and then grab products from cart property
  const currentUserId = currentUser?._id

  
 useEffect(() => {
  
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5001/api/users/${currentUserId}`);
        const resData = await res.json();
      setUserInfo(resData);
    
    } catch (error) {
      console.error('Error:', error);
    }};
    fetchData();
  }, [currentUserId]);

  
  
//sum up the cart
  let sumCart = userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.product.price * c.quantity;
  }, 0);
// //sum up the quantity
  let sumQuantity= userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.quantity;
  }, 0);

  return (
    <div className="container">
     <p>{userInfo && userInfo.name}</p>
    <p>{userInfo && userInfo.email}</p>
   
  {userInfo && userInfo.cartItems?.map((item)=> 
  
 <p key={item.product._id}>{item.product.name} {item.product.price} {item.quantity}</p>
 )}
 <p>total items in cart: {sumCart}</p>
 <p>total items in cart: {sumQuantity}</p>
     
    </div>
      );
     }
 
export default CartScreen;
