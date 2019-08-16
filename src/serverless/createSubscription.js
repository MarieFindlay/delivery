'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async(event) => {
    // // Only allow POST
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    const data = JSON.parse(event.body);

    // TO DO - add in proper error handling
  
    if (!data.token || parseInt(data.amount) < 1) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Some required fields were not supplied.',
        })
      }
    }

    try {

      const customer = await stripe.customers.create({
        name: 'Marie Findlay',
        email: 'marie.findlay@gmail.com',
        source: data.token
      });

      if (!customer.id) {
        return { 
          statusCode: 400,
          body: JSON.stringify({ 
            message: `Sorry, we couldn't create you as a customer with those card details.`
          })
        }
      }

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan:'plan_FbxLVfmE69x1Pk', quantity: 1}],
        collection_method: 'charge_automatically',
        expand: ['latest_invoice.payment_intent'],
      })

      if (!subscription.id) {
        return { 
          statusCode: 400,
          body: JSON.stringify({ 
            message: `Sorry, we couldn't create your subscription right now. We haven't taken payment.`
          })
        }
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          subscription
        })
      }

    } catch(error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${error}`,
        }),
      }
    }
};
