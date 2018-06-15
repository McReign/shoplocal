import "./index.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProduct, getCurrentRelatedProducts } from "../../actions/itemDetailPage";
import { setCurrentLinksWay } from "../../actions/app";
import PreContentBlock from "../PreContentBlock";
import CurrentProduct from "../CurrentProduct";
import ProductDefault from "../ProductDefault";
import {Link} from "react-router-dom";

class ItemDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentProduct(this.props.match.params.id);
    this.props.getCurrentRelatedProducts(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getCurrentProduct(this.props.match.params.id);
      this.props.getCurrentRelatedProducts(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div id="item-details-page">
        <div className="container">
          <div className="container-inner">
            <PreContentBlock links={[
              {
                title: 'Shoplocal',
                link: '/'
              },
              {
                title: this.props.currentProductData.title,
                link: null
              }
            ]}/>
            <CurrentProduct currentProduct={this.props.currentProductData}/>
            <div className="similar-block">
              <h3>Similar & Related Deals</h3>
              <div className="row">
                {
                  this.props.relatedProducts.map((item, index) =>
                    index >= 0 && index < 2 ?
                      <div key={item.id} className="col-6 col-lg-3">
                        <Link to={`/product/${item.id}`}>
                          <ProductDefault {...item} />
                        </Link>
                      </div>
                      :
                      index >= 2 && index < 4 ?
                        <div key={item.id} className="col-6 col-lg-3 md-none">
                          <Link to={`/product/${item.id}`}>
                            <ProductDefault {...item} />
                          </Link>
                        </div>
                        :
                        null
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentProductData: state.currentProductState.currentProduct,
    relatedProducts: state.currentProductState.relatedProducts,
    linksWay: state.global.linksWay
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentProduct: (id) => dispatch(getCurrentProduct(id)),
    getCurrentRelatedProducts: (id) => dispatch(getCurrentRelatedProducts(id)),
    setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailPage);
