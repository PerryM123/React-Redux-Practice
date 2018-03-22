import React, { Component } from 'react';
import OddEvenMessage from './../components/OddEvenMessage';

class Display extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0
		};

		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler() {
		this.setState({
			value: this.state.value + 1
		});
	}
  render() {
    return (
      <div>
        <div className="valueBox">
					<div className="value">{this.state.value}</div>
					<input type="button" value="+" onClick={this.clickHandler} />
        </div>
        <OddEvenMessage value={this.state.value} />
      </div>
    );
  }
}

export default Display;
