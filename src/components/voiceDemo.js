import React, { Component } from "react";
import PropTypes from "prop-types";

class VoiceDemo extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="voice-demo">
        <div className="inBio-Panel" id="video">
          <iframe
            id="animation"
            title="Animation Demo"
            src="https://www.youtube-nocookie.com/embed/JdaJhq82RP4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a
          className="inBio-Title"
          id="voice-demo-dwn"
          href={this.props.demo.demoAdwn}
        >
          Download Animation Demo
        </a>
      </div>
    );
  }
}

export default VoiceDemo;
