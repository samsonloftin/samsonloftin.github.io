import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class About extends Component {
  static propTypes = {
    info: PropTypes.object.isRequired,
    demo: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired,
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
        <div className="about-container">
          {/* ABOUT SECTION START */}
          <div className="inBio-Avatar" id="about-avatar">
            <img
              src={this.props.info.contact}
              alt={this.props.info.contactAlt}
            />
          </div>

          <div className="about-summary">
            <p>{this.props.about.first}</p>
            <p>{this.props.about.last}</p>
          </div>
          {/* ABOUT SECTION END */}
        </div>

        <div className="inBio-Panel" id="timeline-panel">
          <Link to="/timeline">
    <div className="inBio-Title">{">>"} Explore the many redesigns of my portfolio! {"<<"}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
