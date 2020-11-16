import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import { Data } from "./data";
import Bio from "./inbio";
import LinkInBio from "./linkinbio";
import Timeline from "./timeline";
import AnimeList from "./components/animeList"
import { animeDatabase } from "./anime";
import { gamesDatabase } from "./games";
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
      socialicons: Data.socialicons,

      a: Data.a,
      demo: Data.demo,

      anime: animeDatabase.anime,
      games: gamesDatabase.games,
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
                about={this.state.about}
              />
            )}
          />

          <Route
            exact
            path="/linkinbio"
            render={() => (
              <LinkInBio
                info={this.state.info}
                socialicons={this.state.socialicons}
                a={this.state.a}
                demo={this.state.demo}
                link={this.state.link}
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
            render={() => 
              <AnimeList 
                title="Anime"
                anime={this.state.anime}
                active="Watching"
                done="Watched"
              />}
          />

<Route
            exact
            path="/games"
            render={() => 
              <AnimeList 
                title="Games"
                anime={this.state.games}
                active="Playing"
                done="Played"
              />}
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
