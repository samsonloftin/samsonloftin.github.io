import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cover from "./img/projects/ar/ar_01.gif";

class About extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='about'>
        <img
          src={cover}
          alt="This is me with a derpy face"
          class="image_center image_stretched"
        />
        <p class="about-text">
          Hello, I'm Samson Loftin, a Multimedia Designer, among many other titles. 
          I love using technology to make our lives better. Whether it's making someone smile
          to designing with simplicity and accessibility in mind. I've been working with clients 
          from brand agencies, international financial groups, Hollywood, Healthcare Services, and YouTube!
        </p>
        <p class="about-text">
          You'll probably find me lugging camera equipment around to take doofy
          photos (like the one above) or playing games, watching anime, or
          watching dope folks like 
          <a
            href="https://www.twitch.tv/easyallies"
            aria-labelledby="Easy Allies"
            tabindex="0"
            > Easy Allies </a>
          & 
          <a
            href="https://www.twitch.tv/maximilian_dood"
            aria-labelledby="Maximilian_Dood"
            tabindex="0"
            > Maximillian_Dood </a>
          play games!
        </p>
        <p class="about-text">
          Feel free to message at for any business inquires or general
          questions! I respond fairly quickly
          <span class="email">
            <a
              href="mailto:contact@samsonloftin.com"
              aria-labelledby="Email Me"
              tabindex="0"
            > contact@samsonloftin.com </a></span>
          or message me on any of the social media sites listed at the bottom of
          this page.
        </p>
      </div>
    )
  }
}

export default About;