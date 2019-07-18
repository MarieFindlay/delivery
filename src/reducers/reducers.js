import { combineReducers } from "redux";

import { actionTypes } from "../actions/actions";

const initialState = {
  currentPage: 0,
  basket: {
    itemQuantitiesById: {},
    regularity: 1, // comes every 1 month. Options: 1, 2, 3.
    firstDeliveryDate: null,
    repeatDeliverySchedule: null,
    address: null,
    postcode: null,
  },
}

const basket = (state = initialState.basket, action) => {
  switch (action.type){
    case actionTypes.ADD_ITEMS_TO_BASKET:
      let newObj = state.itemQuantitiesById;
      action.itemIds.forEach(itemId => {
        newObj[itemId] = 1
      })
      return {
        ...state,
        itemQuantitiesById: newObj,
      }
      case actionTypes.UPDATE_QUANTITIES_AND_SCHEDULE:
        return {
          ...state,
          itemQuantitiesById: action.itemQuantitiesById,
          regularity: action.regularity
        }
      case actionTypes.UPDATE_SCHEDULE:
        return {
          ...state,
          firstDeliveryDate: action.firstDeliveryDate,
          repeatDeliverySchedule: action.repeatDeliverySchedule
        }
      case actionTypes.UPDATE_ADDRESS:
        return {
          ...state,
          address: action.address,
          postcode: action.postcode,
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