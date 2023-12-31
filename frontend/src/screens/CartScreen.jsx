import React, { useState, useEffect, useContext } from "react";
import CartProduct from "../components/CartProduct";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BASE_URL } from "../App";

function CartScreen() {
  //make a fetch request to users collection and then grab products from cart property
  const [cart, setCart] = useState([]);
  const [cartChanges, setCartChanges] = useState(0);
  const { currentUser } = useContext(CurrentUser);
  const currentUserId = currentUser?._id;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/api/cart`, {
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
  let sumCart = cart?.reduce((tot, c) => {
    return tot + c.product.price * c.quantity;
  }, 0);

  // //sum up the quantity
  let sumQuantity = cart?.reduce((tot, c) => {
    return tot + c.quantity;
  }, 0);

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const emptyCart = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/api/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setCartChanges(cartChanges + 1);
    console.log(data);
  };

  return (
    <div>
      <div>
        <div className="CartScreenheader1centered">
          {sumQuantity === 0 ? (
            <>
              <h1>Your Cart Is Empty</h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
                alt="emptycartpic"
              ></img>
            </>
          ) : (
            <div>
              <h1>Your Cart</h1>
              <button onClick={emptyCart} className="cartScreenDeleteBtn">
                &nbsp;Empty Cart
              </button>
            </div>
          )}
        </div>

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
        <div className="cartsubtotal">
          <strong>{`Subtotal(${sumQuantity} items): ${USDollar.format(
            sumCart
          )}`}</strong>
          <div>
            {sumQuantity > 0 && (
              <Button
                style={{ backgroundColor: "yellow", marginTop: "20px" }}
                className="checkoutbutton"
              >
                <Link
                  to={`/checkout/${currentUserId}`}
                  style={{ textDecoration: "none" }}
                >
                  Checkout
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartScreen;
