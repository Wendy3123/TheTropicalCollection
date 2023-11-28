import { Link } from "react-router-dom";
import { React, useState } from "react";

function CartProduct({ product }) {
  const [quantity, setQuantity] = useState(() => {
    return product.quantity;
  });
  const addQuantity = () => {
    setQuantity((previousQuantity) => {
      let newQuantity = previousQuantity + 1;
      product.quantity = newQuantity;
      return newQuantity;
    });
  };
  const minusQuantity = () => {
    setQuantity((previousQuantity) => {
      let newQuantity = previousQuantity - 1;
      product.quantity = newQuantity;
      return newQuantity;
    });
  };
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
          <button className="CartProductcardbutton" onClick={addQuantity}>
            +
          </button>
          <input className="CartProductinput"></input>
          <button className="CartProductcardbutton" onClick={minusQuantity}>
            -
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartProduct;
