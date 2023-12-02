import React, { useState, useEffect, useContext } from "react";
import CartProduct from "../components/CartProduct";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BASE_URL } from "../App";

function CartScreen() {
  //make a fetch request to users collection and then grab products from cart property
  const { currentUser } = useContext(CurrentUser);

  const currentUserId = currentUser?._id;
  const [userInfo, setUserInfo] = useState([]);

  // const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   fetch("http://localhost:5001/api/cart", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCart(data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/${currentUserId}`);
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
      {currentUser ? (
        <div>
          <h1 className="header1centered">Your Cart</h1>
          <div className="cardboxflex">
            {userInfo &&
              userInfo.cartItems?.map((item) => (
                <div className="eachcard">
                  <CartProduct key={item.product._id} item={item} />
                </div>
              ))}
          </div>

          <p>{`Subtotal(${sumQuantity} items): ${USDollar.format(sumCart)}`}</p>
          <Link to={`/checkout/${currentUserId}`}> Checkout </Link>
        </div>
      ) : (
        <Link to="/login">
          <div className="row">
            <Button style={{ backgroundColor: "#925e0b" }}>
              Please Login. Thank you!
            </Button>
          </div>
        </Link>
      )}
    </div>
  );
}
export default CartScreen;
