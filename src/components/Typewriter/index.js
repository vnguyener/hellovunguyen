// @flow
import React from 'react';
import './style.scss';
import PropTypes from "prop-types";

const TypeWriter = ({ title }) => {
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
