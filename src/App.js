import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { mainData } from "./data";
import About from "./about";
import LinkInBio from "./linkinbio";
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
            <Switch>
              {/* All Component */}
              <Route
                exact
                path="/"
                render={() => (
                  <About 
                    voice={this.state.voice}
                    social={this.state.social}
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
        {/* End of App */}
      </div>
    );
  }
}

export default App;
