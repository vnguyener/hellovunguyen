// @flow
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline,  createMuiTheme } from "@material-ui/core";

import About from './About'
import Header from './Header'
import Footer from './Footer'
import Skills from './Skills'

import LightSwitch from '../../components/LightSwitch';

import './style.scss';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const App = () => {
  const [isLightOff, setIsLightOff] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") || '{}') : false);

  const getTheme = (res) => {
    setIsLightOff(res);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === "theme") {
        setIsLightOff(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage, listener");
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={isLightOff ? darkTheme : lightTheme}>
        <CssBaseline />
        <div className="page">
          <LightSwitch onSwitch={getTheme}/>
          <div className="root-container">
            <Header />
            <About />
            <Skills theme={isLightOff ? "dark" : "light"}/>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
