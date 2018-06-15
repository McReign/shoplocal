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

export const searchProducts = (name) => (
  {
    type: SEARCH_PRODUCTS_START,
    payload: name
  }
);

export const searchProductsSuccess = (products) => (
  {
    type: SEARCH_PRODUCTS_SUCCESS,
    payload: products
  }
);

export const searchProductsFailed = (error) => (
  {
    type: SEARCH_PRODUCTS_FAILED,
    payload: error
  }
);

export const getRetailers = () => (
  {
    type: GET_RETAILERS_START
  }
);

export const getRetailersSuccess = (retailers) => (
  {
    type: GET_RETAILERS_SUCCESS,
    payload: retailers
  }
);

export const getRetailersFailed = (error) => (
  {
    type: GET_RETAILERS_FAILED,
    payload: error
  }
);

export const getCategories = () => (
  {
    type: GET_CATEGORIES_START
  }
);

export const getCategoriesSuccess = (categories) => (
  {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
  }
);

export const getCategoriesFailed = (error) => (
  {
    type: GET_CATEGORIES_FAILED,
    payload: error
  }
);