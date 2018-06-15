import "./index.css";
import React, { Component } from "react";
import RetailerStoreModal from '../../components/RetailerStoreModal';

class RetailerHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: 'none'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({visibility: 'block'});
  };

  closeModal = () => {
    this.setState({visibility: 'none'});
  };

	render() {
		return (
			<div id="retailer-header">
				<div className="img-block">
					<div className="row">
						<div className="col-6 retailer-header-text">
              {
              	this.props.retailerData.logos ?
									<img src={this.props.retailerData.logos.logoURL} alt="logo" />
                  :
									null
              }
							<h2>This Week’s Local Deals</h2>
						</div>
						<div className="col-6 retailer-header-bg">
						</div>
					</div>
				</div>
				<div className="info-block">
					<div className="row">
						<div className="col-6 col-lg-7">
							<div className="row">
								<div className="col-12 col-lg-6 nearest-store">
									<img src={require('../../assets/pointer.png')} alt="" />
									<h3>YOUR NEAREST STORE</h3>
									{this.props.retailerData.address ?
										<p>{this.props.retailerData.address.line1}</p>
										: null
									}
								</div>
								<div className="col-6 address xl-none">
									<img src={require('../../assets/screen-map.png')} alt="" />
									<div>
                    {this.props.retailerData.address ?
											<div>
												<p>{this.props.retailerData.address.line1}</p>
												<p>{this.props.retailerData.address.dmaName} {this.props.retailerData.address.postalCode}</p>
											</div>
                      : null
                    }
									</div>
								</div>
							</div>
						</div>
						<div className="col-6 col-lg-5">
							<div className="row hg100">
								<div className="col-3 open-today xl-none">
                  {this.props.retailerData.hours ?
											<div>
												<p>Open today</p>
												<p>{this.props.retailerData.hours}</p>
											</div>
                      : null
                  }
								</div>
								<div className="col-4 phone xl-none">
                  {this.props.retailerData.phone ?
										<div>
											<p>Phone</p>
											<p>
												({this.props.retailerData.phone.areaCode})
												{' ' + this.props.retailerData.phone.phoneNumber}
											</p>
										</div>
										: null
                  }
								</div>
								<div className="col-12 col-lg-5 information">
									<p onClick={this.openModal}>Store Information</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<RetailerStoreModal {...this.props.retailerData} visibility={this.state.visibility} onClose={this.closeModal}/>
			</div>
		);
	}
}

export default RetailerHeader;
