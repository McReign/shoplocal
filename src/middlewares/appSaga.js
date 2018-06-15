import { takeEvery, call, put } from 'redux-saga/effects';
import {
  CHANGE_LOCATION_START,
  GET_CURRENT_LOCATION_START
} from "../constants/app";
import {
  changeLocationSuccess,
  changeLocationFailed,
  getCurrentLocationSuccess,
  getCurrentLocationFailed
} from "../actions/app";
import config from "../config";
import geocoder from "google-geocoder";
import geolocation from "google-geolocation";
import cookie from 'react-cookies';

const geo = geocoder({
  key: 'AIzaSyDNhBRUr_epZHWA5IVgl3qVHdWvxyYmXYA'
});

const geoloc = geolocation({
  key: "AIzaSyDNhBRUr_epZHWA5IVgl3qVHdWvxyYmXYA"
});


function* changeLocationSaga(action) {
  try {
    const currentLocation = action.payload;
    yield call(changeLocation, currentLocation);
    yield put(changeLocationSuccess(currentLocation))
  }
  catch(e) {
    yield put(changeLocationFailed(e))
  }
}

function changeLocation(location) {
  geo.find(location, (err, data)=>{
    if (err) {
      console.log (err);
      return;
    }

    let location = data[0] ? { formatted_address: data[0].formatted_address, location: data[0].location} : '';
    cookie.save("geo", JSON.stringify(location), { maxAge: 900000, httpOnly: false });
  })
}

function* getLocationSaga(action) {
  try {
    const currentLocation = yield call(getLocation);
    yield put(getCurrentLocationSuccess(currentLocation))
  }
  catch(e) {
    yield put(getCurrentLocationFailed(e))
  }
}

function getLocation(location) {
  geoloc({}, (err, data) => {
    if (err) {
      console.log (err);
      return;
    }

    let lat = data.location.lat
    let lng = data.location.lng

    geo.reverseFind(lat, lng, (err, data)=>{
      if (err) {
        console.log (err);
        return;
      }

      let postalCode = data[0].postal_code.long_name

      changeLocation(postalCode);
    })


  });
}

export default function* () {
  yield takeEvery(CHANGE_LOCATION_START, changeLocationSaga);
  yield takeEvery(GET_CURRENT_LOCATION_START, getLocationSaga);
}