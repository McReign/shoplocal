import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeLocation, getCurrentLocation } from "../../actions/app";
import {Link} from "react-router-dom";

class WelcomePage extends Component {
	constructor(props) {
		super(props);

    this.state = {
      locationValue: ''
    };

    this.onHandleLocationInputChange = this.onHandleLocationInputChange.bind(this);
	}

	componentDidMount() {
		this.props.getCurrentLocation();
	}

  onHandleLocationInputChange = (e) => {
    this.setState({locationValue: e.target.value})
  };

	render() {
		return (
			<div className="container-inner">
				<div id="welcome-page">
					<div>
						<h1>Welcome to Shoplocal.com</h1>
						<h3>What location would you like to find deals for?</h3>
						<div className="submit-block">
							<input
								type="text"
								placeholder="What ZIP or Postal Code?"
								value={this.state.locationValue}
								onChange={this.onHandleLocationInputChange}/>
							<Link to='/'><button onClick={() => this.props.changeLocation(this.state.locationValue)}>Submit</button></Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		changeLocation: (currentLocation) => dispatch(changeLocation(currentLocation)),
		getCurrentLocation: () => dispatch(getCurrentLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
