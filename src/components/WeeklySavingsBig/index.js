import "./index.css";
import React, { Component } from "react";
import StockSticker from '../StockSticker';

class WeeklySavingsBig extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="weekly-savings-big">
				<div className="img-block">
          {Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) > 0 && Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24)) < 8 ?
						<StockSticker leftSaleDays={Math.round((new Date(this.props.saleEndDateString) - Date.now())/(3600*1000*24))}/>
						: null
          }
          {this.props.images ?
						<img src={this.props.images[0].imageURL} alt="product-image" />
            :
						<img src={require('../../assets/no-image.png')} alt="product-image" />
          }
					<div className="stock-block"><span>SPECIAL BUY</span></div>
				</div>
				<div className="price-block">
					<span>{this.props.deal}</span>
				</div>
				<div className="name-block">
					<p className="product-name">
            {this.props.title}
					</p>
				</div>
			</div>
		);
	}
}

export default WeeklySavingsBig;
