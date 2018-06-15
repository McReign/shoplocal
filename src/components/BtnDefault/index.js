import "./index.css";
import React, { Component } from "react";

class BtnDefault extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.onClick} className="btn-default" type="submit">
        {this.props.children}
      </button>
    );
  }
}

export default BtnDefault;
