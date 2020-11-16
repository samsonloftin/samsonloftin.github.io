import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Timeline extends Component {
  static propTypes = {
    timeline: PropTypes.array.isRequired,
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
        <div className="linkinbio-container" id="animeList">

          <Link to="/">
            <div className="linkinbio-button" id="goBack">
              <div className="linkinbio-title">
                {"<<"} Back
                </div>
            </div>
          </Link>

          <div className="timelineBox">

            <div className="align-center" id="linkinbio-name">Portfolio Timeline</div>

            <div>
              These are snapshots of my portfolio websites from when I started in
              2007 till now. Some websites have been lost to time, others have been
              pulled from the Wayback Machine so it might not be "complete", but
              it's a great showcase of my journey as a digital creator.
            </div>

            <div className="timeline-container">
              {this.props.timeline.map((link) => (
                <div className="timeline-image" key={link.alt}>
                  <div className="timeline-caption">{link.alt}</div>
                  <img src={link.img} alt={link.alt} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Timeline;
