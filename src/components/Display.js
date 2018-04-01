import React, { Component } from 'react';
import OddEvenMessage from './../components/OddEvenMessage';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {increaseValue, decreaseValue} from './../actions/index';


class Display extends Component {
  render() {
  	const { value, clickHandler } = this.props;
    return (
      <div>
        <div className="valueBox">
    			<div className="value">{this.props.value}</div>
          <div className="inputArea">
            <input type="button" value="+" onClick={this.props.clickHandlerPlus} />
            <input type="button" value="−" onClick={this.props.clickHandlerMinus} />
          </div>
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
  return {
    clickHandlerPlus: () => dispatch(increaseValue()),
    clickHandlerMinus: () => dispatch(decreaseValue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
