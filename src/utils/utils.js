import { PLAN_NAMES, TEST_PLANS, ITEMS, TEST_PLAN_PRICE_TIERS } from '../data/itemData';
//To switch to live plans when launching
const PLANS = TEST_PLANS;
const PLAN_PRICE_TIERS = TEST_PLAN_PRICE_TIERS;
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

export const getPrice = (plan, numberOfPeople) => {
    const priceTiersForPlan = PLAN_PRICE_TIERS.find(priceTiersSet => priceTiersSet.PLAN_ID === plan.ID);
    return priceTiersForPlan[numberOfPeople];
}

export const getRecommendedBox = ({ includeToiletries, hasDishwasher, numberOfPeople }) => {
    const plan = getSelectedPlan(includeToiletries, hasDishwasher);
    const items = getItemsWithQuantities(plan, numberOfPeople);
    const price = getPrice(plan, numberOfPeople);
    return { plan, items, price };
}

