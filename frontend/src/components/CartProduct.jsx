import { Link } from "react-router-dom";
import { React } from "react";

function CartProduct({ item }) {
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
        </div>
        <hr className="carthr"></hr>

        <div className="outterardbutton">
          {/* <button className="CartProductcardbutton">+</button>
            <input className="CartProductinput"></input>
            <button className="CartProductcardbutton">-</button> */}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
