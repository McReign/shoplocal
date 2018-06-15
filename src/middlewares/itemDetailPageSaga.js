import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_CURRENT_PRODUCT_START, GET_CURRENT_RELATED_PRODUCTS_START } from "../constants/itemDetailPage";
import {
  getCurrentProductSuccess,
  getCurrentProductFailed,
  getCurrentRelatedProductsSuccess,
  getCurrentRelatedProductsFailed
} from "../actions/itemDetailPage";
import config from "../config";
import cookie from "react-cookies";

function* getCurrentProductSaga(action) {
  try {
    const data = yield call(getCurrentProduct, action.payload);
    yield put(getCurrentProductSuccess(data.results[0]))
  }
  catch(e) {
    yield put(getCurrentProductFailed(e))
  }
}

function getCurrentProduct(id) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&listingid=${id}&imagequality=270`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getCurrentRelatedProductsSaga(action) {
  try {
    const data = yield call(getCurrentRelatedProducts, action.payload);
    yield put(getCurrentRelatedProductsSuccess(data.results))
  }
  catch(e) {
    yield put(getCurrentRelatedProductsFailed(e))
  }
}

function getCurrentRelatedProducts(id) {
  let departmentId;
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&listingid=${id}&imagequality=270`)
    .then(res => res.json())
    .then(res =>
      fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}&departmentid=${res.results[0].departments[0].id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(error => error) )
    .catch(error => error)
}

export default function* () {
  yield takeEvery(GET_CURRENT_PRODUCT_START, getCurrentProductSaga);
  yield takeEvery(GET_CURRENT_RELATED_PRODUCTS_START, getCurrentRelatedProductsSaga);
}