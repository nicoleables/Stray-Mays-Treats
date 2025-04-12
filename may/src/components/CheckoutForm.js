import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      console.log(paymentMethod);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe} className="btn btn-primary mt-3">
          Pay
        </button>
      </form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {success && <div className="alert alert-success mt-3">Payment successful!</div>}
    </div>
  );
};

export default CheckoutForm;
