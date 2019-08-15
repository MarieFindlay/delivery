import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ stripe }) {
  const [status, setStatus] = useState('default');

  const submit = async e => {
    console.log('inside function');
    e.preventDefault();

    setStatus('submitting');

    try {
      let { token } = await stripe.createToken({ name: 'Name' });
      console.log(token);

      let response = await fetch('/.netlify/functions/handler', {
        method: 'POST',
        body: JSON.stringify({
          amount: 100,
          token: token.id,
        }),
      });

      console.log('response: ', response);

      if (response.ok) {
        setStatus('complete');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'complete') {
    return <div className="CheckoutForm-complete">Payment successful!</div>;
  }

  return (
    <form className="CheckoutForm" onSubmit={submit}>
      <h4>Would you like to complete the purchase?</h4>
      <CardElement />
      <button
        className="CheckoutForm-button"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting' : 'Submit Order'}
      </button>
      {status === 'error' && (
        <div className="CheckoutForm-error">Something went wrong.</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);