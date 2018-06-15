import "./index.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';

class Reminder extends Component {
   render() {
      return (
         <div className="reminder">
            <h2>Send a Reminder for this Deal</h2>
				<p>Email this deal to yourself or another person </p>
				<div className="send-block">
					<input type="text" placeholder="Email Address"/>
					<button>Send</button>
				</div>
         </div>
      );
   }
}

export default Reminder;
