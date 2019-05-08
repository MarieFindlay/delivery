/* Action Types */

export const actionTypes = {
    GO_TO_NEXT_PAGE: 'GO_TO_NEXT_PAGE',
    GO_TO_PREV_PAGE: 'GO_TO_PREV_PAGE',
    ADD_ITEMS_TO_BASKET: 'ADD_ITEMS_TO_BASKET',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
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

