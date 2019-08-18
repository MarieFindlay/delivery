export const STATUS_TYPES = {
    INCOMPLETE: 'INCOMPLETE',
    SUBMITTING: 'SUBMITTING',
    COMPLETE: 'COMPLETE',
  }
  
export const ERROR_TYPES = {
    STRIPE_ERROR: 'PAYMENT_ERROR',
    FORM_ERROR: 'FORM_ERROR'
}
  
export const CUSTOMER_ERROR_ACTION = `Please check your details and try again. If you're still having problems, please get in touch on 07793009554.`
  
export const ERROR_MESSAGES = {
    [ERROR_TYPES.STRIPE_ERROR]: `We're sorry, Stripe wasn't able to process your payment. ${CUSTOMER_ERROR_ACTION}`,
    [ERROR_TYPES.FORM_ERROR]: `Something went wrong submitting your card details. ${CUSTOMER_ERROR_ACTION}`
  }