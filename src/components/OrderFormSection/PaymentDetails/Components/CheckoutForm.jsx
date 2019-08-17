import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import moment from 'moment';

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

function CheckoutForm({ stripe, handlePaymentComplete }) {
  const [status, setStatus] = useState(STATUS_TYPES.INCOMPLETE);
  const [error, setError] = useState(null);

  const submit = async event => {
    event.preventDefault();
    
    setStatus(STATUS_TYPES.SUBMITTING);
    
    try {
      let { token } = await stripe.createToken({ name: 'Name' });

      let response = await fetch('/.netlify/functions/createSubscription', {
        method: 'POST',
        body: JSON.stringify({
          name:'Marie Findlay',
          email:'mariealicefindlay@gmail.com',
          plan:'plan_FbxLVfmE69x1Pk',
          quantity:1,
          token: token.id,
          billing_cycle_anchor: moment().unix(),
        }),
      });

      if (response.ok) {
        setStatus(STATUS_TYPES.COMPLETE);
        handlePaymentComplete();
      } else {
        setStatus(STATUS_TYPES.INCOMPLETE);
        setError(ERROR_TYPES.STRIPE_ERROR);
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