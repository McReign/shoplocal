import {
  GET_CURRENT_PRODUCT_START,
  GET_CURRENT_PRODUCT_SUCCESS,
  GET_CURRENT_PRODUCT_FAILED,
  GET_CURRENT_RELATED_PRODUCTS_START,
  GET_CURRENT_RELATED_PRODUCTS_SUCCESS,
  GET_CURRENT_RELATED_PRODUCTS_FAILED
} from "../constants/itemDetailPage";

const initialState = {
  currentProduct: {},
  relatedProducts: [],
  pending: false,
  error: false
};

function itemDetailPageReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CURRENT_PRODUCT_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_PRODUCT_SUCCESS:
      return Object.assign({}, state, { currentProduct: action.payload, pending: false });
    case GET_CURRENT_PRODUCT_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CURRENT_RELATED_PRODUCTS_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_RELATED_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { relatedProducts: action.payload, pending: false });
    case GET_CURRENT_RELATED_PRODUCTS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    default:
      return state;
  }
}

export default itemDetailPageReducer;