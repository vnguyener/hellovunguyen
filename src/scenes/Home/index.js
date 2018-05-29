import React, { Component } from 'react';

import About from './About'
import Header from './Header'

import './style.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="root-container">
          <Header />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
