
// @flow
import React, { useEffect, useState } from "react";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //useLocation,
} from "react-router-dom";

// routes
import HomePage from "./Home";
import WorkPage from "./Work";
import BlogPage from "./Blog";

// shared
import LightSwitch from '../components/LightSwitch';
import Footer from "./Shared/Footer";

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
      window.removeEventListener("storage", listener);
    };
  }, []);

  return (
    <ThemeProvider theme={isLightOff ? darkTheme : lightTheme}>
      <CssBaseline />
      <LightSwitch onSwitch={getTheme} />
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/work/:things?">
            <WorkPage />
          </Route>
          <Route path="/blog/:articles?">
            <BlogPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
