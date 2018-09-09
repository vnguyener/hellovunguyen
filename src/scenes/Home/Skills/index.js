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
                    <li>React</li>
                    <li>Node</li>
                    <li>Coffeescript</li>
                    <li>Angular.js 1.x</li>
                    <li>Angular 2+</li>
                    <li>Knockout.js</li>
                    <li>Angular Material</li>
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
                    <li>Gulp</li>
                    <li>Jenkins</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Jasmine</li>
                    <li>Mocha</li>
                    <li>Jest</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Yarn</li>
                    <li>npm</li>
                    <li>Bower</li>
                    <li>Nuget</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Sass</li>
                    <li>Less</li>
                    <li>C#</li>
                    <li>HTML 5</li>
                    <li>Typings</li>
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