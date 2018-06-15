import "./index.css";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchProducts, getRetailers, getCategories } from "../../actions/header";
import BtnDefault from "../BtnDefault";
import { Link } from "react-router-dom";

class RetailerDefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };

    this.onHandleSearchChange = this.onHandleSearchChange.bind(this);
  }

  componentDidMount() {
    this.props.getRetailers();
    this.props.getCategories();
  }

  onHandleSearchChange = (e) => {
    this.props.searchProducts(e.target.value);
    this.setState({searchValue: e.target.value});
    if(e.target.value !== '' && this.props.products && this.props.products.length !== 0) {
      document.getElementById('results').style.display = 'block'
    }
    else {
      document.getElementById('results').style.display = 'none'
    }
  };

  render() {
    return (
			<div id="retailer-default-header">
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
									/>
									<div id="results-menu">
										<ul id='results'>
                      {
                        this.props.products.map((item, index) =>
													<li key={item.id} onClick={() => document.getElementById('results').style.display = 'none'}>
													<Link to={`/product/${item.id}`}>{item.title}</Link>
													<p>at Home Depot</p>
													</li>
                        )
                      }
										</ul>
									</div>
								</div>
								<Link to='/categories'>
									<BtnDefault
										onClick={() => {
                      this.props.searchProducts(this.state.searchValue);
                      document.getElementById('results').style.display = 'none';
                    }}
										style={{padding: '5px 38px'}}
									>
										Search
									</BtnDefault>
								</Link>
							</form>
						</div>
					</div>
					<div id="header-menu">
						<ul>
							<li style={{marginRight: 48}}>
								<Link to='/expiring-soon'>Expiring soon!</Link>
							</li>
							<li style={{marginRight: 34}}>
								<a href="/#new-this-week-block">New This Week</a>
							</li>
							<li className='sort' style={{marginRight: 39}}>
								Product Categories <span style={{fontSize: 12}}>&#9660;</span>
								<div className="sort-menu">
									<ul>
									<h3 className="dropdown-header">Product Categories &#9660;</h3>
                    {this.props.categories.map((item, index) =>
											<li key={item.id}><Link to={`/categories/${item.description}`}>{item.description}</Link></li>
                    )}
									</ul>
								</div>
							</li>
							<li className='sort' style={{marginRight: 48}}>
								Retailers <span style={{fontSize: 12}}>&#9660;</span>
								<div className="sort-menu">
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
						<li>New Deals</li>
						<li>Categories</li>
						<li>Retailers</li>
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
    getRetailers: () => dispatch(getRetailers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RetailerDefaultHeader);
