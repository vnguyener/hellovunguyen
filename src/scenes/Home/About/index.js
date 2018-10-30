import React, { Component } from 'react';
import moment from 'moment'
import './style.css';

class About extends Component {
  constructor() {
    super();
    this.me = {
      job: {
        position: 'Software Engineer',
        location: 'Kickbox'
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
            I'm a software engineer currently based out of Dallas, TX. I focus on front-end, back-end, <s>side-ways</s>, <s>intergalactic</s> .. development.
          </h2>
        </div>
        <div className="article-page">
          <p>
            I've been in the software industry for over {this.me.experience.years} years (maybe 10+ if you count that website I did in high school), and I'm now the {this.me.job.position} at {this.me.job.location}. 
          </p>
          <p>
            In my day to day, I build and make sure the front-end is human-readable, controllers and other back-end pieces secure and testable, while making time to read up/fiddle with new libraries and practices.
          </p>
          <p>
            I believe being involved in all aspects helps you stay curious and flexible.
            Though I have been deeply leaning towards everything front-end.
          </p>
          <pre lang="js " className="code">
            I just love it.
          </pre>
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
