import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StockSticker from "../StockSticker";

class WeeklyShoppingBig extends Component {
   render() {
      return (
         <div className="weekly-shopping-big">
            <h3>DEALS FOR YOUR WEEKLY SHOPPING:</h3>
            <h1>GROCERY</h1>
            <div className="img-block">
              {this.props.images ?
                <img src={this.props.images[0].imageURL} alt="product-image" />
                :
                <img src={require('../../assets/no-image.png')} alt="product-image" />
              }
              {
                this.props.additionalDealInformation ?
                  <div className="img-sticker">
                    <span>{this.props.additionalDealInformation}</span>
                  </div>
                  : null
              }
            </div>
            <div className="price-block">
               <span className="price-usual">{this.props.deal}</span>
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
      );
   }
}

WeeklyShoppingBig.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  deal: PropTypes.string,
  additionalDealInformation: PropTypes.string,
  retailer: PropTypes.object
};

export default WeeklyShoppingBig;
