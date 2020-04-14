// @flow
import React from 'react';
import { useTheme } from "@material-ui/core";
import './style.scss';


const Footer = () => {
  const theme = useTheme();

  return (
    <div className="md-padding find-me layout-row layout-align-center-center">
      <div className={`${theme} md-padding layout-column icon-link`}>
        <i className="fab fa-github-alt"></i>
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/vnguyener">github.com/vnguyener</a>
      </div>
      <div className={`${theme} md-padding layout-column icon-link`}>
        <i className="fab fa-linkedin-in"></i>
        <a  target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vungynr">linkedin.com/in/vungynr</a>
      </div>
    </div>
  );
};

export default Footer;
