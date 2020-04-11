import React, { useState, useEffect, useRef } from 'react';
import './style.css';

import TypeWriter from  '../../../components/Typewriter';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Header = () => {
  const titles = [
    'I\'m closing my stackoverflow tabs.',
    'I\'m probably busy playing Animal Crossing.',
    'I code cool websites.',
    'I\'m lurking on dribbble.',
    'I enjoy reading.',
    'I\'m busy reading Medium.',
    'Javascript is <3.',
    'I trail run.',
    'I play tennis.',
    'I hike.',
    'I like to doodle.',
    'I\'m browsing Reddit.',
    'I\'m pouring coffee (that I\'ll forget to drink)',
  ];

  const [title, setTitle] = useState('');
  let [index, setIndex] = useState(0);

  useInterval(() => {
      changeTitle(titles[index]);
      setIndex(index++);

      console.log('index', index)
      if (index >= titles.length) {
        changeTitle('I\'m a Software Engineer');
        setIndex(0);
      }
  }, 750);

  const changeTitle = (title) => {
    setTitle(title);
  };
  
  return (
    <h1 className="writing-heading">
      <p className="name-heading">Hello, my name is Vu Nguyen</p>
      <TypeWriter title={`and ${title}`} />
    </h1>
  );
};

export default Header;
