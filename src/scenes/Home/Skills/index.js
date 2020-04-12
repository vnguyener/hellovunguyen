// @flow
import React from 'react';
import './style.css';

const Skills = () => {
  return (
    <div className="">
      <h2>What I Work With</h2>
      <div className="article-page skills">
        <ul>
          <li><mark className="highlight">React</mark></li>
          <li><mark className="highlight">Redux</mark></li>
          <li><mark className="highlight fade">Material UI</mark></li>
          <li><mark className="highlight fade">Node.js</mark></li>
          <li><mark className="highlight">Angular.js 1.x</mark></li>
          <li>Angular 2+</li>
          <li><mark className="highlight fade">Angular Material</mark></li>
          <li>Express.js</li>
          <li>Coffeescript</li>
          <li>Knockout.js</li>
          <li>RequireJS</li>
          <li>jQuery / jQuery UI</li>
          <li>d3.js</li>
          <li>Chartist.js</li>
          <li><i> etc.</i></li>
        </ul>
        <ul>
          <li><mark className="highlight">Webpack</mark></li>
          <li><mark className="highlight fade">Gulp</mark></li>
          <li>Jenkins</li>
          <li>ESLint</li>
          <li>Flow</li>
        </ul>
        <ul>
          <li>Jasmine</li>
          <li><mark className="highlight fade">Jest</mark></li>
          <li>Mocha</li>
          <li>Chai</li>
          <li>Enzyme</li>
          <li>Puppeteer</li>
        </ul>

        <ul>
          <li><mark className="highlight">Yarn</mark></li>
          <li>npm</li>
          <li>Bower</li>
          <li>Nuget</li>
        </ul>
        <ul>
          <li>C#</li>
          <li>HTML 5</li>
          <li><mark className="highlight">Sass</mark></li>
          <li>Less</li>
          <li>Stylus</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li><mark className="highlight">Microsoft SQL</mark></li>
          <li>MySql</li>
          <li>MongoDB</li>
          <li>Sequelize</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
