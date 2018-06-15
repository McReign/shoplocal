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

export const getRetailerWeeklySavings = (retailerId, pageCount) => (
  {
    type: GET_RETAILER_WEEKLY_SAVINGS_START,
    payload: {
      retailerId: retailerId,
      pageCount: pageCount
    }
  }
);

export const getRetailerWeeklySavingsSuccess = (products) => (
  {
    type: GET_RETAILER_WEEKLY_SAVINGS_SUCCESS,
    payload: products
  }
);

export const getRetailerWeeklySavingsFailed = (error) => (
  {
    type: GET_RETAILER_WEEKLY_SAVINGS_FAILED,
    payload: error
  }
);

export const getRetailerSpecialBuy = (retailerId) => (
  {
    type: GET_RETAILER_SPECIAL_BUY_START,
    payload: retailerId
  }
);

export const getRetailerSpecialBuySuccess = (product) => (
  {
    type: GET_RETAILER_SPECIAL_BUY_SUCCESS,
    payload: product
  }
);

export const getRetailerSpecialBuyFailed = (error) => (
  {
    type: GET_RETAILER_SPECIAL_BUY_FAILED,
    payload: error
  }
);

export const getCurrentRetailer = (retailerId) => (
  {
    type: GET_CURRENT_RETAILER_START,
    payload: retailerId
  }
);

export const getCurrentRetailerSuccess = (retailerData) => (
  {
    type: GET_CURRENT_RETAILER_SUCCESS,
    payload: retailerData
  }
);

export const getCurrentRetailerFailed = (error) => (
  {
    type: GET_CURRENT_RETAILER_FAILED,
    payload: error
  }
);

export const getCurrentRetailerPromotions = (retailerId) => (
  {
    type: GET_CURRENT_RETAILER_PROMOTIONS_START,
    payload: retailerId
  }
);

export const getCurrentRetailerPromotionsSuccess = (retailerPromotions) => (
  {
    type: GET_CURRENT_RETAILER_PROMOTIONS_SUCCESS,
    payload: retailerPromotions
  }
);

export const getCurrentRetailerPromotionsFailed = (error) => (
  {
    type: GET_CURRENT_RETAILER_PROMOTIONS_FAILED,
    payload: error
  }
);

export const getCurrentRetailerCategories = (retailerId) => (
  {
    type: GET_CURRENT_RETAILER_CATEGORIES_START,
    payload: retailerId
  }
);

export const getCurrentRetailerCategoriesSuccess = (retailerCategories) => (
  {
    type: GET_CURRENT_RETAILER_CATEGORIES_SUCCESS,
    payload: retailerCategories
  }
);

export const getCurrentRetailerCategoriesFailed = (error) => (
  {
    type: GET_CURRENT_RETAILER_CATEGORIES_FAILED,
    payload: error
  }
);