import React, { Component } from 'react';
import moment from 'moment'
import './style.css';

class About extends Component {
  constructor() {
    super();
    this.me = {
      job: {
        position: 'Senior Software Engineer',
        location: 'Experian'
      },
      experience: {
        years: moment().diff('2013-09-17', 'years')
      }
    };
  }

  render() {
    return (
      <div>
        <div className="">
          <h2>
            Currently based out of Dallas, TX. Focusing on front-end, back-end, <s>side-ways</s> .. development.
          </h2>
        </div>
        <div className="article-page">
          <p>
            I've been in the software industry for over {this.me.experience.years} years (maybe 10+ if you count that website I did in high school), and I'm now a {this.me.job.position} at {this.me.job.location}. 
          </p>
          <p>
            In my day to day, I'm leading front-end development and builds to make sure things are <mark class="highlight fade">human-readable</mark>. 
            I'm also dipping into back-end pieces like in design/process discussions, APIs, middleware, etc to help make things testable and secure.
          </p>
          <pre lang="js" className="code">
            The testable part took a lotttttt of patience.
          </pre>
          <p>All the while fiddling and reading up things on Medium (or Reddit).
          </p>
          <p>
            I believe being involved in all of software development helps you stay curious and flexible.
            Though I <i>maybe</i> biased towards front-end.
          </p>
          <pre lang="js" className="code">
            I just love it.
          </pre>
          <p>
            There's just something about creating responsive websites from scratch, figuring out UI/UX, being undecided on what tools to use in your stack, and spinning something up in seconds.
          </p>
          <p>
            At the end of the day when I take off my developer hat, you'll find me out running, teaching tennis, <mark class="highlight"> or trying to be an Rocket League pro</mark>.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
