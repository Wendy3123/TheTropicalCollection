import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image, Container, Button } from "react-bootstrap";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { BASE_URL } from "../App.js";

function EachProductScreen() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id: productId } = useParams();
  const { currentUser } = useContext(CurrentUser);
  //CURRENTUSER? makes it so each product page still shows even if you aernt logged in
  //if there is a user set currentuserid to the id else set id to undefined
  const currentUserId = currentUser?._id;

  //make a fetch request to users collection and then grab products from cart property
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASE_URL}/api/products/${productId}`);
      const resData = await res.json();
      setProduct(resData);
    };
    fetchData();
  }, [productId]);

  async function handleAddToCart(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await fetch(`${BASE_URL}/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ productId, quantity }),
    });
    navigate("/products");
  }

  async function handleDelete(e) {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want ${product.name} to be deleted?`
    );

    if (confirmed) {
      
      await fetch(`${BASE_URL}/api/products/${productId}`,
       {
        method: "DELETE",
      });
      navigate("/products");
    }
  }

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
            src={product?.image}
            alt={product?.name}
          ></Image>
        </div>

        <div className="each-product-left">
          <h1 className="each-product-name">{product.name}</h1>
          <hr className="hr"></hr>
          <h5 className="each-product-price">Price: ${product.price}</h5>
          <hr className="hr"></hr>
          <h6 className="each-product-description">{product.description}</h6>

          <div className="cartDiv">
            <button
              className="CartProductcardbutton2"
              onClick={() => setQuantity(Number(quantity) + 1)}
            >
              +
            </button>
            <input
              className="CartProductinput2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="CartProductcardbutton2" onClick={minusQuantity}>
              -
            </button>
          </div>
          <button onClick={handleAddToCart} className="each-product-button">
            Add To Cart
          </button>

          <hr className="hr"></hr>
          {currentUser && currentUser.isAdmin && (
            <div className="admin-buttons">
              <Container>
           
                <Link to={`/products/edit/${productId}`}>
                  <Button variant="link" className="adminButtonleft">
                    Edit Product
                  </Button>
                </Link>

                <Link to="/">
                  <Button  onClick={handleDelete} variant="link" className="adminButtonright">
                    Delete
                  </Button>
                </Link>
              </Container>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EachProductScreen;
