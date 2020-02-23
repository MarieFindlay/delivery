
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async(event) => {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    const data = JSON.parse(event.body);

    // TO DO - add in proper error handling all the way through
    if (!data.token || !data.name || !data.email || !data.plan || !data.quantity || !data.metadata) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: 'Some required fields were not supplied.',
        })
      }
    }

    const { name, email, token, plan, quantity, metadata} = data;

    try {
      const customer = await stripe.customers.create({
        name,
        email,
        source: token
      });

      if (!customer.id) {
        return { 
          statusCode: 401,
          body: JSON.stringify({ 
            message: `Sorry, we couldn't create you as a customer with those card details.`
          })
        }
      }

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{plan, quantity}],
        collection_method: 'charge_automatically',
        metadata,
        expand: ['latest_invoice.payment_intent'],
      })

      if (!subscription.id) {
        return { 
          statusCode: 401,
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
