import { PLAN_NAMES, TEST_PLANS, ITEMS } from '../consts/itemData';
import { fetchStripePlan } from './../api/fetchStripePlan';

//TO DO: switch below to live plans when launching
const PLANS = TEST_PLANS;
const { HOUSEHOLD_TOILETRIES_DISHWASHER, HOUSEHOLD_TOILETRIES, HOUSEHOLD_DISHWASHER, HOUSEHOLD} = PLAN_NAMES;
//TO DO: switch above to live plans when launching


export const getRecommendedBox = async (includeToiletries, hasDishwasher, numberOfPeople) => {
    const plan = getSelectedPlan(includeToiletries, hasDishwasher);
    const items = getItemsWithQuantities(plan, numberOfPeople);
    const price = await getPriceFromStripePlan(plan, numberOfPeople);
    return { plan, items, price };
}


export const getSelectedPlan = (includeToiletries, hasDishwasher) => {
    let planName;
    if (includeToiletries) {
        planName = hasDishwasher ? HOUSEHOLD_TOILETRIES_DISHWASHER : HOUSEHOLD_TOILETRIES;
    } else {
        planName = hasDishwasher ? HOUSEHOLD_DISHWASHER : HOUSEHOLD;
    }
    return PLANS.find(plan => plan.NAME === planName);
}


export const getItemsWithQuantities = (plan, numberOfPeople) => {
    const items = plan.INCLUDED_ITEM_IDS.map(itemId => ITEMS.find(item => itemId === item.ID));
    const itemsWithQuantities = items.map(item => getItemWithQuantity(item, numberOfPeople));
    return itemsWithQuantities;
}


export const getItemWithQuantity = (item, numberOfPeople) => {
    const quantity = item.PERSON_QUANTITY_MAP[numberOfPeople];
    const unitLabel = quantity > 1 ? item.PLURAL_UNIT_LABEL : item.SINGLE_UNIT_LABEL;
    return `${quantity} ${unitLabel}`;
}


export const getPriceFromStripePlan = async(plan, numberOfPeople) => {
    
    const stripePlan = await fetchStripePlan(plan);
    if (!stripePlan || !stripePlan.tiers) return null;
    const pricePlanTiers = addLimitsToPricePlanTiers(stripePlan.tiers);
    
    let price = 0;
    for (let person = 0; person <= numberOfPeople; person++) {
        for (const tier of pricePlanTiers) {
            if (person >= tier.from && person <= tier.up_to) {
                price = price + tier.unit_amount
            }
            continue;
        }
    }
    return price;
}


export const addLimitsToPricePlanTiers = tiers => {
    const tiersWithLimits = [];
    let previousTierUpperLimit = 0;
    for (const tier of tiers) {
        const upperLimit = !!tier.up_to ? tier.up_to : Infinity;
        const newTier = {
            ...tier,
            from: previousTierUpperLimit + 1,
            up_to: upperLimit
        }
        previousTierUpperLimit = tier.up_to;
        tiersWithLimits.push(newTier);
    }
    return tiersWithLimits;
}


