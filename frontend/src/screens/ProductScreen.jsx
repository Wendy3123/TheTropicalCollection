import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { BASE_URL } from "../App.js";

function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { currentUser } = useContext(CurrentUser);
  const [cartChanges, setCartChanges] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASE_URL}/api/products/`);
      const resData = await res.json();
      setProducts(resData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    //gave us error when logged out and going to /product so we need to return nothign if not logged in
    if (!token) {
      return;
    }

    fetch(`${BASE_URL}/api/cart`, {
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
  }, [cartChanges]);
  return (
    <div>
      {currentUser && currentUser.isAdmin && (
        <h3 className="adminAccessRed">
          ✎ Click on item you want to Edit or Delete
        </h3>
      )}
      <h1 className="header1centered">Kosher Dried Fruits</h1>
      <div className="cardboxflex">
        {products.map((product) => (
          <div className="eachcard" key={product._id}>
            <Product
              product={product}
              cart={cart}
              setCartChanges={setCartChanges}
              cartChanges={cartChanges}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductScreen;
