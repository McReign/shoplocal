import "./index.css";
import React, { Component } from "react";
import Reminder from "../Reminder"
import ProductStoreModal from '../ProductStoreModal';

class CurrentProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: 'none'
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal = () => {
    this.setState({visibility: 'block'});
  };

  closeModal = () => {
    this.setState({visibility: 'none'});
  };

  render() {
    return (
      this.props.currentProduct.id ? (
          <div className="row current-product">
            <div className="col-12 col-md-5">
              <div className="img-block">
                {
                  this.props.currentProduct.images ?
                    <img src={this.props.currentProduct.images[0].imageURL} alt="product-image" />
                    :
                    <img src={require('../../assets/no-image.png')} alt="product-image" />
                }
              </div>
            </div>
            <div className="col-12 col-md-7">
              <p className="deal-block">
                <span className="deal">{this.props.currentProduct.deal}</span>
                <span className="price-qualifier">{this.props.currentProduct.priceQualifier}</span>
              </p>
              <p className="title">
                {this.props.currentProduct.title}
              </p>
              <p className="original-deal-description">{this.props.currentProduct.originalDeal}</p>
              <p className="additional-deal-description">{this.props.currentProduct.additionalDealInformation}</p>
              {this.props.currentProduct.buyOnlineLinkURL ?
                <a href={this.props.currentProduct.buyOnlineLinkURL} target='_blank'><button className="buy-online">Buy Online</button></a>
                : null
              }
              <p className="valid-dates">
                Valid
                {' ' + new Date(this.props.currentProduct.postStartDateString).getDate()}
                /
                {new Date(this.props.currentProduct.postStartDateString).getMonth()}
                /
                {new Date(this.props.currentProduct.postStartDateString).getFullYear() + ' '}
                -
                {' ' + new Date(this.props.currentProduct.postEndDateString).getDate()}
                /
                {new Date(this.props.currentProduct.postEndDateString).getMonth()}
                /
                {new Date(this.props.currentProduct.postEndDateString).getFullYear()}
              </p>
              {
                this.props.currentProduct.SKU ?
                  <p className="sku">{this.props.currentProduct.SKU}</p>
                  : null
              }
              <div className="description-block">
                <ul className="description">
                  <li>{this.props.currentProduct.description}</li>
                </ul>
                <div className="sales-description">
                  <p>
                    {this.props.currentProduct.salesDescription}
                  </p>
                </div>
                <p className="fineprint">
                  {this.props.currentProduct.finePrint}
                </p>
              </div>
              <div className="shop-info-block">
                <div className="img-block">
                  <p>Find this deal at:</p>
                  {
                    this.props.currentProduct.store && this.props.currentProduct.store.logos ?
                      <img src={this.props.currentProduct.store.logos.logoURL} alt="product-image" />
                      :
                      <img src={require('../../assets/no-image.png')} alt="product-image" />
                  }
                </div>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <div className="row">
                      <div className="col-12 col-lg-6 store-info-block" style={{minWidth: this.props.currentProduct.store && this.props.currentProduct.store.hours ? 0 : 200}}>
                        <p className="header header-address">Address</p>
                        {
                          this.props.currentProduct.store && this.props.currentProduct.store.address ?
                            <p className="store-address">
                              <p>{this.props.currentProduct.store.address.line1}</p>
                              <p>{this.props.currentProduct.store.address.dmaName}</p>
                              <p>{this.props.currentProduct.store.address.postalCode}</p>
                            </p>
                            : null
                        }
                        <span onClick={this.openModal} className="link-to-store-info">View store on map</span>
                        <ProductStoreModal {...this.props.currentProduct} visibility={this.state.visibility} onClose={this.closeModal}/>
                      </div>
                      {
                        this.props.currentProduct.store && this.props.currentProduct.store.hours ?
                          <div className="col-12 col-lg-6 store-info-block open-block">
                            <p className="header">Open today</p>
                            <p className="store-hours">{this.props.currentProduct.store.hours}</p>
                          </div>
                          : null
                      }
                    </div>
                  </div>
                  {
                    this.props.currentProduct.store && this.props.currentProduct.store.phone ?
                      <div className="col-12 col-lg-5 store-info-block phone-block">
                        <p className="header">Phone</p>
                        <p className="contact-phone-number">
                          ({this.props.currentProduct.store.phone.areaCode})
                          {' ' + this.props.currentProduct.store.phone.phoneNumber}</p>
                      </div>
                      : null
						      }
						<div className="col-12 store-block">
							<span onClick={this.openModal}>View store on map</span>
						</div>
						<div className="col-12">
							<Reminder />
						</div>
                </div>
              </div>
            </div>
          </div>
        )
        : null
    );
  }
}

export default CurrentProduct;
