import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { mainData } from './data'
import ListProjects from './ListProjects'

import Mariaopoly from './casestudy/mariaopoly'
import KiteString from './casestudy/kitestring'
import Resume from './resume'

import Navigation from './nav'
import About from './about';
import './sass/app.scss';
import menuIcon from './img/menu.png'

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
      social: mainData.social,

    }
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
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

        <TransitionGroup>
          <CSSTransition>
            <Switch>

              {/* Redirect Root */}
              <Route exact path='/' render={() => (
                <Redirect to='/illustration' />
              )}/>

              {/* Code Component */}
              <Route path='/illustration' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.illustration }
                  />
                </div>
              )}/>

              {/* Design Component */}
              <Route exact path='/animation' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.animation }
                  />
                </div>
              )}/>

              {/* Art & Animation Component */}
              <Route exact path='/webdev' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.webdev }
                  />
                </div>
              )}/>

              {/* About Component */}
              <Route exact path='/about' render={() => (
                <div>
                  <About
                    data = { this.state.about }
                    social = { this.state.social }
                  />
                </div>
              )}/>


              {/* Case Study Components */}
              <Route exact path='/mariaopoly' component={ Mariaopoly } />
              <Route exact path='/kitestring' component={ KiteString } />
              <Route exact path='/resume' component={ Resume } />

            </Switch>
          </CSSTransition>
        </TransitionGroup>  

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
