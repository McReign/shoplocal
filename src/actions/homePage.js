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

export const setPageCount = (pageCount) => (
  {
    type: SET_PAGE_COUNT,
    payload: pageCount
  }
);

export const getCategory = (category) => (
  {
    type: GET_PRODUCTS_BY_CATEGORY_START,
    payload: category
  }
);

export const getCategorySuccess = (products) => (
  {
    type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: products
  }
);

export const getCategoryFailed = (error) => (
  {
    type: GET_PRODUCTS_BY_CATEGORY_FAILED,
    payload: error
  }
);

export const getBestDealsForWeek = (pageCount) => (
  {
    type: GET_BEST_DEALS_FOR_WEEK_START,
    payload: pageCount
  }
);

export const getBestDealsForWeekSuccess = (products) => (
  {
    type: GET_BEST_DEALS_FOR_WEEK_SUCCESS,
    payload: products
  }
);

export const getBestDealsForWeekFailed = (error) => (
  {
    type: GET_BEST_DEALS_FOR_WEEK_FAILED,
    payload: error
  }
);

export const getExpiringSoon = (pageCount) => (
  {
    type: GET_EXPIRING_SOON_DEALS_START,
    payload: pageCount
  }
);

export const getExpiringSoonSuccess = (products) => (
  {
    type: GET_EXPIRING_SOON_DEALS_SUCCESS,
    payload: products
  }
);

export const getExpiringSoonFailed = (error) => (
  {
    type: GET_EXPIRING_SOON_DEALS_FAILED,
    payload: error
  }
);

export const getNewDealsForWeek = (pageCount) => (
  {
    type: GET_NEW_DEALS_FOR_WEEK_START,
    payload: pageCount
  }
);

export const getNewDealsForWeekSuccess = (products) => (
  {
    type: GET_NEW_DEALS_FOR_WEEK_SUCCESS,
    payload: products
  }
);

export const getNewDealsForWeekFailed = (error) => (
  {
    type: GET_NEW_DEALS_FOR_WEEK_FAILED,
    payload: error
  }
);

export const getDealsOnSale = (pageCount) => (
  {
    type: GET_DEALS_ON_SALE_START,
    payload: pageCount
  }
);

export const getDealsOnSaleSuccess = (products) => (
  {
    type: GET_DEALS_ON_SALE_SUCCESS,
    payload: products
  }
);

export const getDealsOnSaleFailed = (error) => (
  {
    type: GET_DEALS_ON_SALE_FAILED,
    payload: error
  }
);