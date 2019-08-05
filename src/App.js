import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { mainData } from './data'
import ListProjects from './ListProjects'

import Mariaopoly from './casestudy/mariaopoly'
import KiteString from './casestudy/kitestring'

import Navigation from './nav'
import About from './about';
import './sass/app.scss';
import signature from './img/logo.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Menu
      menu: false,

      // Work Data
      code: mainData.code,
      design: mainData.design,
      art: mainData.art,
      root: [],

      // About
      about: mainData.about,
      social: mainData.social,

    }
  }

  showMenu = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  render() {
    let rootArray = this.state.root.concat(this.state.code, this.state.design, this.state.art)

    return (
      <div className='container'>

        {/* Navigation Component */}

        <div className='centerNav'>
          <div alt= 'menu icon' onClick={ this.showMenu } className='iconMenu' />

          <Navigation menu={ this.state.menu }/>
        </div>

        <div className='signature'>
          <Link to='/'>
            <img src= { signature } alt = 'Samson Loftin Signature'/>
          </Link>
        </div>

        <TransitionGroup>
          <CSSTransition>
            <Switch>

              {/* All Component */}
              <Route exact path='/' render={() => (
                <div>
                  <ListProjects
                    data = { rootArray }
                  />
                </div>
              )}/>

              {/* Code Component */}
              <Route exact path='/code' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.code }
                  />
                </div>
              )}/>

              {/* Design Component */}
              <Route exact path='/design' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.design }
                  />
                </div>
              )}/>

              {/* Art & Animation Component */}
              <Route exact path='/Art' render={() => (
                <div>
                  <ListProjects
                    data = { this.state.art }
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

            </Switch>
          </CSSTransition>
        </TransitionGroup>  
        {/* End of App */}
      </div>
    )
  }
}

export default App
