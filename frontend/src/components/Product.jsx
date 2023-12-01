import { Link, useNavigate } from "react-router-dom";
import { React } from "react";
import { BASE_URL } from "../App";

//make a post request to add the product to your cart property in the users collection

function Products({ product, cart, setCartChanges, cartChanges }) {
  const navigate = useNavigate();
  const inCart = cart.find((item) => {
    return item.product._id === product._id;
  });
  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      //if not logged in (no token) return back to /login
      if (!token) {
        navigate("/login");
        return;
      }
      const response = await fetch(`${BASE_URL}/api/cart`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });
      const data = await response.json();
      setCartChanges(cartChanges + 1);
      console.log(data);
    } catch (error) {
      console.log("ADDTOCART error", error);
    }
  };

  return (
    <main className="productoutterbox">
      <div>
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
          <button onClick={addToCart} className="cardbutton">
            {inCart ? `Added(${inCart.quantity})` : `Add To Cart`}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Products;
