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
  MDBContainer,
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
        <MDBContainer fluid className="mt-5 d-flex justify-content-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5 checkout">
                <h1>Credit Card</h1>

                <form onSubmit={handleSubmit}>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label htmlFor="name">{address.name}</label>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label htmlFor="name">Address:</label>
                    </MDBCol>
                  </MDBRow>

                  <label htmlFor="address">{address.address}</label>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label htmlFor="city">{address.city}</label>
                    </MDBCol>
                    <MDBCol>
                      <label htmlFor="state">{address.state}</label>
                    </MDBCol>
                    <MDBCol>
                      <label htmlFor="zip">{address.zip}</label>
                    </MDBCol>
                  </MDBRow>

                  <label htmlFor="phone">Phone :{address.phone}</label>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label htmlFor="credit">Credit Card Number</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="form6Example4"
                        type="CC"
                        required
                        default="123-456-789"
                        value="123-456-789"
                        onChange={(e) =>
                          setAddress({ ...address, state: e.target.value })
                        }
                        name="cc"
                      />
                    </MDBCol>

                    <MDBCol>
                      <label htmlFor="credit">Expiration date</label>
                      <MDBInput
                        wrapperClass="mb-4"
                        id="form6Example4"
                        type="CC"
                        required
                        default="11/29"
                        value="11/29"
                        onChange={(e) =>
                          setAddress({ ...address, state: e.target.value })
                        }
                        name="cc"
                      />
                    </MDBCol>
                  </MDBRow>
                  <Link to="/invoice">
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
