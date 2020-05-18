import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { mainData } from "./data";
import About from "./about";
import LinkInBio from "./linkinbio";
import Navigation from "./nav";
import "./sass/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // About
      voice: mainData.voice,
      social: mainData.social,

      //LinkInBio
      linkinbio: mainData.linkinbio,
      linkinbioM: mainData.linkinbioMisc,
      linkinbioAR: mainData.linkinbioAR,
    };
  }

  render() {
    return (
      <div class="padded-wrap">
        {/* Navigation Component */}
        <div className="navigation-bar">
          <Navigation />
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

              <Route
                exact
                path="/linkinbio"
                render={() => (
                  <LinkInBio 
                  linkinbio={this.state.linkinbio}
                  linkinbioMisc={this.state.linkinbioM}
                  social={this.state.social}
                  linkinbioAR={this.state.linkinbioAR}
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
