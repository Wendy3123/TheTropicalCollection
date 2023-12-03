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
        <main>
          <h1>Payment Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="first-last">
                <div className="input-group">
                  <label htmlFor="firstName" className="form-label">
                    first Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={address.name}
                    id=""
                    placeholder="First Name"
                    //   onChange={(e) => setpayment(e.target.value)}
                    required
                  />
                </div>
                {/* <div className="input-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    xs
                    id="lastName"
                    placeholder="last name"
                    //   onChange={(e) => setpayment(e.target.value)}
                    required
                  />
                </div> */}
              </div>
              <div className="row">
                <div className="">
                  <label htmlFor="card-number" className="">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="card-number"
                    placeholder="1234 5678 9012 4563"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="col-sm-6">
                <div className="">
                  <label htmlFor="exp-date" className="">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exp-Date"
                    placeholder="MM/YY"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <label htmlFor="cvv" className="">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    placeholder="456"
                  />
                </div>
              </div>
            </div>

            {/* Billing  */}
            <div className="">
              <label htmlFor="billing" className="">
                Billing Address
              </label>
              <input
                type="text"
                className="form-control"
                id="billing"
                placeholder="123 Name St"
              />
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <label htmlFor="city" className="">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City "
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <label htmlFor="zip" className="">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className=""
                    id="zip"
                    placeholder="11111"
                  />
                </div>
              </div>
            </div>
            <div className="submit-container">
              <Container>
                <Button type="submit" className="submit-button" to="/">
                <Link
                  to={`/invoice`}
                  style={{ textDecoration: "none" }}
                >
                    Submit Payment
                </Link>
               
                </Button>
              </Container>
            </div>
          </form>
        </main>
      ) : (
        <div className="confirmation-message">Payment Confirmed</div>
      )}
    </div>
  );
}

export default CreditCard;
