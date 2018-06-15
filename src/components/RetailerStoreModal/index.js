import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeLocation } from "../../actions/app";
import PropTypes from 'prop-types';
import { Marker } from "react-google-maps";
import GoogleMaps from '../GoogleMaps';
import BtnDefault from "../BtnDefault/index";

class RetailerStoreModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationValue: ''
    };

    this.onHandleLocationInputChange = this.onHandleLocationInputChange.bind(this);
  }

  onHandleLocationInputChange = (e) => {
    this.setState({locationValue: e.target.value})
  };

  render() {
    return (
      <div id="win" style={{display: this.props.visibility}}>
        <div className="overlay"></div>
        <div className="retailer-modal-visible">
          <div className='title'>Store Information</div>
          <img className='close-btn' src={require('../../assets/cancel.svg')} onClick={this.props.onClose}/>
          <div className="content">
            <GoogleMaps
              defaultCenter={ this.props.location ? {lat: this.props.location.coordinates[0], lng: this.props.location.coordinates[1]} : {lat: 0, lng: 0}}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOQ5Fg830pm-Suv8m7U_4Zo45yOEeNwus&v=3.exp&libraries=geometry,drawing,places,buildings"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: 216, marginTop: 14, border: 'solid 1px #dddddd' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            >
              <Marker position={ this.props && this.props.location ? {lat: this.props.location.coordinates[0], lng: this.props.location.coordinates[1]} : {lat: 0, lng: 0}}/>
            </GoogleMaps>
            <div className='row'>
              <div className='store-title col-12'>Your {this.props.name}</div>
              {
                this.props.address ?
                  <div className="store-address-modal col-sm-6 col-12">
                    <p>{this.props.address.line1}</p>
                    <span>{this.props.address.dmaName}</span>
                    <span>{this.props.address.postalCode}</span>
                  </div>
                  : null
              }
              {
                this.props.hours ?
                  <div className="store-hours-modal col-sm-6 col-12">
                    <span>Open today: </span>
                    <span>{this.props.hours}</span>
                  </div>
                  : null
              }
              {
                this.props.phone ?
                  <div className="col-12 store-phone-modal">
                    <span>Phone: </span>
                    <span>
                      ({this.props.phone.areaCode})
                      {' ' + this.props.phone.phoneNumber}</span>
                  </div>
                  : null
              }
            </div>
            <div className='store-title' style={{marginTop: 30}}>Change Location</div>
            <div className="input-form">
              <input
                id='location-input'
                type="text"
                placeholder="Enter Zip, Postal Code, or City, State"
                value={this.state.locationValue}
                onChange={this.onHandleLocationInputChange}
              />
              <BtnDefault onClick={() => this.props.changeLocation(this.state.locationValue)}>Submit</BtnDefault>
            </div>
            <div className='prevent-location'>
              <img className='location' src={require('../../assets/navigation.svg')} /><span onClick={() => this.props.changeLocation(this.props.preventLocation)}>Reset Your Location To {this.props.preventLocation}</span>
            </div>
            <div id='warning'>
              <span>
                Note: Available content may change after entering a new location
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    preventLocation: state.global.preventLocation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocation: (currentLocation) => dispatch(changeLocation(currentLocation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RetailerStoreModal);
