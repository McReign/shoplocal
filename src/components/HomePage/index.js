import "./index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cookie from 'react-cookies';
import {
  getBestDealsForWeek,
  getCategory,
  getDealsOnSale,
  getExpiringSoon,
  getNewDealsForWeek
} from "../../actions/homePage";
import { setCurrentLinksWay, getCurrentLocation } from "../../actions/app";
import ProductDefault from "../ProductDefault";
import ProductAdaptive from "../ProductAdaptive";
import MainProductBig from "../MainProductBig";
import BestDealsBig from "../BestDealsBig";
import NewThisWeekBig from "../NewThisWeekBig";
import NewThisWeekRight from "../NewThisWeekRight";
import WeeklyShoppingBig from "../WeeklyShoppingBig";
import BtnDefault from "../BtnDefault";
import DealsFor from "../DealsFor";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
    cookie.load('geo') && cookie.load('geo').formatted_address ?
      null
      :
      this.setLocation();
    this.props.getBestDealsForWeek();
    this.props.getCategory("grocery");
    this.props.getDealsOnSale();
    this.props.getExpiringSoon();
    this.props.getNewDealsForWeek();
    this.props.setCurrentLinksWay([
      {
        title: 'Shoplocal',
        link: null
      }
    ]);
  }

  setLocation = () => {
    this.props.getCurrentLocation();
  };

  render() {
    return (
      <div>
         <div className="container">
            <div className="container-inner">
               <DealsFor />
               <div id="main-products">
                  <div className="row">
                     <div className="col-12 col-md-10 offset-md-1 col-lg-7 offset-lg-0 d-flex justify-content-center">
                       {this.props.onSaleProducts.map(
                         (item, index) =>
                           index === 0 ? (
                             <Link
                               key={item.id}
                               to={`/product/${item.id}`}
                             >
                                <MainProductBig {...item} />
                             </Link>
                           ) : null
                       )}
                     </div>
                     <div className="col-5 main-products-right">
                        <div className="row">
                           <div className="col-12">
                             {this.props.onSaleProducts.map(
                               (item, index) =>
                                 index >= 1 && index <= 2 ? (
                                   <Link
                                     key={item.id}
                                     to={`/product/${item.id}`}
                                   >
                                      <ProductAdaptive {...item} />
                                   </Link>
                                 ) : null
                             )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="expiring-soon-block">
                  <div id="expiring-soon-banner">
                     <div className="text-container">
                        <h1>Expiring soon!</h1>
                        <h3>Get these deals while they last!</h3>
                        <p><Link to='/expiring-soon'>View All Expiring Deals</Link></p>
                     </div>
                     <img
                       src={require("../../assets/expiring-soon-people.png")}
                       alt="people"
                     />
                  </div>
                  <div id="expiring-soon-products">
                     <div className="row">
                       {this.props.expiringSoonProducts.map(
                         (item, index) =>
                           index < 4 ? (
                             <div
                               key={item.id}
                               className="col-6 col-md-3"
                             >
                                <Link to={`/product/${item.id}`}>
                                   <ProductDefault {...item} />
                                </Link>
                             </div>
                           ) : null
                       )}
                     </div>
                  </div>
               </div>
               <div id="best-deals-block">
                  <div className="row">
                     <div className="col-12 col-md-6">
                        <div id="best-deals-header">
                           <h3>Check out this week’s</h3>
                           <h1>BEST DEALS</h1>
                        </div>
                       {this.props.bestDeals.map(
                         (item, index) =>
                           index === 0 ? (
                             <div key={item.id}>
                                <Link to={`/product/${item.id}`}>
                                   <BestDealsBig {...item} />
                                </Link>
                             </div>
                           ) : null
                       )}
                     </div>
                     <div className="col-12 col-md-6">
                        <div className="row">
                          {this.props.bestDeals.map(
                            (item, index) =>
                              index > 0 && index <= 2 ? (
                                <div key={item.id} className="col-6">
                                   <Link to={`/product/${item.id}`}>
                                      <ProductDefault {...item} />
                                   </Link>
                                </div>
                              ) : null
                          )}
                        </div>
                        <div className="row">
                          {this.props.bestDeals.map(
                            (item, index) =>
                              index > 2 && index <= 4 ? (
                                <div key={item.id} className="col-6">
                                   <Link to={`/product/${item.id}`}>
                                      <ProductDefault {...item} />
                                   </Link>
                                </div>
                              ) : null
                          )}
                        </div>
                     </div>
                  </div>
               </div>
               <div id="new-this-week-block" name="new-this-week-block">
                  <div id="new-this-week-banner">
                     <h1>NEW THIS WEEK</h1>
                     <img
                       src={require("../../assets/new-this-week-people.png")}
                       alt="people"
                     />
                  </div>
                  <div id="new-this-week-products">
                     <div className="row">
                        <div className="col-12 col-md-9">
                          {this.props.newProducts.map(
                            (item, index) =>
                              index === 0 ? (
                                <Link
                                  key={item.id}
                                  to={`/product/${item.id}`}
                                >
                                   <NewThisWeekBig {...item} />
                                </Link>
                              ) : null
                          )}
                        </div>
                        <div className="col-12 col-md-3">
                          {this.props.newProducts.map(
                            (item, index) =>
                              index === 1 ? (
                                <Link
                                  key={item.id}
                                  to={`/product/${item.id}`}
                                >
                                   <NewThisWeekRight {...item} />
                                </Link>
                              ) : null
                          )}
                        </div>
                     </div>
                     <div className="row">
                       {this.props.newProducts.map(
                         (item, index) =>
                           index > 1 && index <= 5 ? (
                             <div
                               key={item.id}
                               className="col-6 col-md-3"
                             >
                                <Link to={`/product/${item.id}`}>
                                   <ProductDefault {...item} />
                                </Link>
                             </div>
                           ) : null
                       )}
                     </div>
                  </div>
               </div>
               <div id="weekly-shopping">
                  <div className="row">
                     <div className="col-12 col-md-6">
                       {this.props.productsByCategory.map(
                         (item, index) =>
                           index === 0 ? (
                             <Link
                               key={item.id}
                               to={`/product/${item.id}`}
                             >
                                <WeeklyShoppingBig {...item} />
                             </Link>
                           ) : null
                       )}
                     </div>
                     <div className="col-12 col-md-6">
                        <div className="row">
                          {this.props.productsByCategory.map(
                            (item, index) =>
                              index > 1 && index <= 3 ? (
                                <div key={item.id} className="col-6">
                                   <Link to={`/product/${item.id}`}>
                                      <ProductDefault {...item} />
                                   </Link>
                                </div>
                              ) : null
                          )}
                        </div>
                        <div className="row">
                          {this.props.productsByCategory.map(
                            (item, index) =>
                              index > 3 && index <= 5 ? (
                                <div key={item.id} className="col-6">
                                   <Link to={`/product/${item.id}`}>
                                      <ProductDefault {...item} />
                                   </Link>
                                </div>
                              ) : null
                          )}
                        </div>
                     </div>
                  </div>
                  <div className="row hide-mobile">
                    {this.props.productsByCategory.map(
                      (item, index) =>
                        index > 5 && index <= 9 ? (
                          <div key={item.id} className="col-3">
                             <Link to={`/product/${item.id}`}>
                                <ProductDefault {...item} />
                             </Link>
                          </div>
                        ) : null
                    )}
                  </div>
               </div>
               <div id="all-btn">
                  <Link to="/categories/5321">
                     <BtnDefault>View All Grocery Deals</BtnDefault>
                  </Link>
               </div>
            </div>
         </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  bestDeals: PropTypes.array,
  productsByCategory: PropTypes.array,
  expiringSoonProducts: PropTypes.array,
  newProducts: PropTypes.array,
  onSaleProducts: PropTypes.array
};

function mapStateToProps(state) {
  return {
    bestDeals: state.homeState.bestDeals,
    productsByCategory: state.homeState.productsByCategory,
    expiringSoonProducts: state.homeState.expiringSoonProducts,
    newProducts: state.homeState.newProducts,
    onSaleProducts: state.homeState.onSaleProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBestDealsForWeek: () => dispatch(getBestDealsForWeek()),
    getCategory: category => dispatch(getCategory(category)),
    getDealsOnSale: () => dispatch(getDealsOnSale()),
    getExpiringSoon: () => dispatch(getExpiringSoon()),
    getNewDealsForWeek: () => dispatch(getNewDealsForWeek()),
    setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way)),
    getCurrentLocation: () => dispatch(getCurrentLocation())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
