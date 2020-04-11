import React from 'react';
import './style.css';

const TypeWriter = ({ title }) => {
  return (
    <span className="typewriter">
      {title}
    </span>
  );
};

export default TypeWriter;
