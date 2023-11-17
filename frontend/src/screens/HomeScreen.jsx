import React from "react";
import logo from "../styles/logo-small.png";
import { Image, ListGroup, Col, Row, Button } from "react-bootstrap";

function HomeScreen() {
  return (
    <>
      <Row>
        <Col md={5}>
          <Image
            src="https://thetropicalcollection.com/fruit-dish.jpeg"
            alt="Jar of Dried Fruits"
            fluid
          ></Image>
        </Col>
        <Col md={4}>
          <ListGroup.Item>
            <h3 className="title">Fresh Fruit is the ONLY ingredient!</h3>
            <Image src={logo} alt="logo" fluid></Image>
          
          </ListGroup.Item>
          <ListGroup.Item>
          <Button ClassName="outline-primary float-end">
             <Link to ="/products">See Our Products</Link> 
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
}

export default HomeScreen;
