
// @flow
import React, { useState } from 'react';
import { useTheme } from "@material-ui/core";
import moment from 'moment'
import './style.scss';

const About = () => { 
  const theme = useTheme();
  const highlightClass = `highlight ${theme.palette.type}`;
  const [position] = useState('Senior Software Engineer');
  const [experience] = useState(moment().diff('2013-09-17', 'years'));

  return (
    <div className="article-page">
      <p>
        I'm a {position} based out of Dallas, Texas with a passion to create and deliver <mark className={`${highlightClass} fade`}>beautiful, thoughtful web experiences</mark>.
      </p>
      <p>
        Through {experience}+ years (maybe more if you count that website I did in high school) of working as a software engineer, I've  
        been able to build a strong foundation of <mark className={highlightClass}>UI/UX design, engineering best practices, and&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://read.humanjavascript.com/ch01-introduction.html">writing code for humans</a></mark>.
        Now, I assume the lead of front-end engineering and UI/UX design for our software engineering team where I love to share <span className="strikeout">memes</span> ideas, flesh out new <span className="strikeout">memes</span> features, and
        most importantly <span className="strikeout">sharing memes</span> mentor. 
      </p>
      <pre lang="js" className="code">
        I definitely have more of an emphasis for front-end... everything.
        <br /><br />
        There's just something about creating websites from scratch, figuring out UI/UX, creating custom components,
        and spinning it up really fast.
      </pre>
    </div>
  );
};

export default About;
