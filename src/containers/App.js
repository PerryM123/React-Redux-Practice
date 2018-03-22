import React, { Component } from 'react';
import Title from './../components/Title';
import Display from './../components/Display';

class App extends Component {
  render() {
    return (
      <div>
        <Title appTitle="Value!" />
        <Display />
      </div>
    );
  }
}

export default App;
