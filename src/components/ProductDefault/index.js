import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import StockSticker from "../StockSticker";

class ProductDefault extends Component {
   render() {
      return (
         <div className="product-template">
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
      );
   }
}

ProductDefault.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  deal: PropTypes.string,
  retailer: PropTypes.object
};

export default ProductDefault;
