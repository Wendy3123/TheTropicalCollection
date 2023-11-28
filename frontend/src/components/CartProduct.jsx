import { Link } from "react-router-dom";
import { React } from "react";

function CartProduct({ item }) {
  return (
    <div>
      <div className="CardProductoutterbox">
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
          <Link to={`/products/${item.product._id}`}>
            <h4 className="aligntext">{item.product.name}</h4>
          </Link>
          <h4 className="aligntext">${item.product.price}</h4>
          <p className="CartProductQuantity">Quantity:&nbsp;{item.quantity}</p>

          <div className="outterardbutton">
            {/* <button className="CartProductcardbutton">+</button>
            <input className="CartProductinput"></input>
            <button className="CartProductcardbutton">-</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
