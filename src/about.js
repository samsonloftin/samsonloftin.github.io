import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./nav";
import Footer from "./footer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };

    this.showWork = this.showWork.bind(this);
  }

  static propTypes = {
    voice: PropTypes.object.isRequired,
    about: PropTypes.object.isRequired,
    linkinbioAR: PropTypes.array.isRequired,
    twitter: PropTypes.string.isRequired,
    social: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  showWork(e) {
    e.preventDefault();
    this.setState((state) => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    return (
      <div className="section">
        {/* Navigation Component */}
        <div className="navigation-bar">
          <Navigation social={this.props.social} />
        </div>

        {/* VOICE SECTION START */}
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
        {/* VOICE SECTION END */}

        {/* ABOUT SECTION START */}
        <div className="main-container">
          <div className="headshot">
            <img
              className="picture"
              src={this.props.voice.img}
              alt={this.props.voice.alt}
            />
          </div>

          <div className="about-summary">
            <p className="about-paragraph">{this.props.about.first}</p>
            <p className="about-paragraph-last">{this.props.about.last}</p>
          </div>
        </div>
        {/* ABOUT SECTION END */}

        {/* MISC SECTION START */}

        {/* GOTTA BIND THAT SHIT OR SOMETHING */}

        <div className="misc-container">
          <div onClick={this.showWork} className="misc-button">
            {this.props.about.other}
          </div>
        </div>
        {/* MISC SECTION END */}

        {/* AR SECTION START */}
        <div
          className="ar-container"
          id={this.state.isActive ? "hide" : "show"}
        >
          <div className="linkinbio-title">AR Filters</div>
          <div className="linkinbio-main-ar">
            {this.props.linkinbioAR.map((ar) => (
              <a href={ar.arurl} id={ar.id} key={ar.id}>
                <div className="linkinbio-rect-padding">
                  <div className="linkinbio-rect">{ar.artitle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* AR SECTION END */}

        {/* Footer Component */}
        <div className="footer">
          <Footer social={this.props.social} />
        </div>
      </div>
    );
  }
}

export default About;
