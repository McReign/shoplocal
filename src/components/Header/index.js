import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchProducts, getRetailers, getCategories } from "../../actions/header";
import { setCurrentLinksWay } from "../../actions/app";
import BtnDefault from "../BtnDefault";
import { Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};

		this.onHandleSearchChange = this.onHandleSearchChange.bind(this);
		this.onHandleBlur = this.onHandleBlur.bind(this);
		this.onHandleCategoriesClick = this.onHandleCategoriesClick.bind(this);
    this.onHandleReteilersClick = this.onHandleReteilersClick.bind(this);
	}

	componentDidMount() {
		this.props.getRetailers();
		this.props.getCategories();
	}

	onHandleCategoriesClick = () => {
    document.getElementById('categories').style.display === 'block' ?
      document.getElementById('categories').style.display = 'none'
      : document.getElementById('categories').style.display = 'block';
	};

  onHandleReteilersClick = () => {
    document.getElementById('retailers').style.display === 'block' ?
      document.getElementById('retailers').style.display = 'none'
      : document.getElementById('retailers').style.display = 'block';
  };

	onHandleBlur = () => {
		// document.getElementById('results').style.display = 'none'
	};

	onHandleSearchChange = (e) => {
		this.props.searchProducts(e.target.value);
		this.setState({ searchValue: e.target.value });
		e.target.value !== '' ?
			document.getElementById('results').style.display = 'block'
			:
			document.getElementById('results').style.display = 'none'
	};

	render() {
		return (
			<div id="header">
				<div className="container">
					<div id="header-up">
						<Link to='/'>
							<div id="header-logo">
								<span>Shoplocal</span>
							</div>
						</Link>
						<div id="header-search">
							<form action="">
								<div className="search-input">
									<input
										type="text"
										value={this.state.searchValue}
										onChange={this.onHandleSearchChange}
										placeholder="What you are looking for?"
										onBlur={this.onHandleBlur}
									/>
									<div id="results-menu">
										<ul id='results'>
											{
												this.props.products.length !== 0 ?
													this.props.products.map((item, index) =>
														<li key={item.id}>
															<Link to={`/product/${item.id}`} onClick={() => document.getElementById('results').style.display = 'none'}>
                                {item.title}
															</Link>
															<p>at {item.retailer.name}</p>
														</li>
													)
													: <li style={{ fontSize: 14, cursor: 'default' }}>No data</li>
											}
										</ul>
									</div>
								</div>
								<Link to={`/categories${this.state.searchValue ? `?name=${this.state.searchValue}` : ''}`}>
									<BtnDefault
										onClick={() => document.getElementById('results').style.display = 'none'}
										style={{ padding: '5px 38px' }}
									>
										Search
									</BtnDefault>
								</Link>
							</form>
						</div>
					</div>
					<div id="header-menu">
						<ul>
							<li style={{ marginRight: 48 }}>
								<Link to='/expiring-soon'>Expiring Soon!</Link>
							</li>
							<li style={{ marginRight: 34 }}>
								<Link to='/new-this-week'>New This Week</Link>
							</li>
							<li className='sort' onClick={this.onHandleCategoriesClick} style={{ marginRight: 39 }}>
								Product Categories <span style={{ fontSize: 12 }}>&#9660;</span>
								<div className="sort-menu" id='categories' style={{display: 'none'}}>
									<ul>
										<h3 className="dropdown-header">Product Categories &#9660;</h3>
										{this.props.categories.map((item, index) =>
											<li key={item.id}><Link to={`/categories/${item.id}`}>{item.description}</Link></li>
										)}
									</ul>
								</div>
							</li>
							<li className='sort' onClick={this.onHandleReteilersClick} style={{ marginRight: 48 }}>
								Retailers <span style={{ fontSize: 12 }}>&#9660;</span>
								<div className="sort-menu" id='retailers' style={{display: 'none'}}>
									<ul>
										<h3 className="dropdown-header">Retailers &#9660;</h3>
										{this.props.retailers.map((item, index) =>
											<li key={item.id}><Link to={`/retailer/${item.id}`}>{item.name}</Link></li>
										)}
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="header-image">
					<div className="container">
						<img
							className="trees"
							src={require("../../assets/trees.png")}
							alt="trees"
						/>
						<img
							className="houses"
							src={require("../../assets/foreground-buildings.png")}
							alt="houses"
						/>
						<img
							className="people"
							src={require("../../assets/people.png")}
							alt="people"
						/>
					</div>
				</div>
				<div id="header-mobile-menu">
					<div className="input-block">
						<div className="icon-block">
							<img
								src={require("../../assets/invalid-name.png")}
								alt=""
							/>
						</div>
						<input type="text" placeholder="What you are looking for?" />
					</div>
					<ul>
						<li><Link to='/expiring-soon'>Expiring</Link></li>
						<li><Link to='/new-this-week'>New Deals</Link></li>
						<li className='sort'>
							Categories
							<div className="sort-menu">
								<ul>
									{this.props.categories.map((item, index) =>
										<li key={item.id}><Link to={`/categories/${item.id}`}>{item.description}</Link></li>
									)}
								</ul>
							</div>
						</li>
						<li className='sort'>
							Retailers
							<div className="sort-menu">
								<ul>
									{this.props.retailers.map((item, index) =>
										<li key={item.id}><Link to={`/retailer/${item.id}`}>{item.name}</Link></li>
									)}
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.headerState.searchProducts,
		retailers: state.headerState.retailers,
		categories: state.headerState.categories
	}
}

function mapDispatchToProps(dispatch) {
	return {
		searchProducts: (name) => dispatch(searchProducts(name)),
		getCategories: () => dispatch(getCategories()),
		getRetailers: () => dispatch(getRetailers()),
		setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
