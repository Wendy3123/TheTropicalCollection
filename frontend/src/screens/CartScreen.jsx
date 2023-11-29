import React, { useState, useEffect } from "react";
import CartProduct from "../components/CartProduct";

function CartScreen() {
  //make a fetch request to users collection and then grab products from cart property
  const [cart, setCart] = useState([]);
  const [cartChanges, setCartChanges] = useState(0);

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

  //sum up the cart
  let sumCart = cart.reduce((tot, c) => {
    return tot + c.product.price * c.quantity;
  }, 0);

  // //sum up the quantity
  let sumQuantity = cart.reduce((tot, c) => {
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
          {cart.map((item) => (
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
        </p>
      </div>
    </div>
  );
}
export default CartScreen;
