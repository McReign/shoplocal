import "./index.css";
import React, { Component } from "react";

class NotFoundPage extends Component {
	render() {
		return (
			<div className="container-inner">
				<div id="not-found-page">
					<div>
						<h1>Sorry, No Items Found</h1>
						<h3>Please try another search term above or browse one of these popular categories:</h3>
						<ul>
							<li>Electronics</li>
							<li>Furniture</li>
							<li>Grocery</li>
							<li>Health & Beauty</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default NotFoundPage;
