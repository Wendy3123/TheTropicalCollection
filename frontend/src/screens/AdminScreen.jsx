import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function AdminScreen() {
  const { currentUser } = useContext(CurrentUser);
  return (
    <div>
      <div>Administrator Access only!!</div>
      {currentUser && currentUser.isAdmin && (
        <div className="admin-buttons">
          <Link to="/products/new">
            <Button variant="link">Add Product</Button>
          </Link>
          <Link to="/products">
            <Button variant="link">Edit or Delete Product</Button>
          </Link>
          {/* <Link to="/">
            <Button variant="link">View Orders</Button>
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default AdminScreen;
