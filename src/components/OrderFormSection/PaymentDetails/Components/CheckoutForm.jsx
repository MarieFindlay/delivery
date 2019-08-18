import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const CREATE_SUBSCRIPTION_URL = '/.netlify/functions/createSubscription';

const STATUS_TYPES = {
  INCOMPLETE: 'INCOMPLETE',
  SUBMITTING: 'SUBMITTING',
  COMPLETE: 'COMPLETE',
}

const ERROR_TYPES = {
  STRIPE_ERROR: 'PAYMENT_ERROR',
  FORM_ERROR: 'FORM_ERROR'
}

const CUSTOMER_ERROR_ACTION = `Please check your details and try again. If you're still having problems, please get in touch on 07793009554.`

const ERROR_MESSAGES = {
  [ERROR_TYPES.STRIPE_ERROR]: `We're sorry, Stripe wasn't able to process your payment. ${CUSTOMER_ERROR_ACTION}`,
  [ERROR_TYPES.FORM_ERROR]: `Something went wrong submitting your card details. ${CUSTOMER_ERROR_ACTION}`
}

function CheckoutForm({ stripe, handlePaymentComplete, subscriptionData, subscriptionMetaData }) {
  const [status, setStatus] = useState(STATUS_TYPES.INCOMPLETE);
  const [error, setError] = useState(null);

  const submit = async event => {
    event.preventDefault();
    
    setStatus(STATUS_TYPES.SUBMITTING);
    
    try {
      const { token } = await stripe.createToken({ name: 'Name' });

      const response = await fetch(CREATE_SUBSCRIPTION_URL, {
        method: 'POST',
        body: JSON.stringify({
          ...subscriptionData,
          metadata: subscriptionMetaData,
          token: token.id,
        }),
      });

      if (response.ok) {
        setStatus(STATUS_TYPES.COMPLETE);
        handlePaymentComplete();
      } else {
        setStatus(STATUS_TYPES.INCOMPLETE);
        setError(response.body.message);
      }
    } catch (err) {
      setStatus(STATUS_TYPES.INCOMPLETE);
      setError(ERROR_TYPES.FORM_ERROR);
    }
  };

  return (
    <form onSubmit={submit}>
      <CardElement />
      <div>
        <button>Back</button>
        <button
          type="submit"
          disabled={status === STATUS_TYPES.SUBMITTING}
        >
          {status === STATUS_TYPES.SUBMITTING ? 'Submitting' : 'Place Order'}
        </button>
      </div>
      {!!error && (
        <div>{ERROR_MESSAGES[error]}</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);