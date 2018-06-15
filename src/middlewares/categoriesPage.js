import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_CATEGORY_START,
  FILTER_PRODUCTS_START
} from "../constants/categoriesPage";
import {
  getCategorySuccess,
  getCategoryFailed,
  filterProductsSuccess,
  filterProductsFailed
} from "../actions/categoriesPage";
import 'whatwg-fetch';
import config from "../config";
import cookie from 'react-cookies';

function* getCategorySaga(action) {
  try {
    const payload = yield action.payload;
    const data = yield call(getCategory, payload.category, payload.pageCount);
    yield put(getCategorySuccess(payload.category, data.results))
  }
  catch(e) {
    yield put(getCategoryFailed(e))
  }
}

function getCategory(category, pageCount) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?departmentid=${category}&postalcode=${cookie.load('geo').postalCode}&limit=10&offset=${10*(pageCount)}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* filterProductsSaga(action) {
  try {
    const data = yield call(filterProducts, action.payload);
    yield put(filterProductsSuccess(data.results))
  }
  catch(e) {
    yield put(filterProductsFailed(e))
  }
}

function filterProducts(data) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?postalcode=${cookie.load('geo').postalCode}${data.filters.retailers ? `&batch=[${data.filters.retailers.map(item => `{retailerid=${item}`)}]` : ''}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

export default function* () {
  yield takeEvery(GET_CATEGORY_START, getCategorySaga);
  yield takeEvery(FILTER_PRODUCTS_START, filterProductsSaga);
}