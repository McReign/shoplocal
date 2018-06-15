import {
  FILTER_PRODUCTS_START,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAILED,
  GET_CATEGORY_START,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_PRODUCTS_BY_NAME_START,
  GET_PRODUCTS_BY_NAME_SUCCESS,
  GET_PRODUCTS_BY_NAME_FAILED,
  SET_FILTERS
} from "../constants/categoriesPage";

const initialState = {
  category: null,
  products: [],
  filters: {
    retailers: [],
    sortType: 0
  },
  pending: false,
  error: false
};

function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case FILTER_PRODUCTS_START:
      return Object.assign({}, state, { pending: true, filters: action.payload.filters });
    case FILTER_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.payload, pending: false });
    case FILTER_PRODUCTS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_CATEGORY_START:
      return Object.assign({}, state, { pending: true});
    case GET_CATEGORY_SUCCESS:
      return Object.assign({}, state, { products: state.category !== action.payload.category ?
        action.payload.products
        : state.products.concat(action.payload.products),
        pending: false, category: action.payload.category });
    case GET_CATEGORY_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_PRODUCTS_BY_NAME_START:
      return Object.assign({}, state, { pending: true });
    case GET_PRODUCTS_BY_NAME_SUCCESS:
      return Object.assign({}, state, { products: action.payload, pending: false });
    case GET_PRODUCTS_BY_NAME_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case SET_FILTERS:
      return Object.assign({}, state, { filters: action.payload });
    default:
      return state;
  }
}

export default categoriesReducer;