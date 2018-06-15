import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StockSticker from "../StockSticker";

class ProductAdaptiveReverse extends Component {
  render() {
    return (
      <div className="product-template">
        <div className="row d-flex">
          <div className="col-12 col-md-6">
            <div className="img-block mgb-0">
              {this.props.images ?
                <img src={this.props.images[0].imageURL} alt="product-image" />
                :
                <img src={require('../../assets/no-image.png')} alt="product-image" />
              }
              {Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) > 0 && Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) < 8 ?
                <StockSticker leftSaleDays={Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24))}/>
                : null
              }
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="price-block">
              <span>{this.props.deal}</span>
              <span className="save">{this.props.additionalDealInformation}</span>
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

ProductAdaptiveReverse.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  deal: PropTypes.string,
  additionalDealInformation: PropTypes.string,
  retailer: PropTypes.object
};

export default ProductAdaptiveReverse;