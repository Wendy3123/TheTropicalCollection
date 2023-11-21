
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddNew() {
//   const navigate = useNavigate();

//   const [product, setProduct] = useState({
//     user: "",
//     name: "",
//     image: "",
//     category: "",
//     description: "",
//     price: "",
//   });
// }

// async function handleSubmit(e) {
//   e.preventDefault();

//   await fetch(`http://localhost:5001/products`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });

//   navigate("/products");

  
// return (
//   <main>
//     <h1>Add New Product</h1>
//     <form onSubmit={handleSubmit}>
// <div className="add-product">
//           <label htmlFor="name">Name</label>
//           <input
//             required
//             value={product.name}
//             onChange={(e) => setProduct({ ...product, name: e.target.value })}
//             className="form-control"
//             id="name"
//             name="name"
//           />
// </div>
//     </form>
//   </main>
// );
// }
// export default AddNew;
