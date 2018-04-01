import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OddEvenMessage extends Component {
  render() {
	var value = this.props.value;
    return (
      <div className="oddeven">
        {
        	/*
        	* React Question:
			* How do I know when to use == and when to use ===????
        	*/
        	(value % 2 === 0) ? "even!" : "odd!"
        }
      </div>
    );
  }
}

OddEvenMessage.proptypes = {
  value: PropTypes.number.isRequired,
};

export default OddEvenMessage;
