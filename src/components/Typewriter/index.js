import React, { Component } from 'react';

class TypeWriter extends Component {
  constructor() {
    super();
  }

  //TODO: take title and add typewriter effect

  render() {
    return (
      <span>
        {this.props.title}
      </span>
    );
  }
}

export default TypeWriter;