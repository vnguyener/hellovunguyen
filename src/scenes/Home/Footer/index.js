import React from 'react';
import './style.css';


const Footer = () => {
  return (
    <div className="md-padding find-me layout-row layout-align-center-center">
      <div className="md-padding layout-column icon-link">
        <i className="fab fa-github-alt"></i>
        <a href="https://github.com/vnguyener">github.com/vnguyener</a>
      </div>
      <div className="md-padding layout-column icon-link">
        <i className="fab fa-linkedin-in"></i>
        <a href="https://linkedin.com/in/vungynr">linkedin.com/in/vungynr</a>
      </div>
    </div>
  );
};

export default Footer;
