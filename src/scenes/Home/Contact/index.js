import React, { Component } from 'react';

import './style.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact-section">
        <div class="contact-section-wrapper fade-slide-up-element-2">
          <p>
            You can reach me for an inquiry or just to say hi at <br/>
            <a href="mailto:hey.vuuu@gmail.com">hey.vuuu@gmail.com</a>.
          </p>
          <p>
            For more about me, I'm also on <br />
            <a href="" target="_blank">instagram</a> &amp; 
            <a href="" target="_blank"> facebook</a> &amp; 
            <a href="" target="_blank"> linkedin</a>.
          </p>
        </div>
      </section>
    )
  }
}

export default Contact;
