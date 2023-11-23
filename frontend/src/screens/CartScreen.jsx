import React, { useState, useEffect } from "react";
import CartProduct from "../components/CartProduct";

function CartScreen() {
  //make a fetch request to users collection and then grab products from cart property
  const [cart, setCart] = useState([]);
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
  }, []);
  return (
    <div>
      <h1 className="header1centered">Your Cart</h1>
      <div className="cardboxflex">
        {cart.map((product) => (
          <div className="eachcard">
            <CartProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default CartScreen;
