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
    <div className="">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div class="payment-form">
            <input className="type" type="radio" id="radio1" value="option1" />
            <label className="pay-type" for="radio1">
              Personal
            </label>
          </div>
          <div className="payment-form">
            <input
              className="form-check-input"
              type="radio"
              id="radio2"
              value="option2"
            />
            <label className="pay-type" for="radio2">
              Business
            </label>
          </div>
          <div>
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              value=""
              id="payer"
              placeholder="Name"
            />
          </div>
        </form>
      ) : (
        <div className="confirmation-message">Order confirmed.</div>
      )}
    </div>
  );
}

export default CreditCard;
