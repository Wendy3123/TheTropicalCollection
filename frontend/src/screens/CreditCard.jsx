import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function CreditCard() {
  const [payment, setPayment] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      payment,
      paymentAmount: parseFloat(paymentAmount), // Convert to number
    };

    try {
      const response = await fetch(`http://localhost:5001/payment/{id}`, {
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  id=""
                  placeholder=""
                  //   onChange={(e) => setpayment(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  id="lastName"
                  placeholder=""
                  //   onChange={(e) => setpayment(e.target.value)}
                  required
                />
              </div>
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
                <input type="text" className="" id="zip" placeholder="11111" />
              </div>
            </div>
          </div>
          <div className="card-container">
            <Container>
              <Button type="submit" className="submit-button" to="/">
                Submit Payment
              </Button>
            </Container>
          </div>
        </form>
      ) : (
        <div className="confirmation-message">Payment Confirmed</div>
      )}
    </div>
  );
}

export default CreditCard;
