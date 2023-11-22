import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    await fetch(`http://localhost:5001/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    navigate("/products");
  }   
  return (
    <main className="form-main-container">
      <h1>Add New Product</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="add-product">
            <label htmlFor="name">Product Name</label>
            <input
              required
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="form"
              id="name"
              name="name"
            />
            <div className="form">
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
                className="form"
                id="description"
                name="description"
              />
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
              <button className="submit"> Done</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddNew;
