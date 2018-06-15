import "./index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentRetailer, getCurrentRetailerPromotions } from "../../actions/retailerPage";
import RetailerHeader from '../RetailerHeader';
import MagazineTemplate from '../MagazineTemplate';
import Breadcrumbs from "../Breadcrumbs/index";
import PreContentBlock from "../PreContentBlock/index";
import {Link} from "react-router-dom";

class RetailerMagazines extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	currentPromotionIndex: 0
    };

    this.onHandleLeftClick = this.onHandleLeftClick.bind(this);
    this.onHandleRightClick = this.onHandleRightClick.bind(this);
  }

  componentDidMount() {
    // this.props.getCurrentRetailer(this.props.match.params.id);
    this.props.getCurrentRetailerPromotions(this.props.match.params.id);
    document.getElementById('left-btn').disabled = true;
  }

  onHandleLeftClick = () => {
  	if(this.state.currentPromotionIndex !== 0) {
      this.setState({currentPromotionIndex: this.state.currentPromotionIndex - 1});

      document.getElementById('right-btn').disabled = false;

      if(this.state.currentPromotionIndex === 1) {
        document.getElementById('left-btn').disabled = true;
			}
		}
	};

  onHandleRightClick = () => {
    if(this.state.currentPromotionIndex !== this.props.promotions.length - 1) {
      this.setState({currentPromotionIndex: this.state.currentPromotionIndex + 1});

      document.getElementById('left-btn').disabled = false;

      if(this.state.currentPromotionIndex === this.props.promotions.length - 2) {
        document.getElementById('right-btn').disabled = true;
      }
    }
  };

	render() {
		return (
			<div id="retailer-magazines">
				<div className="container">
					<div className="container-inner">
						<div className="row">
							<div className="col-12 md-none">
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
								<div className="back-link">
									<Link to={`/retailer/${this.props.match.params.id}`}><span>{"<"}</span>Return to {this.props.retailerData ? this.props.retailerData.title : null} Deals Page</Link>
								</div>
							</div>
							<div className="col-12 md-none">
								{/*PreContentBlock*/}
							</div>
							<div className="col-12">
								<div className="slider">
									<div className="row">
										<div className="col-12" style={{ marginBottom: 24 }}>
											<img src={this.props.promotions.length > 0 ? this.props.promotions[this.state.currentPromotionIndex].imageURL : require('../../assets/no-image.png')} alt="main" />
										</div>
									</div>
									<div className="col-12 other-magazines">
										<h3>Browse Deals In Additional Ads:</h3>
										<div className="row">
											{this.props.promotions.filter((item, index) => index !== this.state.currentPromotionIndex).map((item, index) =>
												<div
													onClick={() => {
														this.setState({currentPromotionIndex: this.props.promotions.indexOf(item)});
                            if(this.props.promotions.indexOf(item) === 0) {
                              document.getElementById('left-btn').disabled = true;
                              document.getElementById('right-btn').disabled = false;
                            }
                            else if(this.props.promotions.indexOf(item) === this.props.promotions.length - 1) {
                              document.getElementById('right-btn').disabled = true;
                              document.getElementById('left-btn').disabled = false;
                            }
                            else {
                              document.getElementById('left-btn').disabled = false;
                              document.getElementById('right-btn').disabled = false;
														}
                          }}
													key={item.id}
													className="col-3"
													style={{cursor: 'pointer'}}
												>
													<MagazineTemplate {...item}/>
												</div>
											)}
										</div>
									</div>
									<button className="left-btn" id="left-btn" onClick={this.onHandleLeftClick}><span>{"<"}</span></button>
									<button className="right-btn" id="right-btn" onClick={this.onHandleRightClick}><span>{">"}</span></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

RetailerMagazines.propTypes = {
  retailerData: PropTypes.object,
	promotions: PropTypes.array
};

function mapStateToProps(state) {
  return {
    retailerData: state.retailerState.retailerData,
		promotions: state.retailerState.promotions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentRetailer: (retailerId) => dispatch(getCurrentRetailer(retailerId)),
		getCurrentRetailerPromotions: (retailerId) => dispatch(getCurrentRetailerPromotions(retailerId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RetailerMagazines);
