import React, { Component } from 'react';
import './style.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="">
          <h2>
            I'm a developer currently based out of Dallas, TX. I focus on front-end, back-end, and side-ways development.
          </h2>
        </div>
        <div className="article-page">
          <p>
            I've been in the software industry for over 5 years (maybe 10+ if you count that website I did in high school), and I'm now the Integrations Developer of Kickbox. 
          </p>
          <p>
            In my day to day, I work with complex web projects, building and making sure the front-end is human-readable, taking more server-side tasks in writing models, libraries, middleware, and store procedures, and making time to read up/fiddle with new libraries and practices.
          </p>
          <p>
            I believe being involved in all fields helps you stay curious and flexible.
            Though I have been deeply learning towards everything front-end.
            <pre lang="js " className="code">
              // I love it.
            </pre>
          </p>
          <p>
            There's just something about creating responsive websites from scratch, being undecided on what tools to use in your stack, and spinning something up in seconds.
          </p>
          <p>
            When I take off my developer hat, I'm usually out running around (literally) or trying to be an Overwatch pro.
          </p>
        </div>
      </div>
    );
  }
}

export default About;