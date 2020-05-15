import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { mainData } from "./data";
import About from "./about";
import Navigation from "./nav";
import "./sass/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Menu
      menu: false,

      // Work Data
      root: [],

      // Contact
      contact: mainData.contact,

      // Voice
      voiceObject: mainData.voiceObject,
      voiceArray: mainData.voiceArray,

      // About
      voice: mainData.voice,
      social: mainData.social,
    };
  }

  showMenu = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    // let rootArray = this.state.root.concat(this.state.code, this.state.design, this.state.art)

    return (
      <div class="padded-wrap">
        {/* Navigation Component */}
        <div className="navigation-bar">
          <Navigation
            menu = {this.state.menu}
          />
        </div>

        <div className="container">
          <div className="sub-container">
            <Switch>
              {/* All Component */}
              <Route
                exact
                path="/"
                render={() => (
                  <About 
                    voice={this.state.voice} 
                  />
                )}
              />
            </Switch>
          </div>
        </div>

        {/* Footer Component */}

        <div className="footer">
        <div className="footer-container">
          <div className="footer-subcontainer">
          <p>
            Copyright 2020 - Designed by Samson Loftin
            </p>
            <p>
              < a href="https://soundcloud.com/pages/cookies">
                SoundCloud Cookie Policy
              </a>
            </p>
            <div className="socialmedia">
                {this.state.social.map((icon) => (
                  <a
                    key={icon.id}
                    tabIndex="0"
                    href={icon.url}
                    aria-labelledby={icon.alt}
                  >
                    <img
                      src={icon.img}
                      alt={icon.alt}
                      className="social-icon"
                    />
                  </a>
                ))}
              </div>
          </div>
          
          </div>
        </div>

        {/* End of App */}
      </div>
    );
  }
}

export default App;
