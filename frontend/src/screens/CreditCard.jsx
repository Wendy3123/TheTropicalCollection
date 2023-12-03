import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Container } from "react-bootstrap";
import { CurrentUser } from "../contexts/CurrentUser.js";
import { BASE_URL } from "../App";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from "mdb-react-ui-kit";
function CreditCard() {
  const [payment, setPayment] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { currentUser } = useContext(CurrentUser);
  const currentUserId = currentUser?._id;
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      payment,
      paymentAmount: parseFloat(paymentAmount), // Convert to number
    };

    try {
      const response = await fetch(`${BASE_URL}/payment/{id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log("Payment Confirmed");
        setIsSubmitted(true);
      } else {
        console.error("Payment Declined");
      }
    } catch (error) {
      console.error("Error submitting payment", error);
    }

    setPayment("");
    setPaymentAmount("");
  };
  return (
    
    <div className="card-container">
      {!isSubmitted ? (
        // <main className= 'main'>
        //   <h1>Payment Information</h1>
        //   <form onSubmit={handleSubmit}>
        //     <div className="row">
        //       <div className="first-name">
        //         <div className="input-group">
        //           <label htmlFor="firstName" className="first-label">
        //             first Name
        //           </label>
        //           <input
        //             type="text"
        //             className="form-control"
        //             value={address.name}
        //             id=""
        //             placeholder="First Name"
        //             //   onChange={(e) => setpayment(e.target.value)}
        //             required
        //           />
        //         </div>
        //                  </div>
        //       <div className="row">
        //         <div className="">
        //           <label htmlFor="card-number" className="">
        //             Card Number
        //           </label>
        //           <input
        //             type="text"
        //             className="form-control"
        //             id="card-number"
        //             placeholder="1234 5678 9012 4563"
        //           />
        //         </div>
        //       </div>
        //     </div>
        //     <div className="">
        //       <div className="col-sm-6">
        //         <div className="">
        //           <label htmlFor="exp-date" className="">
        //             Expiration Date
        //           </label>
        //           <input
        //             type="text"
        //             className="form-control"
        //             id="exp-Date"
        //             placeholder="MM/YY"
        //           />
        //         </div>
        //       </div>

        //       <div className="">
        //         <div className="">
        //           <label htmlFor="cvv" className="">
        //             CVV
        //           </label>
        //           <input
        //             type="text"
        //             className="form-control"
        //             id="cvv"
        //             placeholder="456"
        //           />
        //         </div>
        //       </div>
        //     </div>

        //     {/* Billing  */}
        //     <div className="">
        //       <label htmlFor="billing" className="">
        //         Billing Address
        //       </label>
        //       <input
        //         type="text"
        //         className="form-control"
        //         id="billing"
        //         placeholder="123 Name St"
        //       />
        //     </div>
        //     <div className="">
        //       <div className="">
        //         <div className="">
        //           <label htmlFor="city" className="">
        //             City
        //           </label>
        //           <input
        //             type="text"
        //             className="form-control"
        //             id="city"
        //             placeholder="City "
        //           />
        //         </div>
        //       </div>
        //       <div className="card-form">
        //         <div className="">
        //           <label htmlFor="zip" className="">
        //             Zip Code
        //           </label>
        //           <input
        //             type="text"
        //             className=""
        //             id="zip"
        //             placeholder="11111"
        //           />
        //         </div>
        //       </div>
        //     </div>
        //     <div className="card-form">
        //       <Container>
        //         <Button type="submit" className="submit-button" to="/">
        //         <Link
        //           to={`/invoice`}
        //           style={{ textDecoration: "none" }}
        //         >
        //             Submit Payment
        //         </Link>
               
        //         </Button>
        //       </Container>
        //     </div>
        //   </form>
        // </main>
        <MDBContainer fluid className='mt-5 d-flex justify-content-center' >
        <div className='col-lg-6 mb-5 mb-lg-0'>
        <div className='card'>
          <div className='card-body py-5 px-md-5 checkout'>
          <h1>Credit Card</h1>

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
 <MDBCol>
        <label htmlFor="credit">Credit Card Number</label>
          <MDBInput
            wrapperClass="mb-4"
            id="form6Example4"
                     type="CC"
            required
            default="123-456-789"
            value="123-456-789"
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            name="cc"
          />
        </MDBCol>
     <Link to ="/invoice">
      <button type="submit" className="login-button">
     Continue
          </button>
          </Link>

      </form>
          </div>
    </div>
    </div>
    </MDBContainer>
      ) : (
        <div className="confirmation-message">Payment Confirmed</div>
      )}
    </div>
  );
}

export default CreditCard;
