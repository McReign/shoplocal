import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCTS_BY_CATEGORY_START,
  GET_BEST_DEALS_FOR_WEEK_START,
  GET_EXPIRING_SOON_DEALS_START,
  GET_NEW_DEALS_FOR_WEEK_START,
  GET_DEALS_ON_SALE_START
} from "../constants/homePage";
import {
  getCategorySuccess,
  getCategoryFailed,
  getExpiringSoonSuccess,
  getExpiringSoonFailed,
  getNewDealsForWeekSuccess,
  getNewDealsForWeekFailed,
  getDealsOnSaleSuccess,
  getDealsOnSaleFailed,
  getBestDealsForWeekSuccess,
  getBestDealsForWeekFailed
} from "../actions/homePage";
import 'whatwg-fetch';
import config from "../config";
import cookie from "react-cookies";

function* getExpiringSoonSaga(action) {
  try {
    const data = yield call(getExpiringSoon, action.payload);
    yield put(getExpiringSoonSuccess(data.results))
  }
  catch(e) {
    yield put(getExpiringSoonFailed(e))
  }
}

function getExpiringSoon(pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&sort=5`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getDealsOnSaleSaga(action) {
  try {
    const data = yield call(getDealsOnSale, action.payload);
    yield put(getDealsOnSaleSuccess(data.results))
  }
  catch(e) {
    yield put(getDealsOnSaleFailed(e))
  }
}

function getDealsOnSale(pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getBestDealsForWeekSaga(action) {
  try {
    const data = yield call(getBestDealsForWeek, action.payload);
    yield put(getBestDealsForWeekSuccess(data.results))
  }
  catch(e) {
    yield put(getBestDealsForWeekFailed(e))
  }
}

function getBestDealsForWeek(pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getNewDealsForWeekSaga(action) {
  try {
    const data = yield call(getNewDealsForWeek, action.payload);
    yield put(getNewDealsForWeekSuccess(data.results))
  }
  catch(e) {
    yield put(getNewDealsForWeekFailed(e))
  }
}

function getNewDealsForWeek(pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&sort=8`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getCategorySaga(action) {
  try {
    const data = yield call(getCategory, action.payload);
    yield put(getCategorySuccess(data.results))
  }
  catch(e) {
    yield put(getCategoryFailed(e))
  }
}

function getCategory(category) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&category_id=${category}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}


export default function* () {
  yield takeEvery(GET_PRODUCTS_BY_CATEGORY_START, getCategorySaga);
  yield takeEvery(GET_EXPIRING_SOON_DEALS_START, getExpiringSoonSaga);
  yield takeEvery(GET_DEALS_ON_SALE_START, getDealsOnSaleSaga);
  yield takeEvery(GET_NEW_DEALS_FOR_WEEK_START, getNewDealsForWeekSaga);
  yield takeEvery(GET_BEST_DEALS_FOR_WEEK_START, getBestDealsForWeekSaga);
}