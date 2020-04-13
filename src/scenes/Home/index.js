// @flow
import React from 'react';

import About from './About'
import Header from './Header'
import Footer from './Footer'
import Skills from './Skills'

import LightSwitch from '../../components/LightSwitch';

import './style.scss';

const App = () => {
  return (
    <div className="page">
      <LightSwitch />
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
