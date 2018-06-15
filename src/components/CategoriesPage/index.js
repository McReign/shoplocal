import "./index.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategory } from "../../actions/categoriesPage";
import { searchProducts } from "../../actions/header";
import { setCurrentLinksWay } from "../../actions/app";
import { setPageCount } from "../../actions/homePage";
import qs from 'qs';
import DealsFor from "../DealsFor";
import CategoriesBlock from "../CategoriesBlock";
import FilterBlock from "../FilterBlock";
import ProductAdaptiveReverse from "../ProductAdaptiveReverse";
import ProductDefault from "../ProductDefault";
import PreContentBlock from "../PreContentBlock/index";
import {Link} from "react-router-dom";
import BtnDefault from '../BtnDefault';

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.onHandleSeeMoreBtn = this.onHandleSeeMoreBtn.bind(this);
  }

  onHandleSeeMoreBtn = () => {
    setTimeout(() => this.props.setPageCount(this.props.pageCount + 1), 0);
    setTimeout(() => this.props.getCategory(this.props.match.params.category, this.props.pageCount), 0);
  };

  componentDidMount() {
    this.props.setPageCount(0);
    this.props.match.params.category ?
      setTimeout(() => this.props.getCategory(this.props.match.params.category, this.props.pageCount), 0)
      :
      setTimeout(() => this.props.searchProducts(qs.parse(this.props.location.search.substring(1)).name), 0);
    this.props.match.params.category ?
      this.props.setCurrentLinksWay(
        [
          {
            title: "Shoplocal",
            link: "/"
          },
          {
            title: "Product Categories",
            link: null
          },
          {
            title: this.props.match.params.category.charAt(0).toUpperCase() + this.props.match.params.category.substr(1),
            link: null
          }
        ]
      )
      :
      this.props.setCurrentLinksWay(
        [
          {
            title: "Shoplocal",
            link: "/"
          },
          {
            title: "Product Categories",
            link: null
          }
        ]
      )
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.category !== this.props.match.params.category)
    {
      this.componentDidMount()
    }
  }

  render() {
    return (
      <div id="categories-page">
        <div className="container">
          <div className="container-inner">
            <DealsFor />
            <PreContentBlock links={this.props.linksWay}/>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <CategoriesBlock categories={this.props.categories}/>
                <FilterBlock retailers={this.props.retailers}/>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="row">
                  {this.props.match.params.category ?
                    this.props.products.map((item, index) =>
                      index >= 0 && index < 2 ?
                        <div key={item.id} className="col-xl-6 col-md-12 col-6">
                          <Link to={`/product/${item.id}`}>
                            <ProductAdaptiveReverse {...item} />
                          </Link>
                        </div>
                        :
                        index >= 2 ?
                          <div key={item.id} className="col-lg-4 col-6">
                            <Link to={`/product/${item.id}`}>
                              <ProductDefault {...item} />
                            </Link>
                          </div>
                          : null
                    )
                    : this.props.searchedProducts.map((item, index) =>
                      index >= 0 && index < 2 ?
                        <div key={item.title} className="col-xl-6 col-md-12 col-6">
                          <Link to={`/product/${item.id}`}>
                            <ProductAdaptiveReverse {...item} />
                          </Link>
                        </div>
                        :
                        index >= 2 ?
                          <div key={item.title} className="col-lg-4 col-6">
                            <Link to={`/product/${item.id}`}>
                              <ProductDefault {...item} />
                            </Link>
                          </div>
                          : null
                    )
                  }
                </div>
                {
                  this.props.match.params.category && this.props.products && this.props.products.length !== 0 ||
                    !this.props.match.params.category && this.props.searchedProducts && this.props.searchedProducts.length !== 0 ?
                    <div style={{textAlign: 'center'}}>
                      <BtnDefault onClick={this.onHandleSeeMoreBtn}>See more</BtnDefault>
                    </div>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoriesPage.propTypes = {};

function mapStateToProps(state) {
  return {
    pageCount: state.homeState.pageCount,
    products: state.categoriesState.products,
    searchedProducts: state.headerState.searchProducts,
    linksWay: state.global.linksWay,
    retailers: state.headerState.retailers,
    categories: state.headerState.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPageCount: (pageCount) => dispatch(setPageCount(pageCount)),
    getCategory: (category, pageCount) => dispatch(getCategory(category, pageCount)),
    searchProducts: (name) => dispatch(searchProducts(name)),
    setCurrentLinksWay: (way) => dispatch(setCurrentLinksWay(way))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
