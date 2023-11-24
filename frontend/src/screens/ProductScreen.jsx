import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import {Button} from 'react-bootstrap'
import { CurrentUser } from '../contexts/CurrentUser.js';

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(CurrentUser)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5001/api/products/`);
      const resData = await res.json();
      setProducts(resData);
    };
    fetchData();
  }, []);
  return (
    <div>
            {currentUser && currentUser.isAdmin && (
  <h3>
  Click on item you want to Edit or delete
  </h3>
)}
      <h1 className="header1centered">Kosher Dried Fruits</h1>
      <div className="cardboxflex">
        {products.map((product) => (
          <div className="eachcard">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
