import React, { Component } from "react";
import PropTypes from "prop-types";

class VoiceDemo extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
  };

  render() {

    function iframeLoad(e) {
      e.preventDefault();

      let animation = document.getElementById("imageP");
      let videoframe = document.getElementById("video");
      let iframe = document.createElement("iframe");
  
      iframe.setAttribute("id", "animation");
      iframe.setAttribute("title", "Animation Demo");
      iframe.setAttribute("frameBorder", "0");
      iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/JdaJhq82RP4?autoplay=1");  
  
      videoframe.appendChild(iframe);
      animation.remove();
  
    }



    return (
      <div className="voice-demo">
        <div className="inBio-Panel" id="video">
          <img onClick={iframeLoad} src={this.props.demo.aPlaceholder} id="imageP" alt="Animation Demo" />
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
