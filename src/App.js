import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Data } from "./database/data";
import LinkInBio from "./linkinbio";
import About from "./about";
import Editor from "./editor";
import Other from "./other";
import Timeline from "./components/timeline";
import AnimeList from "./components/animeList"
import { animeDatabase } from "./database/anime";
import { gamesDatabase } from "./database/games";
import videoBG from './img/bg.webm';
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
      video: Data.editor,

      anime: animeDatabase.anime,
      games: gamesDatabase.games,
    };
  }

  navSave = (select) => {
    if (this.props.location.pathname === ("/" + select)) {
      return ("selectedButton");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="linkinbio-container">
          <div className="header-container">
            <div className="linkinbio-avatar">
              <img
                src={this.state.info.linkin}
                alt={this.state.info.contactAlt}
              />
            </div>
            <div className="linkinbio-avatar" id="linkinbio-avatar-bg">
            </div>

            <div className="header-title">Samson Loftin</div>
            <div className="header-email">
              <a href="mailto:contact@samsonloftin.com">contact@samsonloftin.com</a>
            </div>

            <div className="navRow">
              <Link to="/" className="navButtons" id={this.navSave("")}>Voice Over</Link>
              <Link to="/editor" className="navButtons" id={this.navSave("editor")}>Video Editor</Link>
              <Link to="/3d" className="navButtons" id={this.navSave("3D")}>Other Works</Link>
              <Link to="/about" className="navButtons" id={this.navSave("about")}>About</Link>
            </div>
          </div>

          <Switch>
            {/* All Component */}
            <Route
              exact
              path="/"
              render={() => (
                <LinkInBio
                  demo={this.state.demo}
                />
              )}
            />

            <Route
              exact
              path="/3d"
              render={() =>
                <Other
                  a={this.state.a}
                />}
            />

            <Route
              exact
              path="/editor"
              render={() =>
                <Editor
                  video={this.state.video}
                />
              }
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
              path="/about"
              render={() =>
                <About
                  link={this.state.link}
                  about={this.state.about}
                />}
            />

            <Route
              exact
              path="/timeline"
              render={() => <Timeline timeline={this.state.timeline} />}
            />
          </Switch>
        </div>

        <footer>
          <div className="footer-nav">
            <Link to="https://TWITTER.saml.me">Twitter</Link>
            <Link to="https://INSTAGRAM.saml.me">Instagram</Link>
            <Link to="https://YOUTUBE.saml.me">YouTube</Link>
            <Link to="https://ANIMEREACTIONS.saml.me">YouTube (Anime Reactions)</Link>
            <Link to="https://TWITCH.saml.me">Twitch</Link>
            <Link to="https://github.saml.me">Github</Link>
          </div>
        </footer>

        <video autoPlay="autoplay" loop id="bgVideo">
          <source src={videoBG} type="video/webm" />
        </video>

        {/* End of App */}
      </div>
    );
  }
}

export default withRouter(App);
