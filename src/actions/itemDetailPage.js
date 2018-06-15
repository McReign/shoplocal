import {
  GET_CURRENT_PRODUCT_START,
  GET_CURRENT_PRODUCT_SUCCESS,
  GET_CURRENT_PRODUCT_FAILED,
  GET_CURRENT_RELATED_PRODUCTS_START,
  GET_CURRENT_RELATED_PRODUCTS_SUCCESS,
  GET_CURRENT_RELATED_PRODUCTS_FAILED
} from "../constants/itemDetailPage";

export const getCurrentProduct = (id) => (
  {
    type: GET_CURRENT_PRODUCT_START,
    payload: id
  }
);

export const getCurrentProductSuccess = (data) => (
  {
    type: GET_CURRENT_PRODUCT_SUCCESS,
    payload: data
  }
);

export const getCurrentProductFailed = (error) => (
  {
    type: GET_CURRENT_PRODUCT_FAILED,
    payload: error
  }
);

export const getCurrentRelatedProducts = (id) => (
  {
    type: GET_CURRENT_RELATED_PRODUCTS_START,
    payload: id
  }
);

export const getCurrentRelatedProductsSuccess = (products) => (
  {
    type: GET_CURRENT_RELATED_PRODUCTS_SUCCESS,
    payload: products
  }
);

export const getCurrentRelatedProductsFailed = (error) => (
  {
    type: GET_CURRENT_RELATED_PRODUCTS_FAILED,
    payload: error
  }
);

