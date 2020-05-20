import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./nav";
import Footer from "./footer";

class About extends Component {
  static propTypes = {
    voice: PropTypes.object.isRequired,
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
        {/* Navigation Component */}
        <div className="navigation-bar">
          <Navigation />
        </div>

        <div className="container">
          <div className="sub-container">
            <div className="section">
              <div className="section-container">
                <div className="voice-demo-container">
                  <div className="demo-container">
                    <div className="section-header">
                      {this.props.voice.demoA}
                    </div>
                    <iframe
                      id="animation"
                      title={this.props.voice.demoA}
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.voice.demoAsrc}
                    ></iframe>
                  </div>

                  <div className="demo-container">
                    <div className="section-header">
                      {this.props.voice.demoC}
                    </div>
                    <iframe
                      id="commercial"
                      title={this.props.voice.demoC}
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={this.props.voice.demoCsrc}
                    ></iframe>
                  </div>
                </div>

                <div className="main-container">
                  <div className="headshot">
                    <img
                      class="picture"
                      src={this.props.voice.img}
                      alt={this.props.voice.alt}
                    />
                  </div>

                  <div className="about-summary">
                    <p class="about-paragraph">
                      Hello! I'm Samson Loftin, I'm an LA-based voice actor born
                      in San Jose, California! I'm half-Ethiopian and
                      half-white. I love creating rad things that make people
                      smile! I started my journey in 2006, creating my own
                      cartoons and voice-acting in cartoons!
                    </p>

                    <div className="about-paragraph-container">
                      <p class="about-paragraph-last">
                        Performed a handful of improv shows with the CSU East
                        Bay Improv Group in Hayward, CA. I took improv training
                        at Blacktop Comedy in Rocklin, CA.
                      </p>
                      <p class="about-paragraph-last">
                        I moved to LA in 2019 and began training in professional
                        voice acting. training in PA work with and trained
                        Animation VO at Voice Trax West under Susan Palyo in
                        Studio City, CA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Component */}
        <div className="footer">
          <Footer social={this.props.social} />
        </div>
      </div>
    );
  }
}

export default About;
