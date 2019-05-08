import { combineReducers } from "redux";

import { actionTypes } from "../actions/actions";

const initialState = {
  currentPage: 0,
  basket: {
    itemQuantitiesById: {},
  }
}

const basket = (state = initialState.basket, action) => {
  switch (action.type){
    case actionTypes.ADD_ITEMS_TO_BASKET:
      let newObj = state.itemQuantitiesById;
      action.itemIds.forEach(itemId => {
        newObj[itemId] = 1
      })
      return {
        itemQuantitiesById: newObj,
      }
    case actionTypes.INCREASE_QUANTITY:
      return {
        itemQuantitiesById: {
          ...state.itemQuantitiesById,
        [action.itemId]: state.itemQuantitiesById[action.itemId] + 1
        },
      }
    case actionTypes.DECREASE_QUANTITY:
      return {
        itemQuantitiesById: {
          ...state.itemQuantitiesById,
        [action.itemId]: state.itemQuantitiesById[action.itemId] - 1
        },
      }
    default:
      return state;
  }
}

const currentPage = (state = initialState.currentPage, action) => {
  switch (action.type) {
    case actionTypes.GO_TO_NEXT_PAGE:
      return state + 1;
    case actionTypes.GO_TO_PREV_PAGE:
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentPage,
  basket
});

export default rootReducer;