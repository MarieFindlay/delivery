'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async(event) => {
    if (event.httpMethod !== 'GET') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    const { planId } = event.queryStringParameters;

    try {
      const plan = await stripe.plans.retrieve(planId);

      if (!plan.id) {
        return { 
          statusCode: 401,
          body: JSON.stringify({ 
            message: `Sorry, we couldn't find the plan you requested.`
          })
        }
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          plan
        })
      }

    } catch(error) {
      console.log(error);
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Error: ${error}`,
        }),
      }
    }
};