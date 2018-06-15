import {
  GET_RETAILER_SPECIAL_BUY_START,
  GET_RETAILER_SPECIAL_BUY_SUCCESS,
  GET_RETAILER_SPECIAL_BUY_FAILED,
  GET_RETAILER_WEEKLY_SAVINGS_START,
  GET_RETAILER_WEEKLY_SAVINGS_SUCCESS,
  GET_RETAILER_WEEKLY_SAVINGS_FAILED,
  GET_CURRENT_RETAILER_START,
  GET_CURRENT_RETAILER_SUCCESS,
  GET_CURRENT_RETAILER_FAILED,
  GET_CURRENT_RETAILER_PROMOTIONS_START,
  GET_CURRENT_RETAILER_PROMOTIONS_SUCCESS,
  GET_CURRENT_RETAILER_PROMOTIONS_FAILED,
  GET_CURRENT_RETAILER_CATEGORIES_START,
  GET_CURRENT_RETAILER_CATEGORIES_SUCCESS,
  GET_CURRENT_RETAILER_CATEGORIES_FAILED
} from "../constants/retailerPage";

const initialState = {
  retailerData: {},
  promotions: [],
  weeklySavings: [],
  categories: [],
  specialBuy: {},
  pending: false,
  error: false
};

function retailerPageReducer(state = initialState, action) {
  switch(action.type) {
    case GET_RETAILER_SPECIAL_BUY_START:
      return Object.assign({}, state, { pending: true });
    case GET_RETAILER_SPECIAL_BUY_SUCCESS:
      return Object.assign({}, state, { specialBuy: action.payload, pending: false });
    case GET_RETAILER_SPECIAL_BUY_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_RETAILER_WEEKLY_SAVINGS_START:
      return Object.assign({}, state, { pending: true });
    case GET_RETAILER_WEEKLY_SAVINGS_SUCCESS:
      return Object.assign({}, state, { weeklySavings: state.weeklySavings.concat(action.payload), pending: false });
    case GET_RETAILER_WEEKLY_SAVINGS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CURRENT_RETAILER_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_RETAILER_SUCCESS:
      return Object.assign({}, state, { retailerData: action.payload, pending: false });
    case GET_CURRENT_RETAILER_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CURRENT_RETAILER_PROMOTIONS_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_RETAILER_PROMOTIONS_SUCCESS:
      return Object.assign({}, state, { promotions: action.payload, pending: false });
    case GET_CURRENT_RETAILER_PROMOTIONS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CURRENT_RETAILER_CATEGORIES_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_RETAILER_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { categories: action.payload, pending: false });
    case GET_CURRENT_RETAILER_CATEGORIES_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    default:
      return state;
  }
}

export default retailerPageReducer;