import { useState, useEffect, UseParams } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

function EachProductScreen() {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/${productId}`);
      const resData = await res.json();
      setProduct(resData);
    };
    fetchData();
  }, [productId]);

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
          <button className="each-product-button">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default EachProductScreen;
