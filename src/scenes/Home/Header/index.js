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
      'I\'m a Software Engineer.',
      'I\'m a Blood Elf Hunter.',
      'I\'m a Full-Stack Developer.',
      'I code cool websites.',
      'I like to fiddle with AI.', 
      'I enjoy reading.',
      'I\'m busy reading Medium.',
      'I think Javascript is <3.',
      'I trail run.',
      'I play tennis.',
      'I hike.',
      'I doodle.',
      'I\'m browsing Reddit.',
      'I am an adventurer.',
      'I want to be Ron Swanson.',
    ];
    this.titleIndex = 0;

    setInterval(() => {
      this.changeTitle(this.titles[this.titleIndex]);
      this.titleIndex++;
      if (this.titleIndex >= this.titles.length) {
        this.changeTitle('I\'m a Software Engineer');
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
        <span className="name-heading">Hey I'm Vu Nguyen, and </span>
        <TypeWriter title={this.state.title}/>
      </h1>
    );
  }
}

export default Header;
