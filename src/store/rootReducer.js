import {combineReducers} from 'redux';
import homePageReducer from '../reducers/homePage';
import appReducer from '../reducers/app';
import headerReducer from '../reducers/header';
import itemDetailPageReducer from '../reducers/itemDetailPage';
import retailerPageReducer from '../reducers/retailerPage';
import categoriesPageReducer from '../reducers/categoriesPage';

export default combineReducers({
  global: appReducer,
  homeState: homePageReducer,
  headerState: headerReducer,
  currentProductState: itemDetailPageReducer,
  retailerState: retailerPageReducer,
  categoriesState: categoriesPageReducer
})