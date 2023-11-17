import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";
import Footer from "../components/Footer";

function ProductScreen() {
  return (
    <>
      <h1>Kosher Dried Fruits</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {product.img}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductScreen;
