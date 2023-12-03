import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Image, Button, Container } from "react-bootstrap";
import { BASE_URL } from "../App";
function EditProduct() {
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    description: "",
    price: "",
  });

  useEffect(() => {
  
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}/api/products/${productId}`);
      const resData = await response.json();
      setProduct(resData);
    };
    fetchData()
    console.log(`product is ${product}`);
  }, [productId]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`${BASE_URL}/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    navigate(`/products/${productId}`);
  }
  return (
    <main>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Container>
            <Image variant="img-thumbnail"
              className="product-image"
              height='200px'
              width="200px"             src={product?.image}
              alt={product?.name}
            ></Image>
          </Container>
        </div>
        <div className="main-form-container">
          <div className="edit-form">
            <label htmlFor="name">Product Name</label>
            <input
              required
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="form-control"
              id="name"
              name="name"
            />
          </div>

          <div className="edit-form">
            <label htmlFor="prod-category">Product Category</label>
            <input
              value={product?.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="form-control"
              id="category"
              name="category"
            />
          </div>

          <div className="edit-form">
            <label htmlFor="prod-decription"> Product Description</label>
            <input
              value={product?.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="form-control"
              id="description"
              name="description"
              placeholder=""
            />
          </div>
          <div className="edit-form">
            <label htmlFor="total-cost">Price</label>
            <input
              value={product?.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              className="form-control"
              id="price"
              name="price"
              placeholder=""
            />
          </div>
        </div>
        <div>

          <Container>
     
              <Button variant="link" className="submit-button">

                Submit
              </Button>
      
          </Container>
         
        </div>
      </form>
    </main>
  );
}

export default EditProduct;
