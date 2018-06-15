import "./index.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilters, filterProducts } from "../../actions/categoriesPage";
import Breadcrumbs from "../Breadcrumbs";

class PreContentBlock extends Component {
  constructor(props) {
    super(props);

    this.filterProducts = this.filterProducts.bind(this);
    this.onHandleSortClick = this.onHandleSortClick.bind(this);
  }

  filterProducts = (sortType) => {
    this.props.setFilters({retailers: this.props.filters.retailers, sortType: sortType})
    setTimeout(() => this.props.filterProducts({products: this.props.products, filters: this.props.filters}), 500);
  };

  onHandleSortClick = () => {
    document.getElementById('sort-menu').style.display === 'block' ?
      document.getElementById('sort-menu').style.display = 'none'
      : document.getElementById('sort-menu').style.display = 'block';
  };

  render() {
    return (
      <div id="pre-content-block" style={this.props.style ? this.props.style : null}>
        <div>
          <Breadcrumbs items={this.props.links} breadcrumbsStyle={this.props.breadcrumbsStyle ? this.props.breadcrumbsStyle : null}/>
        </div>
        <div className="sort" onClick={this.onHandleSortClick}>
          <span>Sort Deals <span style={{fontSize: 12}}>&#9660;</span></span>
          <div className="sort-menu" id='sort-menu' style={{display: 'none'}}>
            <ul>
					    <h3 className="dropdown-header">Sort Deals <span>&#9660;</span></h3>
              <li id={1} onClick={() => this.filterProducts(1)}>High price</li>
              <li id={2} onClick={() => this.filterProducts(2)}>Low price</li>
              <li id={0} onClick={() => this.filterProducts(0)}>Random</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.categoriesState.products,
    filters: state.categoriesState.filters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilters: (filters) => dispatch(setFilters(filters)),
    filterProducts: (data) => dispatch(filterProducts(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreContentBlock);
