import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class CategoriesBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div className="categories-block">
				<p className="block-header">Categories</p>
				<ul>
          {this.props.categories ?
            this.props.categories.map((item, index) =>
              <li key={item.id} className="block-item"><Link to={`/categories/${item.id}`}>{item.description}</Link></li>
            )
						: null
          }
				</ul>
			</div>
    );
  }
}

export default CategoriesBlock;
