import { Link } from "react-router-dom";
import { React, useState } from "react";

function CartProduct({ item, setCartChanges, cartChanges }) {
  const [quantity, setQuantity] = useState(item.quantity);
  async function handleAddToCart(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:5001/api/cart/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ productId: item.product._id, quantity }),
    });
    //cartChanges+1 to trigger useEffect to refresh
    setCartChanges(cartChanges + 1);
  }

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="cartbody">
      <div className="cartoutterbox">
        <Link to={`/products/${item.product._id}`}>
          <img
            className="cartproductimg"
            src={item.product.image}
            alt={item.product.name}
          />
        </Link>
        <div className="cartdetails">
          <Link to={`/products/${item.product._id}`}>
            <span className="cartdetailsname">{item.product.name}</span>
          </Link>
          <span className="cartdetailsprice">${item.product.price}</span>
          <span className="cartdetailsquantity">
            Quantity:&nbsp;{item.quantity}
          </span>
          <button onClick={handleAddToCart} className="each-product-button">
            Update Cart
          </button>
          <div className="outterardbutton">
            <button
              className="CartProductcardbutton"
              onClick={() => setQuantity(Number(quantity) + 1)}
            >
              +
            </button>
            <input
              className="CartProductinput"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="CartProductcardbutton" onClick={minusQuantity}>
              -
            </button>
          </div>
        </div>
        <hr className="carthr"></hr>
      </div>
    </div>
  );
}

export default CartProduct;
