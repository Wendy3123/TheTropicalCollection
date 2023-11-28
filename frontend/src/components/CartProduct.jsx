import { Link } from "react-router-dom";
import { React, useState, useContext, useEffect } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function CartProduct({ product }) {
  const { currentUser } = useContext(CurrentUser);
  const [userInfo, setUserInfo] = useState([]);
  //make a fetch request to users collection and then grab products from cart property
  const currentUserId = currentUser?._id;

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
      {userInfo &&
        userInfo.cartItems?.map((item) => (
          <main className="CardProductoutterbox">
            <div classname="productbox">
              <Link
                to={`/products/${item.product._id}`}
                className="innerproductbox"
              >
                <img
                  className="productimg"
                  src={item.product.image}
                  alt={item.product.name}
                />
              </Link>
              <Link to={`/products/${product._id}`}>
                <h4 className="aligntext">{item.product.name}</h4>
              </Link>
              <h4 className="aligntext">${item.product.price}</h4>
              <p className="CartProductQuantity">
                Quantity:&nbsp;{item.quantity}
              </p>

              <div className="outterardbutton">
                {/* <button className="CartProductcardbutton" onClick={addQuantity}>
              +
            </button>
            <input className="CartProductinput"></input>
            <button className="CartProductcardbutton" onClick={minusQuantity}>
              -
            </button> */}
              </div>
            </div>
          </main>
        ))}
      <p>{`Subtotal(${sumQuantity} items): ${USDollar.format(sumCart)}`}</p>
    </div>
  );
}

export default CartProduct;
