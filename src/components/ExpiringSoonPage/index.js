import './index.css';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getExpiringSoon, setPageCount } from "../../actions/homePage";
import { setCurrentLinksWay } from "../../actions/app";
import DealsFor from "../DealsFor";
import PreContentBlock from "../PreContentBlock";
import MainProductBig from "../MainProductBig";
import ProductAdaptiveReverse from "../ProductAdaptiveReverse";
import ProductDefault from "../ProductDefault";
import {Link} from "react-router-dom";
import BtnDefault from '../BtnDefault';

class ExpiringSoonPage extends Component {
  constructor(props) {
    super(props);

    this.onHandleSeeMoreBtn = this.onHandleSeeMoreBtn.bind(this);
  }

  links = [
    {
      title: 'Shoplocal',
      link: '/'
    },
    {
      title: 'Expiring Soon!',
      link: null
    }
  ];

  componentDidMount() {
    this.props.setPageCount(0);
    this.props.getExpiringSoon(this.props.pageCount);
    this.props.setCurrentLinksWay(this.links);
  }

  onHandleSeeMoreBtn = () => {
    this.props.setPageCount(this.props.pageCount + 1);
    setTimeout(() => this.props.getExpiringSoon(this.props.pageCount), 500);
  };

  render() {
    return (
      <div id="expiring-soon-page">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-12">
                <DealsFor />
              </div>
              <div className="col-12">
                <PreContentBlock links={this.props.linksWay} breadcrumbsStyle={{fontWeight: 'normal', color: '#16459a'}}/>
              </div>
            </div>
            <div id="expiring-soon-main">
              <div className="row">
                <div className="col-0 col-lg-5">
                  <div id="expiring-soon-banner">
                    <h2>Expiring</h2>
                    <h1>soon!</h1>
                    <h3>Get these deals while they last!</h3>
                  </div>
                </div>
                <div className="col-12 col-lg-7 d-flex justify-content-center">
                  {
                    this.props.expiringSoonProducts.map((item, index) =>
                      index === 0 ?
                        <Link key={item.id} to={`/product/${item.id}`}>
                          <MainProductBig {...item} />
                        </Link>
                        : null
                    )
                  }
                </div>
              </div>
            </div>
            <div className="row">
              {
                this.props.expiringSoonProducts.map((item, index) =>
                  index > 0 && index <= 2 ?
                    <div key={item.id} className="col-6">
                      <Link to={`/product/${item.id}`}>
                        <ProductAdaptiveReverse {...item} />
                      </Link>
                    </div> : null
                )
              }
            </div>
            <div className="row">
              {
                this.props.expiringSoonProducts.map((item, index) =>
                  index > 2 ?
                    <div key={item.id} className="col-6 col-md-4 col-lg-3">
                      <Link to={`/product/${item.id}`}>
                        <ProductDefault {...item} />
                      </Link>
                    </div> : null
                )
              }
            </div>
            {
              this.props.expiringSoonProducts && this.props.expiringSoonProducts.length !== 0 ?
                <div style={{textAlign: 'center'}}>
                  <BtnDefault onClick={this.onHandleSeeMoreBtn}>See more</BtnDefault>
                </div>
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}

ExpiringSoonPage.propTypes = {
  expiringSoonProducts: PropTypes.array
};

function mapStateToProps(state) {
  return {
    pageCount: state.homeState.pageCount,
    expiringSoonProducts: state.homeState.expiringSoonProducts,
    linksWay: state.global.linksWay
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPageCount: (pageCount) => dispatch(setPageCount(pageCount)),
    getExpiringSoon: (pageCount) => dispatch(getExpiringSoon(pageCount)),
    setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpiringSoonPage);
