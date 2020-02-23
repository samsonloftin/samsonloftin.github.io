import React, { Component } from "react";
import PropTypes from 'prop-types'

class Resume extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="resume">
        <iframe
          title="Resume"
          src={this.props.data.resumepdf}
          className="resumepdf"
        ></iframe>
      </div>
    );
  }
}

export default Resume;
