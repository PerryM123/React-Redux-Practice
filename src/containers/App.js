import React, { Component } from 'react';
import Title from './../components/Title';
import Display from './../components/Display';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Title appTitle="Testing React Redux!" />
        <Display />
      </div>
    );
  }
}

export default App;
