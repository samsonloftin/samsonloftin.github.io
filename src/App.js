import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import { Data } from "./data";
import Bio from "./inbio";
import LinkInBio from "./linkinbio";
import Timeline from "./timeline";
import AnimeList from "./components/animeList"
import { animeDatabase } from "./anime";
import "./sass/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // About
      info: Data.info,
      about: Data.about,
      link: Data.links,
      timeline: Data.timeline,

      a: Data.a,
      demo: Data.demo,

      animeList: Data.animeYouTube,
      anime: animeDatabase.anime,
    };
  }

  render() {
    return (
      <div className="container">
        <Switch>
          {/* All Component */}
          <Route
            exact
            path="/"
            render={() => (
              <Bio
                info={this.state.info}
                a={this.state.a}
                demo={this.state.demo}
              />
            )}
          />

          <Route
            exact
            path="/linkinbio"
            render={() => (
              <LinkInBio
                info={this.state.info}
                a={this.state.a}
                demo={this.state.demo}
                link={this.state.link}
                anime={this.state.animeList}
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
            path="/anime"
            render={() => <AnimeList anime={this.state.anime} />}
          />

          <Route
            exact
            path="/timeline"
            render={() => <Timeline timeline={this.state.timeline} />}
          />
        </Switch>

        {/* End of App */}
      </div>
    );
  }
}

export default App;
