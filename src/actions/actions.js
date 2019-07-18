/* Action Types */

export const actionTypes = {
    GO_TO_NEXT_PAGE: 'GO_TO_NEXT_PAGE',
    GO_TO_PREV_PAGE: 'GO_TO_PREV_PAGE',
    ADD_ITEMS_TO_BASKET: 'ADD_ITEMS_TO_BASKET',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    UPDATE_QUANTITIES: 'UPDATE_QUANTITIES',
    UPDATE_QUANTITIES_AND_SCHEDULE: 'UPDATE_QUANTITIES_AND_SCHEDULE',
    UPDATE_SCHEDULE: 'UPDATE_SCHEDULE',
    UPDATE_ADDRESS: 'UPDATE_ADDRESS'
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

export const addItemsToBasket = itemIds => {
  return {
    type: actionTypes.ADD_ITEMS_TO_BASKET,
    itemIds
  };
};

export const updateQuantitiesAndSchedule = (itemQuantitiesById, regularity) => {
  return {
    type: actionTypes.UPDATE_QUANTITIES_AND_SCHEDULE,
    itemQuantitiesById,
    regularity
  }
}

export const updateSchedule = (firstDeliveryDate, repeatDeliverySchedule) => {
  return {
    type: actionTypes.UPDATE_SCHEDULE,
    firstDeliveryDate,
    repeatDeliverySchedule
  }
}

export const updateAddress = (address, postcode) => {
  return {
    type: actionTypes.UPDATE_ADDRESS,
    address,
    postcode
  }
}




//Not needed - to remove

export const increaseQuantity = itemId => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    itemId
  };
};

export const decreaseQuantity = itemId => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    itemId
  };
};

export const updateQuantities = quantitiesById => {
  return {
    type: actionTypes.UPDATE_QUANTITIES,
    quantitiesById
  }
}

