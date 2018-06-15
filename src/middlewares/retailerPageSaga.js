import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_RETAILER_WEEKLY_SAVINGS_START,
  GET_RETAILER_SPECIAL_BUY_START,
  GET_CURRENT_RETAILER_START,
  GET_CURRENT_RETAILER_PROMOTIONS_START,
  GET_CURRENT_RETAILER_CATEGORIES_START
} from "../constants/retailerPage";
import {
  getRetailerSpecialBuySuccess,
  getRetailerSpecialBuyFailed,
  getRetailerWeeklySavingsSuccess,
  getRetailerWeeklySavingsFailed,
  getCurrentRetailerSuccess,
  getCurrentRetailerFailed,
  getCurrentRetailerPromotionsSuccess,
  getCurrentRetailerPromotionsFailed,
  getCurrentRetailerCategoriesSuccess,
  getCurrentRetailerCategoriesFailed
} from "../actions/retailerPage";
import config from "../config";
import cookie from "react-cookies";

function* getCurrentRetailerSaga(action) {
  try {
    const data = yield call(getCurrentRetailer, action.payload);
    yield put(getCurrentRetailerSuccess(data.results[0]))
  }
  catch(e) {
    yield put(getCurrentRetailerFailed(e))
  }
}

function getCurrentRetailer(id) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&retailer_id=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getCurrentRetailerPromotionsSaga(action) {
  try {
    const data = yield call(getCurrentRetailerPromotions, action.payload);
    yield put(getCurrentRetailerPromotionsSuccess(data.results))
  }
  catch(e) {
    yield put(getCurrentRetailerPromotionsFailed(e))
  }
}

function getCurrentRetailerPromotions(id) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/promotions.json?postalcode=${cookie.load('geo').postalCode}&retailer_id=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getSpecialBuySaga(action) {
  try {
    const data = yield call(getSpecialBuy, action.payload);
    yield put(getRetailerSpecialBuySuccess(data.results[0]))
  }
  catch(e) {
    yield put(getRetailerSpecialBuyFailed(e))
  }
}

function getSpecialBuy(id) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&retailer_id=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getWeeklySavingsSaga(action) {
  try {
    const data = yield call(getWeeklySavings, action.payload.retailerId, action.payload.pageCount);
    yield put(getRetailerWeeklySavingsSuccess(data.results))
  }
  catch(e) {
    yield put(getRetailerWeeklySavingsFailed(e))
  }
}

function getWeeklySavings(id, pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&retailer_id=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getCategoriesSaga(action) {
  try {
    const data = yield call(getCategories, action.payload.retailerId);
    yield put(getCurrentRetailerCategoriesSuccess(data.results))
  }
  catch(e) {
    yield put(getCurrentRetailerCategoriesFailed(e))
  }
}

function getCategories(id) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/departments.json?postalcode=${cookie.load('geo').postalCode}&retailerid=${id}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

export default function* () {
  yield takeEvery(GET_CURRENT_RETAILER_START, getCurrentRetailerSaga);
  yield takeEvery(GET_RETAILER_SPECIAL_BUY_START, getSpecialBuySaga);
  yield takeEvery(GET_RETAILER_WEEKLY_SAVINGS_START, getWeeklySavingsSaga);
  yield takeEvery(GET_CURRENT_RETAILER_PROMOTIONS_START, getCurrentRetailerPromotionsSaga);
  yield takeEvery(GET_CURRENT_RETAILER_CATEGORIES_START, getCategoriesSaga);
}