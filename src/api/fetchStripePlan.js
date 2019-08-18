import axios from 'axios';

export const fetchStripePlan = async (plan) => {
    try {
        const response = await axios.get('/.netlify/functions/fetchPlan', {
            params: {
              planId: plan.STRIPE_PLAN_ID,
            }
          })
        if (response.data.plan) {
          return response.data.plan;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        return null;
    }
};