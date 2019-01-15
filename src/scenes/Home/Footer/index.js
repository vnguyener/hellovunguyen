import React, { Component } from 'react';
import './style.css';


class Footer extends Component {
  render() {
    return (
      <div class="md-padding find-me layout-row layout-align-center-center">
        <div class="md-padding layout-column icon-link">
          <i class="fab fa-github-alt"></i>
          <a href="https://github.com/vnguyener">github.com/vnguyener</a>
        </div>
        <div class="md-padding layout-column icon-link">
          <i class="fab fa-linkedin-in"></i>
          <a href="https://linkedin.com/in/vungynr">linkedin.com/in/vungynr</a>
        </div>
      </div>
    );
  }
}

export default Footer;
