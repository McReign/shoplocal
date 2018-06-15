import "./index.css";
import React, { Component } from "react";
import { Marker } from "react-google-maps";
import GoogleMaps from '../GoogleMaps';

class ChangeLocationModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="win" style={{display: this.props.visibility}}>
        <div className="overlay"></div>
        <div className="product-modal-visible">
          <div className='title'>Store Information</div>
          <img className='close-btn' src={require('../../assets/cancel.svg')} onClick={this.props.onClose}/>
          <div className="content">
            <GoogleMaps
              defaultCenter={{lat: this.props.store.location ? this.props.store.location.coordinates[0] : 0, lng: this.props.store.location ? this.props.store.location.coordinates[1] : 0}}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOQ5Fg830pm-Suv8m7U_4Zo45yOEeNwus&v=3.exp&libraries=geometry,drawing,places,buildings"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: 216, marginTop: 14, border: 'solid 1px #dddddd' }} />}
              mapElement={<div style={{ height: `100%` }} />}
            >
              <Marker position={{ lat: this.props.store.location ? this.props.store.location.coordinates[0] : 0, lng: this.props.store.location ? this.props.store.location.coordinates[1] : 0}}/>
            </GoogleMaps>
            <div className='row'>
              <div className='store-title col-12'>Your {this.props.store.name}</div>
              {
                this.props.store && this.props.store.address ?
                  <div className="store-address-modal col-sm-6 col-12">
                    <p>{this.props.store.address.line1}</p>
                    <span>{this.props.store.address.dmaName}</span>
                    <span>{this.props.store.address.postalCode}</span>
                  </div>
                  : null
              }
              {
                this.props.store && this.props.store.hours ?
                  <div className="store-hours-modal col-sm-6 col-12">
                    <span>Open today: </span>
                    <span>{this.props.store.hours}</span>
                  </div>
                  : null
              }
              {
                this.props.store && this.props.store.phone ?
                  <div className="col-12 store-phone-modal">
                    <span>Phone: </span>
                    <span>
                      ({this.props.store.phone.areaCode})
                      {' ' + this.props.store.phone.phoneNumber}</span>
                  </div>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeLocationModal;
