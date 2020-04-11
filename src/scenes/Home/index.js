import React from 'react';

import About from './About'
import Header from './Header'
import Footer from './Footer'
import Skills from './Skills'

import './style.css';

const App = () => {
  return (
    <div className="page">
      <div className="root-container">
        <Header />
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default App;
