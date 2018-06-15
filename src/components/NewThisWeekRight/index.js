import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';

class NewThisWeekRight extends Component {
  render() {
    return (
      <div className="product-template">
        <div className="row">
          <div className="col-6 col-sm-5 col-md-12">
            <div className="img-block">
              {this.props.images ?
                <img src={this.props.images[0].imageURL} alt="product-image" />
                :
                <img src={require('../../assets/no-image.png')} alt="product-image" />
              }
            </div>
          </div>
          <div className="col-6 col-sm-7 col-md-12">
            <div className="price-block">
              <span>{this.props.deal}</span>
            </div>
            <div className="name-block">
              <p className="product-name">
                {this.props.title}
              </p>
              <p className="shop-name">
                at
                <span> {this.props.retailer ? this.props.retailer.name : null}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewThisWeekRight.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  deal: PropTypes.string,
  retailer: PropTypes.object
};

export default NewThisWeekRight;
