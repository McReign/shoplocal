import "./index.css";
import React, { Component } from "react";
import {Link} from "react-router-dom";

class RetailerToPrinted extends Component {
	render() {
		return (
			<div id="retailer-to-printed">
				<p><span>View These Deals In Print.</span><Link to={`/retailer/${this.props.retailerId}/magazines`}>Browse Home Depot’s Printed Ad</Link></p>
				<img src={require('../../assets/magazine.png')} alt=""/>
			</div>
		);
	}
}

export default RetailerToPrinted;
