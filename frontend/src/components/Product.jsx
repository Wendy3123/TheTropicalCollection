import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { useContext } from "react";

//make a post request to add the product to your cart property in the users collection
//

function Products({ product }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <main className="productoutterbox">
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

        <div className="outterardbutton">
          <button className="cardbutton">Add To Cart</button>
        </div>
      </div>
    </main>
  );
}

export default Products;
