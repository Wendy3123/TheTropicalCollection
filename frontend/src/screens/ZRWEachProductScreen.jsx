import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { CurrentUser } from "../contexts/CurrentUser.js";

function EachProductScreen() {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  const { currentUser } = useContext(CurrentUser);
  const currentUserId = currentUser._id;

  //make a fetch request to users collection and then grab products from cart property

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5001/api/products/${productId}`
      );
      const resData = await res.json();
      setProduct(resData);
    };
    fetchData();
  }, [productId]);

  const [cartItem, setCartItem] = useState({
    name: "",
    image: "",
    quantity: 1,
    description:"",
    price:0,
  });

  async function handleAddToCart(e) {
    e.preventDefault();
    setCartItem({...cartItem, name: product.name, 
      _id: product._id,
      image:product.image, 
       description:product.description,
       price:product.price,
      quantity:parseInt(cartItem.quantity)})
       console.log(cartItem)
    await fetch(
      `http://localhost:5001/api/users/${currentUserId}/cart/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(cartItem),
      }
    );

    
   }

  return (
    <>
      <div className="eachProductgoBackButton">
        <Link className="btn btn-light my-3" to="/products">
          Go Back
        </Link>
      </div>

      <div className="each-product-container">
        <div className="each-product-left">
          <Image
            className="each-product-image"
            src={product.image}
            alt={product.name}
          ></Image>
        </div>
        <div className="each-product-left">
          <h1 className="each-product-name">{product.name}</h1>
          <hr className="hr"></hr>
          <h5 className="each-product-price">Price: ${product.price}</h5>
          <hr className="hr"></hr>
          <h6 className="each-product-description">{product.description}</h6>

          <button onClick={handleAddToCart} className="each-product-button">Add To Cart</button>
          <select
            className="select "
            onChange={(e) =>
              setCartItem({...cartItem, quantity: parseInt(e.target.value)})
                
            }
          >
            <option value="1" selected="selected">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default EachProductScreen;
