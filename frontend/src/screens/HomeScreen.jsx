import React from "react";
import logo from "../styles/logo-small.png";
import { Image, ListGroup, Col, Row, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

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
            <Link  to ="/products">
          <Button variant="outline-primary float-end ">
             See Our Products
            </Button>
            </Link> 
          </ListGroup.Item>
          {/* <ListGroup.Item> */}
         
          {/* </ListGroup.Item> */}
        </Col>
      </Row>
    </>

  );
}

export default HomeScreen;
