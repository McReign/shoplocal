import {
  SEARCH_PRODUCTS_START,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILED,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_RETAILERS_START,
  GET_RETAILERS_SUCCESS,
  GET_RETAILERS_FAILED
} from "../constants/header";

const initialState = {
  searchProducts: [],
  categories: [],
  retailers: [],
  pending: false,
  error: false
};

function headerReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_PRODUCTS_START:
      return Object.assign({}, state, { pending: true });
    case SEARCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { searchProducts: action.payload, pending: false });
    case SEARCH_PRODUCTS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CATEGORIES_START:
      return Object.assign({}, state, { pending: true });
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { categories: action.payload, pending: false });
    case GET_CATEGORIES_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_RETAILERS_START:
      return Object.assign({}, state, { pending: true });
    case GET_RETAILERS_SUCCESS:
      return Object.assign({}, state, { retailers: action.payload, pending: false });
    case GET_RETAILERS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    default:
      return state;
  }
}

export default headerReducer;