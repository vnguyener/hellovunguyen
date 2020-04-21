// @flow
import React from 'react';
import { useTheme } from "@material-ui/core";

import About from './About'
import Header from './Header'
import Skills from './Skills'

import './style.scss';

const Home = () => {
  const theme = useTheme();
  const themeType = theme.palette.type;

  return (
    <div className="page">
      <div className="root-container">
        <Header />
        <About />
        <Skills theme={themeType}/>
      </div>
    </div>
  );
};

export default Home;
