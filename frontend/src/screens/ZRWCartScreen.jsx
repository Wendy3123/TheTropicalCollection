import {useEffect, useContext, useState} from "react";

import { CurrentUser } from '../contexts/CurrentUser.js';

function CartScreen() {
  const { currentUser } = useContext(CurrentUser)

  const [userInfo, setUserInfo] = useState([]);
  
  //make a fetch request to users collection and then grab products from cart property
  const currentUserId = currentUser?._id

  
 useEffect(() => {
  
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5001/api/users/${currentUserId}`);
      const resData = await res.json();
      setUserInfo(resData);
    };
    fetchData();
  }, [currentUserId]);

  
  
//sum up the cart
  let sumCart = userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.price;
  }, 0);
// //sum up the quantity
  let sumQuantity= userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.quantity;
  }, 0);

  return (
    <div className="container">
     <p>{userInfo.name}</p>
    <p>{userInfo.email}</p>
   
  {userInfo.cartItems?.map((item)=> 
  
 <p>{item?.name} {item?.price} {item?.quantity}</p>
 )}
 <p>total items in cart: {sumCart}</p>
 <p>total items in cart: {sumQuantity}</p>  
     
    </div>
   
   );
     }
 
export default CartScreen;
