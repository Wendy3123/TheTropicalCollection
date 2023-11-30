import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Image, Button, Container } from "react-bootstrap";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/products/${id}`);
      const resData = await response.json();
      setProduct(resData);
    };
    fetchData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:5001/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    navigate(`/edit/${id}`);
  }
  return (
    <main>
      
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Container>
            <Image
              className="each-product-image"
              src={product.image}
              alt={product.name}
            ></Image>
          </Container>
        </div>
        <div className="form-container">
          <div className="form">
            <label htmlFor="name">Product Name</label>
            <input
              required
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="form-control"
              id="name"
              name="name"
            />
          </div>

          <div className="form">
            <label htmlFor="prod-category">Product Category</label>
            <input
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, moreInfo: e.target.value })
              }
              className="form-control"
              id="category"
              name="category"
            />
          </div>

          <div className="form">
            <label htmlFor="prod-decription"> Product Description</label>
            <input
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="form-control"
              id="description"
              name="description"
              placeholder=""
            />
          </div>
          <div className="form">
            <label htmlFor="total-cost">Price</label>
            <input
              value={product.price}
              onChange={(e) => setProduct({ ...product, food: e.target.value })}
              className="form-control"
              id="price"
              name="price"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <Container>
            <Link to="/products_id" method= "POST">
              <Button variant="link">Submit</Button>
            </Link>
          </Container>
        </div>
      </form>
    </main>
  );
}

export default EditProduct;
