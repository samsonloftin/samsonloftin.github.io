import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./nav";
import About from "./about";
import Footer from "./components/footer";
import { Data } from "./data";
import Bio from "./inbio";
import Timeline from "./timeline";
import "./sass/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // About
      info: Data.info,
      social: Data.social,
      about: Data.about,

      timeline: Data.timeline,

      // About
      links: Data.links,
      a: Data.a,
      demo: Data.demo,
    };
  }

  render() {
    return (
      <div className="container">
        {/* Navigation Component */}
        <div>
          <Navigation social={this.state.social} />
        </div>

        <Switch>
          {/* All Component */}
          <Route
            exact
            path="/"
            render={() => (
              <Bio
                info={this.state.info}
                social={this.state.social}
                links={this.state.links}
                a={this.state.a}
                demo={this.state.demo}
              />
            )}
          />

          <Route
            exact
            path="/about"
            render={() => (
              <About
                info={this.state.info}
                demo={this.state.demo}
                about={this.state.about}
              />
            )}
          />

          <Route
            exact
            path="/timeline"
            render={() => <Timeline timeline={this.state.timeline} />}
          />
        </Switch>

        {/* Footer Component */}
        <Footer />

        {/* End of App */}
      </div>
    );
  }
}

export default App;
