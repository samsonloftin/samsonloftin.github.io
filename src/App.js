import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Data
import { mainData } from './data'

// CSS
import './sass/app.scss';

// Nav
import Navigation from './nav'
import menuIcon from './img/menu.png'

// About
import About from './about';
import Resume from './resume'

// Projects
import Basic from './basic';
import ListProjects from './ListProjects'

// Case Study
import Mariaopoly from './casestudy/mariaopoly'
import KiteString from './casestudy/kitestring'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Menu
      menu: false,

      // Work Data
      webdev: mainData.webdev,
      illustration: mainData.illustration,
      animation: mainData.animation,

      // About
      about: mainData.about,
    }
  }

  // Toggles the menu on smaller viewpoints
  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  // Checks if the projects are case studies
  // If false, A Route is created & data is passed into a component
  // If True, Route is not created & data is not passed
  // Case Studies are added manually
  caseStudyExist = (project) => {
    if (project.casestudy === false) {
      return (
        <Route exact path={project.url} key={'router' + project.id} render={() => (
          <div>
            <Basic
              projectData = { project }
            />
          </div>
          )}/>
      )
    }
  }

  render() {
    return (
      <div className='container'>

        {/* Navigation Component */}
        <nav>
          <div className='header'>
            <div className='portfolioName'>Samson Loftin</div>
            <img alt= 'menu icon' onClick={ this.toggleMenu } src= { menuIcon } />
          </div>
          <Navigation menu={ this.state.menu }/>
        </nav>

        {/* 
          <TransitionGroup>
          <CSSTransition>
        */}
            <Switch>

              {/* Redirect Root */}
              <Route exact path='/' render={() => (
                <Redirect to='/illustration' />
              )}/>

              {/* Illustration Component */}
              <Route path='/illustration' render={() => (
                <div>
                  <ListProjects data = { this.state.illustration } />
                </div>
              )}/>

              {/* Animation Component */}
              <Route exact path='/animation' render={() => (
                <div>
                  <ListProjects data = { this.state.animation } />
                </div>
              )}/>

              {/* Web Development Component */}
              <Route exact path='/webdev' render={() => (
                <div>
                  <ListProjects data = { this.state.webdev } />
                </div>
              )}/>

              {/* About Component */}
              <Route exact path='/about' render={() => (
                <div>
                  <About data = { this.state.about } />
                </div>
              )}/>


              {/* Case Study Components */}
              <Route exact path='/mariaopoly' component={ Mariaopoly } />
              <Route exact path='/kitestring' component={ KiteString } />

              {/* Github Component */}
              {this.state.webdev.map((project) => {
                return this.caseStudyExist(project)
              })}

              {/* Resume Component */}
              <Route exact path='/resume' component={ Resume } />


              {/* Basic Project Components */}
              {this.state.illustration.map((project) => {
                return this.caseStudyExist(project)
              })}

              {this.state.animation.map((project) => {
                return this.caseStudyExist(project)
              })}

            </Switch>
        {/* 
          </TransitionGroup>
          </CSSTransition>
        */}

        {/* Footer Component */}
        <div className='footer'>
          <div className='portfolioName'>Copyright © 2019 Samson Loftin</div>
        </div>

        {/* End of App */}
      </div>
    )
  }
}

export default App
