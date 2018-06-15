import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeLocation } from "../../actions/app";
import PropTypes from 'prop-types';
import BtnDefault from "../BtnDefault/index";

class ChangeLocationModal extends Component {
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
        <div className="visible">
          <div className='title'>Change Location</div>
          <img className='close-btn' src={require('../../assets/cancel.svg')} onClick={this.props.onClose}/>
          <div className="content">
            <div className="input-form">
              <input
                id='location-input'
                type="text"
                placeholder="Enter Zip, Postal Code, or City, State"
                value={this.state.locationValue}
                onChange={this.onHandleLocationInputChange}
              />
              <BtnDefault onClick={() => {
                this.props.changeLocation(this.state.locationValue);
                this.props.onClose();
              }}>Submit</BtnDefault>
            </div>
            {
              this.props.preventLocation ?
                <div className='prevent-location'>
                  <img className='location' src={require('../../assets/navigation.svg')} /><span onClick={() => {
                  this.props.changeLocation(this.props.preventLocation);
                  this.setState({locationValue: this.props.preventLocation});
                }}>Reset Your Location To {this.props.preventLocation}</span>
                </div>
                : null
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLocationModal);
