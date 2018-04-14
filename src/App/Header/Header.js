import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <h1 className="writing-heading">
        <a className="name-heading">Vu Nguyen/</a>
        <a>Software Engineer</a>
      </h1>
    );
  }
}

export default Header;