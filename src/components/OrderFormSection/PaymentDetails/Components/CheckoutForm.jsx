import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { STATUS_TYPES, ERROR_TYPES, ERROR_MESSAGES } from '../../../../consts/checkoutConsts';
import GLOBALS from '../../../../globals';
import { SPayButton, SButtonContainer } from './styled';

const CheckoutForm = ({ stripe, handlePaymentComplete, goToPrevPage, subscriptionData, subscriptionMetaData }) => {
  const [status, setStatus] = useState(STATUS_TYPES.INCOMPLETE);
  const [error, setError] = useState(null);

  const submit = async event => {
    event.preventDefault();
    
    setStatus(STATUS_TYPES.SUBMITTING);
    
    try {
      const { token } = await stripe.createToken();

      const response = await fetch(GLOBALS.API_URLS.CREATE_SUBSCRIPTION, {
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
      <SButtonContainer>
        <SPayButton onClick={goToPrevPage}>back</SPayButton>
        <SPayButton
          type="submit"
          disabled={status === STATUS_TYPES.SUBMITTING}
        >
          {status === STATUS_TYPES.SUBMITTING ? 'submitting' : 'place order'}
        </SPayButton>
      </SButtonContainer>
      {!!error && (
        <div>{ERROR_MESSAGES[error]}</div>
      )}
    </form>
  );
}

export default injectStripe(CheckoutForm);