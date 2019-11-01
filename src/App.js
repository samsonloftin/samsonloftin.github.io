import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Data
import { mainData } from './data'

// CSS
import './sass/app.scss';

// Nav
import Navigation from './nav'
import menuIcon from './img/menu.png'
import logo from './img/logo.png'

// About
import About from './about';
import Resume from './resume'

// Projects
import Basic from './basic';
import ListProjects from './ListProjects'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Menu
      menu: false,

      // Work Data
      design: mainData.design,
      video: mainData.video,

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

  render() {
    return (
      <div className='container'>

        {/* Navigation Component */}
        <nav>
          <div className='header'>
            <Link to='/'><img className='portfolioName' src={ logo } alt='Logo'></img></Link>
            <img alt= 'menu icon' onClick={ this.toggleMenu } src= { menuIcon } className='menuIcon'/>
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
                <Redirect to='/design' />
              )}/>

              {/* Design Component */}
              <Route path='/design' render={() => (
                <div className='centerrow'>
                  <ListProjects data = { this.state.design } />
                </div>
              )}/>

              {/* Video Component */}
              <Route exact path='/video' render={() => (
                <div className='centerrow'>
                  <ListProjects data = { this.state.video } />
                </div>
              )}/>

              {/* About Component */}
              <Route exact path='/about' render={() => (
                <div>
                  <About data = { this.state.about } />
                </div>
              )}/>

              {/* Resume Component */}
              <Route exact path='/resume' component={ Resume } />

              {/* Basic Project Components */}
              {this.state.design.map((project) => {
                return this.caseStudyExist(project)
              })}

              {this.state.video.map((project) => {
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
