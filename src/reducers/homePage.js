import {
  GET_PRODUCTS_BY_CATEGORY_START,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  GET_PRODUCTS_BY_CATEGORY_FAILED,
  GET_BEST_DEALS_FOR_WEEK_START,
  GET_BEST_DEALS_FOR_WEEK_SUCCESS,
  GET_BEST_DEALS_FOR_WEEK_FAILED,
  GET_EXPIRING_SOON_DEALS_START,
  GET_EXPIRING_SOON_DEALS_SUCCESS,
  GET_EXPIRING_SOON_DEALS_FAILED,
  GET_NEW_DEALS_FOR_WEEK_START,
  GET_NEW_DEALS_FOR_WEEK_SUCCESS,
  GET_NEW_DEALS_FOR_WEEK_FAILED,
  GET_DEALS_ON_SALE_START,
  GET_DEALS_ON_SALE_SUCCESS,
  GET_DEALS_ON_SALE_FAILED,
  SET_PAGE_COUNT
} from "../constants/homePage";

const initialState = {
  bestDeals: [],
  productsByCategory: [],
  expiringSoonProducts: [],
  newProducts: [],
  onSaleProducts: [],
  pageCount: 0,
  pending: false,
  error: false
};

function homePageReducer(state = initialState, action) {
  switch(action.type) {
    case GET_DEALS_ON_SALE_START:
      return Object.assign({}, state, { pending: true });
    case GET_DEALS_ON_SALE_SUCCESS:
      return Object.assign({}, state, { onSaleProducts: state.onSaleProducts.concat(action.payload), pending: false });
    case GET_DEALS_ON_SALE_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_NEW_DEALS_FOR_WEEK_START:
      return Object.assign({}, state, { pending: true });
    case GET_NEW_DEALS_FOR_WEEK_SUCCESS:
      return Object.assign({}, state, { newProducts: state.newProducts.concat(action.payload), pending: false });
    case GET_NEW_DEALS_FOR_WEEK_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_EXPIRING_SOON_DEALS_START:
      return Object.assign({}, state, { pending: true });
    case GET_EXPIRING_SOON_DEALS_SUCCESS:
      return Object.assign({}, state, { expiringSoonProducts: state.expiringSoonProducts.concat(action.payload), pending: false });
    case GET_EXPIRING_SOON_DEALS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_BEST_DEALS_FOR_WEEK_START:
      return Object.assign({}, state, { pending: true });
    case GET_BEST_DEALS_FOR_WEEK_SUCCESS:
      return Object.assign({}, state, { bestDeals: state.bestDeals.concat(action.payload), pending: false });
    case GET_BEST_DEALS_FOR_WEEK_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_PRODUCTS_BY_CATEGORY_START:
      return Object.assign({}, state, { pending: true });
    case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return Object.assign({}, state, { productsByCategory: state.productsByCategory.concat(action.payload), pending: false });
    case GET_PRODUCTS_BY_CATEGORY_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case SET_PAGE_COUNT:
      return Object.assign({}, state, { pageCount: action.payload });
    default:
      return state;
  }
}

export default homePageReducer;