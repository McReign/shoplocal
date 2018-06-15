import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import ChangeLocationModal from '../../components/ChangeLocationModal';

class DealsFor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: 'none'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({visibility: 'block'});
  };

  closeModal = () => {
    this.setState({visibility: 'none'});
  };

  render() {
    return (
      <div id="deals-for">
        {
          cookie.load('geo') && cookie.load('geo').formatted_address ?
            <p className="city">Showing Deals For {cookie.load('geo').formatted_address}</p>
            :
            <p className="city">No location</p>
        }
        <span className="info" onClick={this.openModal}>Change Location</span>
        <ChangeLocationModal visibility={this.state.visibility} onClose={this.closeModal}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLocation: state.global.currentLocation
  }
}

export default connect(mapStateToProps)(DealsFor);
