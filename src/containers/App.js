import React, { Component } from 'react';
import Title from './../components/Title';
import Display from './../components/Display';
import OddEvenMessage from './../components/OddEvenMessage';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Display />
        <OddEvenMessage />
      </div>
    );
  }
}

export default App;
