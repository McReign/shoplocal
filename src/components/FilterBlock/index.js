import "./index.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, setFilters } from "../../actions/categoriesPage";
import PropTypes from "prop-types";

class FilterBlock extends Component {
   constructor(props) {
      super(props);

      this.filterProducts = this.filterProducts.bind(this);
   }

   filterProducts = () => {
     let matches = [...document.querySelectorAll('.filter-block>ul>li')];
     let chosenRetailers = matches.map(item => item.children[0].checked ? item.children[0].id : null).filter(item => item);
     setTimeout(() => this.props.setFilters(Object.assign({}, this.props.filters, { retailers: chosenRetailers})), 0);
     setTimeout(() => this.props.filterProducts({products: this.props.products, filters: this.props.filters}), 0);
   };

   render() {
      return (
         <div className="filter-block">
            <p className="block-header">Retailer Filter</p>
            <ul>
              {
                 this.props.retailers.map((item, index) =>
                   <li key={item.id} className="block-item">
                      <input type="checkbox" className="checkbox" onClick={this.filterProducts} id={item.id} />
                      <label htmlFor={item.id}>{item.name}</label>
                   </li>
                 )
              }
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
