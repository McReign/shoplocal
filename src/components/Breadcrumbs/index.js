import './index.css';
import React, { Component } from "react";
import {Link} from "react-router-dom";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="breadcrumb" style={this.props.style ? this.props.style : null}>
        {
          this.props.items.map((item, index) =>
            <li key={item.title ? item.title : index}>
              {
                item.link ?
                <Link to={`${item.link}`} style={this.props.breadcrumbsStyle ? this.props.breadcrumbsStyle : null}>{item.title}</Link>
                :
                <span style={this.props.breadcrumbsStyle ? this.props.breadcrumbsStyle : null}>{item.title}</span>
              }
            </li>
          )
        }
      </ul>
    );
  }
}

export default Breadcrumbs;