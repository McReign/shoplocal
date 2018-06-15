import "./index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { setCurrentLinksWay } from "../../actions/app";
import { getRetailerSpecialBuy, getRetailerWeeklySavings, getCurrentRetailer, getCurrentRetailerCategories } from "../../actions/retailerPage";
import { setPageCount } from "../../actions/homePage";
import RetailerHeader from '../RetailerHeader';
import RetailerToPrinted from '../RetailerToPrinted';
import CategoriesBlock from '../CategoriesBlock';
import RetailerMainProduct from '../RetailerMainProduct';
import ProductDefault from '../ProductDefault';
import WeeklySavingsBig from '../WeeklySavingsBig';
import ProductAdaptive from '../ProductAdaptive';
import PreContentBlock from "../PreContentBlock/index";
import Breadcrumbs from "../Breadcrumbs/index";
import BtnDefault from '../BtnDefault';

class RetailerPage extends Component {
	constructor(props) {
		super(props);

    this.onHandleSeeMoreBtn = this.onHandleSeeMoreBtn.bind(this);
	}

  onHandleSeeMoreBtn = () => {
    this.props.setPageCount(this.props.pageCount + 1);
    setTimeout(() => this.props.getRetailerWeeklySavings(this.props.match.params.id, this.props.pageCount), 500);
  };

	componentDidMount() {
		this.props.setPageCount(0);
		// this.props.getCurrentRetailer(this.props.match.params.id);
		this.props.getCurrentRetailerCategories(this.props.match.params.id);
		this.props.getRetailerWeeklySavings(this.props.match.params.id, this.props.pageCount);
		this.props.getRetailerSpecialBuy(this.props.match.params.id);
		this.props.setCurrentLinksWay([
			{
				title: 'Shoplocal',
				link: '/'
			},
			{
				title: 'Retailer',
				link: null
			}
		]);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.match.params.id !== prevProps.match.params.id)
			this.componentDidMount()
	}

	render() {
		return (
			<div id="retailer-page">
				<div className="container">
					<div className="container-inner">
						<div className="row">
							<div className="col-12">
								<Breadcrumbs items={[
                  {
                    title: 'Shoplocal',
                    link: '/'
                  },
                  {
                    title: this.props.retailerData.name,
                    link: null
                  }
                ]} style={{marginBottom: 17}}/>
							</div>
							<div className="col-12">
								<RetailerHeader retailerData={this.props.retailerData}/>
							</div>
							<div className="col-12">
								<RetailerToPrinted retailerId={this.props.match.params.id}/>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-12 col-lg-3 lg-none">
										<CategoriesBlock categories={this.props.categories}/>
									</div>
									<div className="col-12 col-lg-9">
										<div className="row">
											<div className="col-12">
												<PreContentBlock links={[]} style={{margin: 0}}/>
											</div>
											<div className="col-12">
												<RetailerMainProduct {...this.props.specialBuy}/>
											</div>
											<div className="col-12">
												<div id="weekly-savings">
													<div>
														<h3>Weekly Savings at</h3>
														<h1>{this.props.retailerData.name ? this.props.retailerData.name.toUpperCase() : ''}</h1>
													</div>
												</div>
											</div>
											<div className="col-12">
												<div className="row">
													<div className="col-12 col-md-3">
														<div className="row">
															{this.props.weeklySavings.map((item, index) =>
																index >= 0 && index < 2 ?
																	<div key={item.id} className="col-6 col-md-12">
																		<Link to={`/product/${item.id}`}>
																			<ProductDefault {...item}/>
																		</Link>
																	</div>
																	: null
															)}
														</div>
													</div>
                          {this.props.weeklySavings.map((item, index) =>
                            index === 2 ?
															<div key={item.id} className="col-12 col-md-6">
																<Link to={`/product/${item.id}`}>
																	<WeeklySavingsBig {...item}/>
																</Link>
															</div>
                              : null
                          )}
													<div className="col-12 col-md-3">
														<div className="row">
                              {this.props.weeklySavings.map((item, index) =>
                                index > 2 && index <= 4 ?
																	<div key={item.id} className="col-6 col-md-12">
																		<Link to={`/product/${item.id}`}>
																			<ProductDefault {...item}/>
																		</Link>
																	</div>
                                  : null
                              )}
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 lg-none">
												<div className="row">
                          {this.props.weeklySavings.map((item, index) =>
                            index > 4 && index <= 6 ?
                              <div key={item.id} className="col-6">
																<Link to={`/product/${item.id}`}>
                              		<ProductAdaptive {...item}/>
																</Link>
                              </div>
                              : null
                          )}
												</div>
											</div>
											<div className="col-12 lg-none">
												<div className="row">
                          {this.props.weeklySavings.map((item, index) =>
                            index > 6 ?
															<div key={item.id} className="col-4">
																<Link to={`/product/${item.id}`}>
																	<ProductDefault {...item}/>
																</Link>
															</div>
                              : null
                          )}
												</div>
											</div>
										</div>
                    {
                      this.props.weeklySavings && this.props.weeklySavings.length !== 0 ?
												<div style={{textAlign: 'center'}}>
													<BtnDefault onClick={this.onHandleSeeMoreBtn}>See more</BtnDefault>
												</div>
                        : null
                    }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

RetailerPage.propTypes = {
	retailerData: PropTypes.object,
	specialBuy: PropTypes.object,
	weeklySavings: PropTypes.array
};

function mapStateToProps(state) {
  return {
  	pageCount: state.homeState.pageCount,
  	retailerData: state.retailerState.retailerData,
    linksWay: state.global.linksWay,
		specialBuy: state.retailerState.specialBuy,
    weeklySavings: state.retailerState.weeklySavings,
		categories: state.retailerState.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPageCount: (pageCount) => dispatch(setPageCount(pageCount)),
  	getCurrentRetailer: (retailerId) => dispatch(getCurrentRetailer(retailerId)),
    setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way)),
		getRetailerSpecialBuy: (retailerId) => dispatch(getRetailerSpecialBuy(retailerId)),
    getCurrentRetailerCategories: (retailerId) => dispatch(getCurrentRetailerCategories(retailerId)),
		getRetailerWeeklySavings: (retailerId, pageCount) => dispatch(getRetailerWeeklySavings(retailerId, pageCount))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RetailerPage);
