import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <main className="productoutterbox">
      <div classname="productbox">
        <Link to={`/products/${product.name}`} className="innerproductbox">
          <img
            className="productimg"
            src={product.image}
            alt={product.name}
          ></img>
        </Link>
        <Link to={`/products/${product.name}`}>
          <h4 className="aligntext">{product.name}</h4>
        </Link>
        <h4 className="aligntext">{product.price}</h4>
        <div className="aligntext">
          <button>Add To Cart</button>
        </div>
      </div>
    </main>
  );
}

export default Products;
