import "./index.css";
import React, { Component } from "react";
import {Link} from "react-router-dom";

class RetailerMainProduct extends Component {
	render() {
		return (
			<div id="retailer-main-product">
				<div className="row">
					<div className="col-12 offset-0 col-md-6 offset-md-1">
            {this.props.images ?
							<img src={this.props.images[0].imageURL} alt="product-image" />
              :
							<img src={require('../../assets/no-image.png')} alt="product-image" />
            }
					</div>
					<div className="col-12 col-md-5">
						<div className="stock-block">
							<h3>Special Buy</h3>
							<h2>{this.props.deal}</h2>
							<Link to={`/product/${this.props.id}`}>
								<span style={{color: '#fff', fontSize: 14, lineHeight: 1.43, fontWeight: 'normal', textDecoration: 'underline'}}>
									View Deal
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RetailerMainProduct;
