import React, { Component } from 'react';
import PropTypes from "prop-types";

class Footer extends Component {
    static propTypes = {
        social: PropTypes.array.isRequired,
      };

  render() {
    return (
        <div className="footer-container">
        <div className="footer-subcontainer">
        <p>
          Copyright 2020 - Designed by Samson Loftin
          </p>
          <p>
            < a href="https://soundcloud.com/pages/cookies">
              SoundCloud Cookie Policy
            </a>
          </p>
          <div className="socialmedia">
              {this.props.social.map((icon) => (
                <a
                  key={icon.id}
                  tabIndex="0"
                  href={icon.url}
                  aria-labelledby={icon.alt}
                >
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default Footer;