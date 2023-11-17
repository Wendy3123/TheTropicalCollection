import React from "react";
import { Image } from "react-bootstrap";
import {Link} from 'react-router-dom'
import products from "../products";
import Product from "../components/Product";
import Footer from "../components/Footer";

function ProductScreen() {
  return (
    <div>
      <h1 className="header1centered">Kosher Dried Fruits</h1>
      <div className="cardboxflex">
        {products.map((product) => (
          <div className="eachcard">
          
            <Image src={product.img}></Image>
          
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
