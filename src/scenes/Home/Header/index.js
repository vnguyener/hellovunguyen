import React, { Component } from 'react';
import './style.css';

import TypeWriter from  '../../../components/Typewriter'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
    this.titles = [
      'Software Engineer',
      'I\'m a Blood Elf Marksman Hunter',
      'Full-Stack Developer',
      'I code cool websites.',
      'I like to fiddle with AI.', 
      'I enjoy reading.',
      'I\'m obsessed with Medium articles.',
      'Javascript is <3',
      'I trail run.',
      'I play tennis.',
      'I hike.',
      'I doodle.', 
      'I am an adventurer.',
      'I want to be Ron Swanson.',
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
        <span className="name-heading">Vu Nguyen / </span>
        <TypeWriter title={this.state.title}/>
      </h1>
    );
  }
}

export default Header;