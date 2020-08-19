import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LinkInBio extends Component {
  static propTypes = {
    linkinbio: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
    linkinbioMisc: PropTypes.object.isRequired,
    linkinbioAR: PropTypes.array.isRequired,
    voice: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section">
        <div className="section-container">
          <div className="linkinbio-container ">
            <div className="linkinbio-header">
              <div className="linkinbio-avatar">
                <img
                  src={this.props.linkinbioMisc.igpic}
                  alt={this.props.linkinbioMisc.igpicalt}
                />
              </div>
              <div className="linkinbio-tag">
              {this.props.linkinbioMisc.igtag}
              </div>
              <div className="linkinbio-web">
              <Link to="/">
                  <div className="misc-button">{this.props.linkinbioMisc.website}</div>
                </Link>
                </div>
            </div>

            <div className="linkinbio-divider" />
            <div className="linkinbio-title">AR Filters</div>
            <div className="linkinbio-main-ar">
              {this.props.linkinbioAR.map((ar) => (
                <a href={ar.arurl} id={ar.id}>
                  <div className="linkinbio-rect-padding">
                    <div className="linkinbio-rect">{ar.artitle}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="linkinbio-divider" />

            <div className="linkinbio-title">Voice Over Demos</div>
            <div className="voice-demo-container">
              <div className="demo-container">
                <div className="youtube-container">
                  <iframe
                    id="animation"
                    title={this.props.voice.demosA}
                    src="https://www.youtube-nocookie.com/embed/JdaJhq82RP4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <a href={this.props.voice.demoAdwn}>Download Animation Demo</a>
              </div>
              <div className="demo-container">
                <div className="youtube-container">
                  <iframe
                    id="commercial"
                    title={this.props.voice.demosA}
                    src="https://www.youtube-nocookie.com/embed/JdaJhq82RP4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <a href={this.props.voice.demoCdwn}>Download Commercial Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkInBio;
