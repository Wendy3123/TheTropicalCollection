import { useState, useEffect, UseParams } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";


function EachProductScreen() {

  const {id: productId}=useParams();
  const product =products.find((p)=> p._id===productId)
 
  return (
    <>
      <Link className="btn btn-light my-3" to="/products">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item> {product.description}</ListGroup.Item>
            <ListGroup.Item>
              <Button ClassName="btnBlock" type="button">
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default EachProductScreen;