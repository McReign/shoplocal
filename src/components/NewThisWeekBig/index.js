import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';

class NewThisWeekBig extends Component {
  render() {
    return (
      <div className="new-this-week-product-big">
        <div className="row">
          <div className="col-6 col-sm-5 col-md-7">
            <div className="img-block">
              {this.props.images ?
                <img src={this.props.images[0].imageURL} alt="product-image" />
                :
                <img src={require('../../assets/no-image.png')} alt="product-image" />
              }
            </div>
          </div>
          <div className="col-6 col-sm-7 col-md-5">
            <div className="info-block">
              <div>
                <div className="price-block">
                  <span className="price-big">{this.props.deal}</span>
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
        </div>
      </div>
    );
  }
}

NewThisWeekBig.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  deal: PropTypes.string,
  additionalDealInformation: PropTypes.string,
  retailer: PropTypes.object
};

export default NewThisWeekBig;
