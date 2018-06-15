import "./index.css";
import React, { Component } from "react";

class MagazineTemplate extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="magazine-template">
				<img src={this.props.imageURL} alt="other"/>
				<p>{this.props.title}</p>
			</div>
		);
	}
}

export default MagazineTemplate;
