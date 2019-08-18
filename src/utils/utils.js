import { useState } from 'react';
import { PLAN_NAMES, TEST_PLANS, ITEMS } from '../data/itemData';
import axios from 'axios';
//To switch to live plans when launching
const PLANS = TEST_PLANS;
const { 
    HOUSEHOLD_TOILETRIES_DISHWASHER,
    HOUSEHOLD_TOILETRIES,
    HOUSEHOLD_DISHWASHER,
    HOUSEHOLD
} = PLAN_NAMES;

export const humanizeNumber = (number) => {
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
        default: return number + "th";
    }
}

export const getNthDayFromDate = date => {
    const nthDay = humanizeNumber(parseInt(date.toString().slice(8,10),10));
    return nthDay;
}

const GET_ADDRESS_API_KEY = 'gaWz7iI9EUmgHpGp-ku5mQ18850';

export const getAddressesByPostcode = async (postcode) => {
    const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${GET_ADDRESS_API_KEY}`);
    const result = await response.json();
    return result.addresses;
}

// recommended box helpers
export const getPlanFromPlanName = (planName) => {
    const plan = PLANS.find(plan => plan.NAME === planName);
    return plan;
};

export const getItemWithQuantity = (item, numberOfPeople) => {
    const quantity = item.PERSON_QUANTITY_MAP[numberOfPeople];
    const unitLabel = quantity > 1 ? item.PLURAL_UNIT_LABEL : item.SINGLE_UNIT_LABEL;
    return `${quantity} ${unitLabel}`;
}

export const getSelectedPlan = (includeToiletries, hasDishwasher) => {
    let plan;
    if (includeToiletries) {
        if (hasDishwasher) {
            plan = getPlanFromPlanName(HOUSEHOLD_TOILETRIES_DISHWASHER);
        } else {
            plan = getPlanFromPlanName(HOUSEHOLD_TOILETRIES);
        }
    } else {
        if (hasDishwasher) {
            plan = getPlanFromPlanName(HOUSEHOLD_DISHWASHER);
        } else {
            plan = getPlanFromPlanName(HOUSEHOLD);
        }
    }
    return plan;
}

export const getItemsWithQuantities = (plan, numberOfPeople) => {
    const items = plan.INCLUDED_ITEM_IDS.map(itemId => ITEMS.find(item => itemId === item.ID));
    const itemsWithQuantities = items.map(item => getItemWithQuantity(item, numberOfPeople));
    return itemsWithQuantities;
}

export const getRecommendedBox = async (includeToiletries, hasDishwasher, numberOfPeople) => {
    const plan = getSelectedPlan(includeToiletries, hasDishwasher);
    const items = getItemsWithQuantities(plan, numberOfPeople);
    const price = await getPriceFromStripe(plan, numberOfPeople);
    return { plan, items, price };
}

export const getPriceFromStripe = async(plan, numberOfPeople) => {
    const stripePlan = await fetchStripePlan(plan);
    if (!stripePlan.tiers) return null;
    const { tiers: tiersWithMissingLimit } = stripePlan;
    const tiers = attachLimitsToTiers(tiersWithMissingLimit);
    let price = 0;
    for (let person = 0; person <= numberOfPeople; person++) {
        for (const tier of tiers) {
            if (person >= tier.from && person <= tier.up_to) {
                price = price + tier.unit_amount
            }
            continue;
        }
    }
    return price;
}

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
        console.log('BAD', error);
        return null;
    }
};

export const attachLimitsToTiers = tiers => {
    const tiersWithLowerLimits = [];
    let previousTierUpperLimit = 0;
    for (const tier of tiers) {
        const upperLimit = !!tier.up_to ? tier.up_to : Infinity;
        const newTier = {
            ...tier,
            from: previousTierUpperLimit + 1,
            up_to: upperLimit
        }
        previousTierUpperLimit = tier.up_to;
        tiersWithLowerLimits.push(newTier);
    }
    return tiersWithLowerLimits;
}


