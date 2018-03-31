import React, { Component } from 'react';
import OddEvenMessage from './../components/OddEvenMessage';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {increaseValue} from './../actions/index';

class Display extends Component {
  render() {
  	const { value, clickHandler } = this.props;
    return (
      <div>
        <div className="valueBox">
			<div className="value">{this.props.value}</div>
			<input type="button" value="+" onClick={this.props.clickHandler} />
        </div>
        <OddEvenMessage value={this.props.value} />
      </div>
    );
  }
}

// Display.propTypes = {
//   value: PropTypes.number.isRequired,
//   clickHandler: PropTypes.func.isRequired
// }

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counter
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps");
  return {
    clickHandler: () => dispatch(increaseValue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
