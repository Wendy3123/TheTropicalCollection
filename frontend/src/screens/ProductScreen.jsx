import { useState, useEffect } from "react";
import Product from "../components/Product";

function ProductScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/`);
      const resData = await res.json();
      setProducts(resData);
    };
    fetchData();
  }, []);
  return (
    <div>
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
