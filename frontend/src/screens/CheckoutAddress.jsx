import {  useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { CurrentUser } from "../contexts/CurrentUser.js";
function CheckoutAddress() {
  const navigate = useNavigate();

  // const { id } = useParams();
  const { currentUser } = useContext(CurrentUser);
  const [address, setAddress] = useState({
    name:"",
    address: "",
    city: "",
    state: "",
    zip:"",
    phone:""
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5001/api/users/${currentUser?._id}`
      );
      const resData = await response.json();
      setAddress(resData);
    };
    fetchData();
  }, [currentUser?._id]);

   
   

      async function handleSubmit(e) {
        e.preventDefault();
    
        await fetch(`http://localhost:5001/api/users/${currentUser?._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(address),
        });
    // create confirmation page
        navigate(`/`);
      }
  return (
    <div className="login-top-container">
      <div className="login-container">
        <h1>Please complete</h1>

        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
          <div className="form-control">
            <input
              type="name"
              required
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              id="name"
              name="name"
            />
          </div>
          <label htmlFor="address">Address</label>
          <div className="form-control">
            <input
              type="address"
              required
              value={address.address}
              onChange={(e) => setAddress({ ...address, address: e.target.value })}
              id="address"
              name="address"
            />
          </div>
          <label htmlFor="city">City</label>
          <div className="form-control">
            <input
              type="city"
              required
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              id="city"
              name="city"
            />
          </div>
          <label htmlFor="state">State</label>
          <div className="form-control">
            <input
              type="state"
              required
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              id="state"
              name="state"
            />
          </div>
          <label htmlFor="zip">Zip</label>
          <div className="form-control">
            <input
              type="zip"
              required
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
              id="zip"
              name="zip"
            />
          </div>

          <label>Phone Number</label>
          <div className="form-control">
            <input
              type="phone"
              required
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              id="phone"
              name="phone"
            />
          </div>
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}



export default CheckoutAddress