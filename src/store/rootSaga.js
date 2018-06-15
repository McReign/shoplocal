import { all } from 'redux-saga/effects';
import homePageSaga from '../middlewares/homePageSaga';
import itemDetailPageSaga from '../middlewares/itemDetailPageSaga';
import retailerPageSaga from '../middlewares/retailerPageSaga';
import appSaga from '../middlewares/appSaga';
import headerSaga from '../middlewares/headerSaga';
import categoriesSaga from '../middlewares/categoriesPage';

export default function* rootSaga() {
  yield all([
    appSaga(),
    homePageSaga(),
    itemDetailPageSaga(),
    retailerPageSaga(),
    headerSaga(),
    categoriesSaga()
  ])
}