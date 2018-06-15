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

export const getCurrentLocation = () => (
  {
    type: GET_CURRENT_LOCATION_START
  }
);

export const getCurrentLocationSuccess = (location) => (
  {
    type: GET_CURRENT_LOCATION_SUCCESS,
    payload: location
  }
);

export const getCurrentLocationFailed = (error) => (
  {
    type: GET_CURRENT_LOCATION_FAILED,
    payload: error
  }
);

export const getAvailableLocations = () => (
  {
    type: GET_AVAILABLE_LOCATIONS_START
  }
);

export const getAvailableLocationsSuccess = (locations) => (
  {
    type: GET_AVAILABLE_LOCATIONS_SUCCESS,
    payload: locations
  }
);

export const getAvailableLocationsFailed = (error) => (
  {
    type: GET_AVAILABLE_LOCATIONS_FAILED,
    payload: error
  }
);

export const changeLocation = (location) => (
  {
    type: CHANGE_LOCATION_START,
    payload: location
  }
);

export const changeLocationSuccess = (currentLocation) => (
  {
    type: CHANGE_LOCATION_SUCCESS,
    payload: currentLocation
  }
);

export const changeLocationFailed = (error) => (
  {
    type: CHANGE_LOCATION_FAILED,
    payload: error
  }
);

export const setCurrentLinksWay = (way) => (
  {
    type: SET_CURRENT_LINKS_WAY,
    payload: way
  }
);