import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import { CurrentUser } from "../contexts/CurrentUser.js";

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { currentUser } = useContext(CurrentUser);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5001/api/products/`);
      const resData = await res.json();
      setProducts(resData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5001/api/cart", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      });
  }, []);
  return (
    <div>
      {currentUser && currentUser.isAdmin && (
        <h3>Click on item you want to Edit or delete</h3>
      )}
      <h1 className="header1centered">Kosher Dried Fruits</h1>
      <div className="cardboxflex">
        {products.map((product) => (
          <div className="eachcard">
            <Product product={product} cart={cart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
