import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    return (
      <p>
        {this.props.appTitle}
      </p>
    );
  }
}

Title.propTypes = {
  appTitle: PropTypes.string.isRequired,
};
export default Title;