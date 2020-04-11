import React, { useState } from 'react';
import moment from 'moment'
import './style.css';

const About = () => { 
  const [position] = useState('Senior Software Engineer');
  const [experience] = useState(moment().diff('2013-09-17', 'years'));

  return (
    <div>
      <div className="">
        <h3>
          I'm a {position} based out of Dallas, Texas with a passion to create and deliver <mark className="highlight fade">beautiful, thoughtful web experiences
          with human-readable code</mark>.
        </h3>
      </div>
      <div className="article-page">
        <p>
          Through {experience}+ years (maybe more if you count that website I did in high school) of working as a a software engineer in large corporations and a startup, I've  
          been able to build a strong foundation of <mark className="highlight">designs, best practices, and perspectives</mark>.
        </p>
        <p>
          Now, I assume the lead of front-end engineering and UI/UX design for our software engineering team where I love to share <span className="strikeout">memes</span> ideas, build out new features, refine best practices, and
          most importantly <span className="strikeout">more memes</span> mentor. 
        </p>
        <pre lang="js" className="code">
          I definitely have more of an emphasis for front-end... everything.
        </pre>
        <p>
          There's just something about creating websites from scratch, figuring out UI/UX, creating custom components, and spinning it up really fast.
        </p>
        <p>
          At the end of the day when I take off my engineering hat, you'll find me out running, chasing my dog around, <mark className="highlight"> or harvesting fruits in Animal Crossing</mark>.
        </p>
      </div>
    </div>
  );
};

export default About;
