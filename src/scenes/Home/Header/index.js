import React, { Component } from 'react';
import './style.css';

import TypeWriter from  '../../../components/Typewriter'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Software Engineer'
    };
    this.titles = [
      'Protoss',
      'Full-Stack Developer',
      'I code cool websites',
      'I like to fiddle with smart devices', 
      'I enjoy reading',
      'Javascript is <3',
      "I trail run",
      "I am an adventurer"
    ];
    this.titleIndex = 0;

    setInterval(() => {
      this.changeTitle(this.titles[this.titleIndex]);
      this.titleIndex++;
      if (this.titleIndex >= this.titles.length) {
        this.changeTitle('Software Engineer');
        this.titleIndex = 0;
      }
    }, 1500)

  }

  changeTitle(title) {
    this.setState({ title })
  }
  
  render() {
    return (
      <h1 className="writing-heading">
        <span className="name-heading">Vu Nguyen/</span>
        <TypeWriter title={this.state.title}/>
      </h1>
    );
  }
}

export default Header;