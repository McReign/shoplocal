import {
  GET_CURRENT_LOCATION_START,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAILED,
  GET_AVAILABLE_LOCATIONS_START,
  GET_AVAILABLE_LOCATIONS_SUCCESS,
  GET_AVAILABLE_LOCATIONS_FAILED,
  CHANGE_LOCATION_START,
  CHANGE_LOCATION_SUCCESS,
  CHANGE_LOCATION_FAILED,
  SET_CURRENT_LINKS_WAY
} from "../constants/app";
import cookie from 'react-cookies';

const initialState = {
  linksWay: [
    {
      title: "Shoplocal",
      link: "/"
    }
  ],
  currentLocation: '',
  preventLocation: '',
  availableLocations: [],
  pending: false,
  error: false
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_LINKS_WAY:
      return Object.assign({}, state, { linksWay: action.payload });
    case GET_CURRENT_LOCATION_START:
      return Object.assign({}, state, { pending: true });
    case GET_CURRENT_LOCATION_SUCCESS:
      setTimeout(() => {
        cookie.load('geo') && cookie.load('geo').formatted_address ?
          window.location.reload()
          :
          null;
      }, 5000);
      return Object.assign({}, state, { pending: false });
    case GET_CURRENT_LOCATION_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case GET_AVAILABLE_LOCATIONS_START:
      return Object.assign({}, state, { pending: true });
    case GET_AVAILABLE_LOCATIONS_SUCCESS:
      return Object.assign({}, state, { availableLocations: action.payload, pending: false });
    case GET_AVAILABLE_LOCATIONS_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    case CHANGE_LOCATION_START:
      return Object.assign({}, state, { pending: true });
    case CHANGE_LOCATION_SUCCESS:
      setTimeout(() => {
        cookie.load('geo') && cookie.load('geo').formatted_address ?
          window.location.reload()
          :
          null;
      }, 5000);
      return Object.assign({}, state, { preventLocation: state.currentLocation, currentLocation: action.payload, pending: false });
    case CHANGE_LOCATION_FAILED:
      return Object.assign({}, state, { pending: false, error: action.payload });
    default:
      return state;
  }
}

export default appReducer;