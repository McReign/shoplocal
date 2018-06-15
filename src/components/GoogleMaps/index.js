import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={this.props.defaultCenter}
      >
        {this.props.children ? this.props.children : null}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(GoogleMaps));