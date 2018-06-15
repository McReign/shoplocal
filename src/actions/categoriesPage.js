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

export const filterProducts = (data) => (
  {
    type: FILTER_PRODUCTS_START,
    payload: {
      products: data.products,
      filters: data.filters
    }
  }
);

export const filterProductsSuccess = (products) => (
  {
    type: FILTER_PRODUCTS_SUCCESS,
    payload: products
  }
);

export const filterProductsFailed = (error) => (
  {
    type: FILTER_PRODUCTS_FAILED,
    payload: error
  }
);

export const getCategory = (category, pageCount) => (
  {
    type: GET_CATEGORY_START,
    payload: {
      category: category,
      pageCount: pageCount
    }
  }
);

export const getCategorySuccess = (category, products) => (
  {
    type: GET_CATEGORY_SUCCESS,
    payload: {
      products: products,
      category: category
    }
  }
);

export const getCategoryFailed = (error) => (
  {
    type: GET_CATEGORY_FAILED,
    payload: error
  }
);

export const setFilters = (filters) => (
  {
    type: SET_FILTERS,
    payload: filters
  }
);