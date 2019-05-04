import { combineReducers } from "redux";

import { actionTypes } from "../actions/actions";

const currentPage = (state = 0, action) => {
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
});

export default rootReducer;