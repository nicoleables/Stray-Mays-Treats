import React from 'react';
import StripeContainer from './StripeContainer';
import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-page">
    <div className="container mt-5">
      <h2>Checkout</h2>
      <StripeContainer />
    </div>
    </div>
  );
};

export default Checkout;
