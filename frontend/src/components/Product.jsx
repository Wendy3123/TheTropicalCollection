import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product.name}`}>
        <Card.Img src={product.image} variant="top" fluid />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.name}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Products;
