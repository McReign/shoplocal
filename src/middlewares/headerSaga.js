import { takeEvery, call, put } from 'redux-saga/effects';
import {
  SEARCH_PRODUCTS_START,
  GET_RETAILERS_START,
  GET_CATEGORIES_START
} from "../constants/header";
import {
  searchProductsSuccess,
  searchProductsFailed,
  getCategoriesSuccess,
  getCategoriesFailed,
  getRetailersSuccess,
  getRetailersFailed
} from "../actions/header";
import config from "../config";
import cookie from "react-cookies";

function* searchProductsSaga(action) {
  try {
    const name = yield action.payload;
    const data = yield call(searchProducts, name);
    yield put(searchProductsSuccess(name ? data.results : []))
  }
  catch(e) {
    yield put(searchProductsFailed(e))
  }
}

function searchProducts(name) {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/listings.json?searchtext=${name.replace(/ {1,}|(?:%20){1,}/g,",")}&postalcode=${cookie.load('geo').postalCode}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

function* getRetailersSaga(action) {
  try {
    const data = yield call(getRetailers);
    yield put(getRetailersSuccess(data.results))
  }
  catch(e) {
    yield put(getRetailersFailed(e))
  }
}

function getRetailers() {

  let hardcoded_object = {
    results: [
      {name: "ABC Warehouse", id: -98986},
      {name: "Ace Hardware Corporation", id: -99385},
      {name: "Boscov's Department Store, LLC", id: -99986},
      {name: "BrandsMart USA", id: -98373},
      {name: "Conn's", id: -98183},
      {name: "Cost Plus World Market", id: -99974},
      {name: "Gabberts", id: -97882},
      {name: "Gander Outdoors", id: -99760},
      {name: "Hawthorne Online", id: -98181},
      {name: "Jo-Ann Stores, Inc.", id: -99845},
      {name: "Kohl's Department Stores, Inc.", id: -99848},
      {name: "Lowe's Companies, Inc.", id: -99564},
      {name: "Michaels Stores, Inc.", id: -99855},
      {name: "Office Depot, Inc.", id: -99860},
      {name: "Smart and Final", id: -98157},
      {name: "Staples Inc.", id: -99906},
      {name: "The Home Depot, Inc.", id: -99839},
      {name: "True Value", id: -99468},
      {name: "Walgreens", id: -99389}      
    ]
  };

  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/stores.json?postalcode=${cookie.load('geo').postalCode}`)
    //.then(res => res.json())
    //.then(res => res)
    .then(res => hardcoded_object)
    .catch(error => error)
}

function* getCategoriesSaga(action) {
  try {
    const data = yield call(getCategories);
    yield put(getCategoriesSuccess(data.results))
  }
  catch(e) {
    yield put(getCategoriesFailed(e))
  }
}

function getCategories() {
  return fetch(`${config.API_BASE_URL}/${config.API_COMPAIGN_ID}/departments.json?postalcode=${cookie.load('geo').postalCode}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => error)
}

export default function* () {
  yield takeEvery(SEARCH_PRODUCTS_START, searchProductsSaga);
  yield takeEvery(GET_CATEGORIES_START, getCategoriesSaga);
  yield takeEvery(GET_RETAILERS_START, getRetailersSaga);
}