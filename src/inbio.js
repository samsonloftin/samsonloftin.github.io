import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import VoiceDemo from "./components/voiceDemo";

class Bio extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    demo: PropTypes.object.isRequired,
    //links: PropTypes.object.isRequired,
    a: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="inBio-Panels">
          <VoiceDemo demo={this.props.demo} />


          <div className="inBio-Title" id="section-title">AR Filters</div>
          <div className="two-column-panel">
            {this.props.a.map((link) => (
              <a
                href={link.url}
                id={link.id}
                className="two-column"
                key={link.id}
                tabIndex="0"
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby={link.title}
              >
                <div className="project-thumbnails">
                  <div className="inBio-Panel">
                      <div className="inBio-Thumbnail">
                        <img src={link.img} alt={link.alt}></img>
                      </div>
                  </div>
                  <div className="inBio-Title">{link.title}</div>
                </div>
              </a>
            ))}
          </div>
{/*
          {this.props.links.map((link) => (
            <Link
              to={link.url}
              id={link.id}
              key={link.id}
              tabIndex="0"
              aria-labelledby={link.title}
            >
              <div className="inBio-Panel" id="Panel-Links">
                  <div className="inBio-Title">{link.title}</div>
                  <div className="inBio-Subtitle">{link.subtitle}</div>
              </div>
            </Link>
          ))}
           */}
        </div>
      </div>
    );
  }
}

export default Bio;
