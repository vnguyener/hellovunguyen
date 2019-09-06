import React, { Component } from 'react';
import './style.css';

class Skills extends Component {
  render() {
    return (
      <div class="">
        <h2>What I Work With</h2>
        <div className="article-page skills">
          <table>
            <thead>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li><mark class="highlight">React</mark></li>
                    <li><mark class="highlight">Redux</mark></li>
                    <li><mark class="highlight fade">Node.js</mark></li>
                    <li>Coffeescript</li>
                    <li><mark class="highlight">Angular.js 1.x</mark></li>
                    <li>Angular 2+</li>
                    <li>Knockout.js</li>
                    <li><mark class="highlight fade">Angular Material</mark></li>
                    <li>RequireJS</li>
                    <li>jQuery</li>
                    <li>jQuery UI</li>
                    <li>d3.js</li>
                    <li>Chartist.js</li>
                    <li><i>etc etc.</i></li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><mark class="highlight">Webpack 4</mark></li>
                    <li><mark class="highlight fade">Gulp</mark></li>
                    <li>Jenkins</li>
                    <li>ESLint</li>
                    <li>Flow</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Jasmine</li>
                    <li><mark class="highlight fade">Jest</mark></li>
                    <li>Mocha</li>
                    <li>Enzyme</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><mark class="highlight">Yarn</mark></li>
                    <li>npm</li>
                    <li>Bower</li>
                    <li>Nuget</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><mark class="highlight">Sass</mark></li>
                    <li>Less</li>
                    <li>Stylus</li>
                    <li>CSS</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>C#</li>
                    <li>HTML 5</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><mark class="highlight">Microsoft SQL</mark></li>
                    <li>MySql</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                    <li>Dapper</li>
                    <li>Snowflake</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Skills;
