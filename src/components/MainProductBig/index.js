import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StockSticker from "../StockSticker";

class MainProductBig extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-product-big">
        <div className="img-block">
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
        <div className="info-block">
          <div className="price-block">
            <div className="price-container">
              <span className="price-big">{this.props.deal}</span>
              <span className="old-price">{this.props.originalDeal}</span>
              {Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) > 0 && Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) < 8 ?
                <StockSticker leftSaleDays={Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24))}/>
                : null
              }
            </div>
          </div>
          {this.props.additionalDealInformation ?
            <div className="stock-block">
              <div>
                <span>{this.props.additionalDealInformation}</span>
              </div>
            </div>
            : null
          }
          <div className="name-block">
            <div>
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

MainProductBig.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  originalDeal: PropTypes.string,
  deal: PropTypes.string,
  additionalDealInformation: PropTypes.string,
  retailer: PropTypes.object
};

export default MainProductBig;
