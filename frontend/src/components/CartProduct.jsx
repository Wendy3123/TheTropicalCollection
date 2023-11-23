import { Link } from "react-router-dom";
import React from "react";

//make a post request to add the product to your cart property in the users collection
//

function CartProduct({ product }) {
  return (
    <main className="CardProductoutterbox">
      <div classname="productbox">
        <Link to={`/products/${product._id}`} className="innerproductbox">
          <img
            className="productimg"
            src={product.image}
            alt={product.name}
          ></img>
        </Link>
        <Link to={`/products/${product._id}`}>
          <h4 className="aligntext">{product.name}</h4>
        </Link>
        <h4 className="aligntext">${product.price}</h4>
        <p className="CartProductQuantity">Quantity:&nbsp;{product.quantity}</p>
        <div className="outterardbutton">
          {" "}
          <button className="CartProductcardbutton">+</button>
          <input className="CartProductinput"></input>
          <button className="CartProductcardbutton">-</button>
        </div>
      </div>
    </main>
  );
}

export default CartProduct;
