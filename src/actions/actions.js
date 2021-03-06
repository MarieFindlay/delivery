/* Action Types */

export const actionTypes = {
    GO_TO_NEXT_PAGE: 'GO_TO_NEXT_PAGE',
    GO_TO_PREV_PAGE: 'GO_TO_PREV_PAGE',
    ADD_ITEMS_TO_BASKET: 'ADD_ITEMS_TO_BASKET',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    UPDATE_QUANTITIES: 'UPDATE_QUANTITIES',
    UPDATE_QUANTITIES_AND_SCHEDULE: 'UPDATE_QUANTITIES_AND_SCHEDULE',
    UPDATE_NUMBER_OF_PEOPLE: 'INCREASE_NUMBER_OF_PEOPLE',
    UPDATE_INCLUDE_TOILETRIES: 'UPDATE_INCLUDE_TOILETRIES',
    UPDATE_HAS_DISHWASHER: 'UPDATE_HAS_DISHWASHER',
    UPDATE_SCHEDULE: 'UPDATE_SCHEDULE',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS',
    UPDATE_CONTACT_DETAILS: 'UPDATE_CONTACT_DETAILS',
  };
  
/* Action Creators */
  
export const nextPage = () => {
  return {
    type: actionTypes.GO_TO_NEXT_PAGE
  };
};

export const prevPage = () => {
  return {
    type: actionTypes.GO_TO_PREV_PAGE
  };
};

export const updateNumberOfPeople = (numberOfPeople) => {
  return {
    type: actionTypes.UPDATE_NUMBER_OF_PEOPLE,
    numberOfPeople,
  }
}

export const updateIncludeToiletries = (trueOrFalse) => {
  return {
    type: actionTypes.UPDATE_INCLUDE_TOILETRIES,
    trueOrFalse
  }
}

export const updateHasDishwasher = (trueOrFalse) => {
  return {
    type: actionTypes.UPDATE_HAS_DISHWASHER,
    trueOrFalse
  }
}

export const updateSchedule = (firstDeliveryDate, repeatDeliverySchedule, customScheduleDetails) => {
  return {
    type: actionTypes.UPDATE_SCHEDULE,
    firstDeliveryDate,
    repeatDeliverySchedule,
    customScheduleDetails,
  }
}

export const updateAddress = (postcode, streetAddress) => {
  return {
    type: actionTypes.UPDATE_ADDRESS,
    postcode,
    streetAddress,
  }
}

export const updateContactDetails = (emailAddress, phoneNumber) => {
  return {
    type: actionTypes.UPDATE_CONTACT_DETAILS,
    emailAddress,
    phoneNumber,
  }
}

