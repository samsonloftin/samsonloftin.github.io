import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";


// Data
import { mainData } from "./data";

// CSS
import "./sass/app.scss";

// Nav
import Navigation from "./nav";
import menuIcon from "./img/menu.png";
import logo from "./img/logo.png";
import linkedin from "./img/icon_linkedin.png";
import instagram from "./img/icon_instagram.png";

// About
import About from "./about";
import Resume from "./resume";

// Projects
import Basic from "./basic";
import ListProjects from "./ListProjects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Menu
      menu: false,

      // Work Data
      work: mainData.work,

      // About
      pdf: mainData.pdf,

      error: null,
      isLoaded: false,
      items: []
    };
  }

  // Toggles the menu on smaller viewpoints
  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  // Checks if the projects are case studies
  // If false, A Route is created & data is passed into a component
  // If True, Route is not created & data is not passed
  // Case Studies are added manually
  caseStudyExist = project => {
    return (
      <Route
        exact
        path={project.url}
        key={"router" + project.id}
        render={() => (
          <div>
            <Basic projectData={project} />
          </div>
        )}
      />
    );
  };

  render() {
    console.log(this.state.items);
    return (
      <div className="container">
        {/* Navigation Component */}
        <nav>
          <div className="header">
            <Link to="/">
              <img className="portfolioName" src={logo} alt="Logo"></img>
            </Link>
            <img
              alt="menu icon"
              onClick={this.toggleMenu}
              src={menuIcon}
              className="menuIcon"
            />
          </div>
          <Navigation menu={this.state.menu} />
        </nav>

        {/* 
          <TransitionGroup>
          <CSSTransition>
        */}
        <Switch>
          {/* Redirect Root */}
          <Route exact path="/" render={() => <Redirect to="/work" />} />

          {/* Design Component */}
          <Route
            path="/work"
            render={() => (
              <div className="centerrow">
                <ListProjects data={this.state.work} />
              </div>
            )}
          />

          {/* About Component */}
          <Route exact path='/about' component={ About } />

          {/* Resume Component */}
          <Route
            exact
            path="/resume"
            render={() => (
              <div>
                <Resume data={this.state.pdf} />
              </div>
            )}
          />

          {/* Basic Project Components */}
          {this.state.work.map(project => {
            return this.caseStudyExist(project);
          })}

        </Switch>
        {/* 
          </TransitionGroup>
          </CSSTransition>
        */}

        {/* Footer Component */}
        <div className="footer">
          <div className="footer_text">Samson Loftin © 2020</div>
            <a
              href="https://www.linkedin.com/in/samsonloftin"
              aria-labelledby="Linkedin"
              tabIndex="0"
            >
              <img
                className="social-item"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a
              href="https://www.instagram.com/samson.gif"
              aria-labelledby="Instagram"
              tabIndex="0"
            >
              <img
                className="social-item"
                src={instagram}
                alt="instagram"
              />
            </a>
        </div>

        {/* End of App */}
      </div>
    );
  }
}

export default App;
