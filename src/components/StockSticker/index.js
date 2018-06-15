import "./index.css";
import React, { Component } from "react";

class StockSticker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="stock-sticker">
        <div className="default">
          <span>{this.props.leftSaleDays} days</span>
          <span>left</span>
        </div>
        <div className="mini">
          <span>{this.props.leftSaleDays}</span>
          <span>days</span>
        </div>
      </div>
    );
  }
}

export default StockSticker;
