import React, { Component } from "react";
import PropTypes from "prop-types";

class Timeline extends Component {
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
        <div className="timeline-container"></div>
      </div>
    );
  }
}

export default Timeline;
