import React, { Component } from 'react';
import OddEvenMessage from './../components/OddEvenMessage';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {increaseValue} from './../actions/index';


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    clickHandler: () => dispatch(increaseValue)
  }
}

class Display extends Component {
  render() {
  	const { value, clickHandler } = this.props;
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

Display.propTypes = {
  value: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
}
const App = connect(mapStateToProps, mapDispatchToProps)(Display);

export default Display;
