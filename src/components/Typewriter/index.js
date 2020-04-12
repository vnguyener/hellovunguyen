// @flow
import React from 'react';
import './style.css';
import PropTypes from "prop-types";

const TypeWriter = ({ title } : { title: string}) => {
  return (
    <span className="typewriter">
      {title}
    </span>
  );
};

TypeWriter.propTypes = {
  title: PropTypes.string,
};

export default TypeWriter;
