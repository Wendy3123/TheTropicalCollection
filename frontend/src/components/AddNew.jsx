import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image, Container } from "react-bootstrap";
import { BASE_URL } from "../App";
function AddNew() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    user: "",
    name: "",
    image: "",
    category: "",
    description: "",
    price: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`${BASE_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    navigate("/products");
  }
  return (
    <main className="add-form-container">
      <div className="add-prod-container">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="add-form">
            <label htmlFor="name">Product Name</label>
            <input
              required
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="form"
              id="name"
              name="name"
            />
            <div className="add-form">
              <label htmlFor="product-category">Choose Product Category</label>
              <select
                required
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                className="form"
                id="prod-category"
                name="prod-category"
                defaultValue={product.name}
              >
                <option value="cat-1"> Category 1</option>
                <option value="cat-2"> Category 2</option>
                <option value="cat-3"> Category 3</option>
                <option value="cat-4"> Category 4</option>
              </select>
              <label htmlFor="product-category"> Description</label>
              <input
                required
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                className="add"
                id="description"
                name="description"
              />
              <label className="price">Price</label>
              <input
                required
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                className="form"
                id="price"
                name="price"
              />

              <div className="add-form">
                <Container>
                  <Button ClassName="submit-button"> Submit</Button>

   
                </Container>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddNew;
