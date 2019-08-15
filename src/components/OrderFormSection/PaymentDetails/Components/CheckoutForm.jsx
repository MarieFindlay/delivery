import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ stripe, handlePaymentComplete }) {
  const [status, setStatus] = useState('default');

  const submit = async event => {
    event.preventDefault();
    
    setStatus('submitting');
    
    try {
      let { token } = await stripe.createToken({ name: 'Name' });

      let response = await fetch('/.netlify/functions/createCharge', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          token: token.id,
        }),
      });

      console.log('response: ', response);

      if (response.ok) {
        setStatus('complete');
        handlePaymentComplete();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="CheckoutForm" onSubmit={submit}>
      <CardElement />
      <div>
        <button>Back</button>
        <button
          className="CheckoutForm-button"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting' : 'Place Order'}
        </button>
      </div>
      {status === 'error' && (
        <div className="CheckoutForm-error">Something went wrong.</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);