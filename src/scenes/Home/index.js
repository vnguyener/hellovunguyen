// @flow
import React from 'react';
import { useTheme } from "@material-ui/core";

import About from './About'
import Title from './Title'
import Skills from './Skills'
import SelfDoodle from "../Shared/Doodle";

import './style.scss';

const Home = () => {
  const theme = useTheme();
  const themeType = theme.palette.type;

  return (
    <div className={`page ${themeType}`}>
      <div className="root-container">
        <Title />
        <SelfDoodle />
        <About />
        <Skills theme={themeType}/>
      </div>
    </div>
  );
};

export default Home;
