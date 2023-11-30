import React, { useState, useEffect, useContext } from "react";
import CartProduct from "../components/CartProduct";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CartScreen() {
  //make a fetch request to users collection and then grab products from cart property
  const [cart, setCart] = useState([]);
  const [cartChanges, setCartChanges] = useState(0);
  const { currentUser } = useContext(CurrentUser);
  const currentUserId = currentUser?._id;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5001/api/cart", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      });
  }, [cartChanges]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5001/api/users/${currentUserId}`
        );
        const resData = await res.json();
        setUserInfo(resData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [currentUserId]);

  //sum up the cart
  let sumCart = userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.product.price * c.quantity;
  }, 0);

  // //sum up the quantity
  let sumQuantity = userInfo.cartItems?.reduce((tot, c) => {
    return tot + c.quantity;
  }, 0);

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div>
        <h1 className="header1centered">Your Cart</h1>
        <div>
          {cart?.map((item) => (
            <div className="eachcard" key={item._id}>
              <CartProduct
                item={item}
                setCartChanges={setCartChanges}
                cartChanges={cartChanges}
              />
            </div>
          ))}
        </div>
        <p className="cartsubtotal">
          <strong>{`Subtotal(${sumQuantity} items): ${USDollar.format(
            sumCart
          )}`}</strong>
          <div>
        {sumQuantity > 0 &&(
         <Button style={{ backgroundColor: "yellow" }}> <Link to={`/checkout/${currentUserId}`}> Checkout 
         </Link></Button>)}
         </div>
        </p>
      </div>
    </div>
  );
}
export default CartScreen;
