import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <main className="productoutterbox">
      <div classname="productbox">
        <Link to={`/products/${product._id}`} className="innerproductbox">
          <img
            className="productimg"
            src={product.image}
            alt={product.name}
          ></img>
        </Link>
        <Link to={`/products/${product._id}`}>
          <h4 className="aligntext">{product.name}</h4>
        </Link>
        <h4 className="aligntext">${product.price}</h4>
        <div className="outterardbutton">
          <div className="carddropdown">
            <select className="select ">
              <option value="1" selected="selected">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
          </div>

          <button className="cardbutton">Add To Cart</button>
        </div>
      </div>
    </main>
  );
}

export default Products;
