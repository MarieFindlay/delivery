import { getSelectedPlan } from './utils';

export const getSubscriptionData = (state) => {
    console.log(state);
    const {
        customerName,
        emailAddress,
        includeToiletries,
        hasDishwasher,
        numberOfPeople
    } = state;
    const plan = getSelectedPlan(includeToiletries, hasDishwasher);
    return {
        name: customerName,
        email: emailAddress,
        plan: plan.STRIPE_PLAN_ID,
        quantity: numberOfPeople
    }
}

export const getSubscriptionMetaData = (state) => {
    const {
        streetAddress,
        postcode,
        phoneNumber,
        firstDeliveryDate,
        repeatDeliverySchedule,
        customScheduleDetails,
    } = state;
    return {
        streetAddress,
        postcode,
        phoneNumber,
        firstDeliveryDate,
        repeatDeliverySchedule,
        customScheduleDetails,
    }
}