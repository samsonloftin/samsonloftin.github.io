import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Data } from "./database/data";
import LinkInBio from "./linkinbio";
import Timeline from "./components/timeline";
import AnimeList from "./components/animeList"
import { animeDatabase } from "./database/anime";
import { gamesDatabase } from "./database/games";
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
              <LinkInBio
                info={this.state.info}
                socialicons={this.state.socialicons}
                a={this.state.a}
                demo={this.state.demo}
                link={this.state.link}
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
