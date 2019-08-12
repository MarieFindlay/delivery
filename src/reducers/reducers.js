import { combineReducers } from "redux";

import { actionTypes } from "../actions/actions";
import { REPEAT_SCHEDULES } from './../data/dummyData';

const initialState = {
  currentPage: 0,
  numberOfPeople: 1,
  includeToiletries: true,
  hasDishwasher: true,
  firstDeliveryDate: null,
  repeatDeliverySchedule: REPEAT_SCHEDULES.SAME_DAY,
  customScheduleDetails: '',
  postcode: '',
  streetAddress: '',
  emailAddress: '',
  phoneNumber: null,
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

const numberOfPeople = (state = initialState.numberOfPeople, action) => {
  switch(action.type){
    case actionTypes.UPDATE_NUMBER_OF_PEOPLE:
      return action.numberOfPeople;
    default:
      return state;
  }
}

const includeToiletries = (state = initialState.includeToiletries, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INCLUDE_TOILETRIES:
      return action.trueOrFalse;
    default:
      return state;
  }
}

const hasDishwasher = (state = initialState.hasDishwasher, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HAS_DISHWASHER:
      return action.trueOrFalse;
    default:
      return state;
  }
}

const firstDeliveryDate = (state = initialState.firstDeliveryDate, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_SCHEDULE:
      return action.firstDeliveryDate;
    default:
      return state;
  }
}

const repeatDeliverySchedule = (state = initialState.repeatDeliverySchedule, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_SCHEDULE:
      return action.repeatDeliverySchedule;
    default:
      return state;
  }
}

const customScheduleDetails = (state = initialState.customScheduleDetails, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_SCHEDULE:
      if (action.repeatDeliverySchedule === REPEAT_SCHEDULES.SAME_DAY) { return '' };
      return action.customScheduleDetails;
    default:
      return state;
  }
}

const postcode = (state = initialState.postcode, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_ADDRESS:
      return action.postcode;
    default:
      return state;
  }
}

const streetAddress = (state = initialState.streetAddress, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_ADDRESS:
      return action.streetAddress;
    default:
      return state;
  }
}

const emailAddress = (state = initialState.emailAddress, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_CONTACT_DETAILS:
      return action.emailAddress;
    default:
      return state;
  }
}

const phoneNumber = (state = initialState.phoneNumber, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_CONTACT_DETAILS:
      return action.phoneNumber;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentPage,
  numberOfPeople,
  includeToiletries,
  hasDishwasher,
  firstDeliveryDate,
  repeatDeliverySchedule,
  customScheduleDetails,
  postcode,
  streetAddress,
  emailAddress,
  phoneNumber
});

export default rootReducer;