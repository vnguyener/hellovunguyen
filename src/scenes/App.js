
// @flow
import React from "react";
// import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";

// routes
import HomePage from "./Home";
import WorkPage from "./Work";
import BlogPage from "./Blog";

// function usePageViews() {
//   let location = useLocation();
//   useEffect(() => {
//     // ga.send(["pageview", location.pathname]);
//   });
// };

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
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
    </>
  );
};

export default App;
