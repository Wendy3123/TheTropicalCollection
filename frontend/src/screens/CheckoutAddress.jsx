import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from "mdb-react-ui-kit";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { BASE_URL } from "../App.js";
function CheckoutAddress() {
  const navigate = useNavigate();

  // const { id } = useParams();
  const { currentUser } = useContext(CurrentUser);
  const [address, setAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    cartItems: "",
  });

  useEffect(() => {
    const fetchData = async () => {


      const response = await fetch(`${BASE_URL}/api/users/${currentUser?._id}`);

      const resData = await response.json();
      setAddress(resData);
    };
    fetchData();
  }, [currentUser?._id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setAddress({ ...address, cartItems: currentUser.cartItems });


    await fetch(`${BASE_URL}/api/users/${currentUser?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    });


    // create confirmation page
    navigate(`/payment`);
  }
  return (
    // <div className="login-top-container">
    //   <div className="login-container">
    //     <h1>Please complete</h1>

    //     <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name</label>
    //       <div className="form-control">
    //         <input
    //           type="name"
    //           required
    //           value={address.name}
    //           onChange={(e) => setAddress({ ...address, name: e.target.value })}
    //           id="name"
    //           name="name"
    //         />
    //       </div>
    //       <label htmlFor="address">Address</label>
    //       <div className="form-control">
    //         <input
    //           type="address"
    //           required
    //           value={address.address}
    //           onChange={(e) => setAddress({ ...address, address: e.target.value })}
    //           id="address"
    //           name="address"
    //         />
    //       </div>
    //       <label htmlFor="city">City</label>
    //       <div className="form-control">
    //         <input
    //           type="city"
    //           required
    //           value={address.city}
    //           onChange={(e) => setAddress({ ...address, city: e.target.value })}
    //           id="city"
    //           name="city"
    //         />
    //       </div>
    //       <label htmlFor="state">State</label>
    //       <div className="form-control">
    //         <input
    //           type="state"
    //           required
    //           value={address.state}
    //           onChange={(e) => setAddress({ ...address, state: e.target.value })}
    //           id="state"
    //           name="state"
    //         />
    //       </div>
    //       <label htmlFor="zip">Zip</label>
    //       <div className="form-control">
    //         <input
    //           type="zip"
    //           required
    //           value={address.zip}
    //           onChange={(e) => setAddress({ ...address, zip: e.target.value })}
    //           id="zip"
    //           name="zip"
    //         />
    //       </div>

    //       <label>Phone Number</label>
    //       <div className="form-control">
    //         <input
    //           type="phone"
    //           required
    //           value={address.phone}
    //           onChange={(e) => setAddress({ ...address, phone: e.target.value })}
    //           id="phone"
    //           name="phone"
    //         />
    //       </div>
    //       <button type="submit" className="login-button">
    //         Continue
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <MDBContainer fluid className='mt-5 d-flex justify-content-center' >
    <div className='col-lg-6 mb-5 mb-lg-0'>
                <div className='card'>
                  <div className='card-body py-5 px-md-5 checkout'>
                  <h1>Please complete</h1>
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBCol>
        <label htmlFor="name">Name</label>
          <MDBInput
            id="form6Example1"
         
            name="name"
            value={address.name}
            required
            type="name"
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
          />
        </MDBCol>
      
      </MDBRow>
      <label htmlFor="address">Address</label>
      <MDBInput
        wrapperClass="mb-4"
        id="form6Example3"
    
        type="address"
        required
        value={address.address}
        onChange={(e) => setAddress({ ...address, address: e.target.value })}
        name="address"
      />
      <MDBRow className="mb-4">
        <MDBCol>
        <label htmlFor="city">City</label>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example4"
           
            type="city"
            required
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            name="city"
          />
        </MDBCol>
        <MDBCol>
        <label htmlFor="state">State</label>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example4"
         
            type="state"
            required
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            name="state"
          />
        </MDBCol>
        <MDBCol>
        <label htmlFor="zip">Zip</label>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example4"
          
            type="zip"
            required
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            name="state"
          />
        </MDBCol>
      </MDBRow>


        <label htmlFor="phone">Phone</label>
      <MDBInput
        wrapperClass="mb-4"
        type="tel"
        id="form6Example6"
    
        required
        value={address.phone}
        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
        name="phone"
      />
 
      <button type="submit" className="login-button">
     Continue

          </button>
    </form>
    </div>
    </div>
    </div>
    </MDBContainer>
  
  );
}

export default CheckoutAddress;
