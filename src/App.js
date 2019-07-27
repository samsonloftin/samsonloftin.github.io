import React, { Component } from 'react'
import { NavLink, Switch, Route, Link } from "react-router-dom";
import { mainData } from './data'
import ListProjects from './ListProjects'
import About from './about';
import './sass/app.scss';
import signature from './img/logo.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Work Data
      code: mainData.code,
      design: mainData.design,
      art: mainData.art,

      // About
      about: mainData.about,
      social: mainData.social,
      feats: mainData.feats,
    }
  }

  render() {
    return (
      <div className='container'>

        {/* Navigation Component */}
        <nav>
          <Link to='/'>
            <img src= { signature } className = 'signature' alt = 'Samson Loftin Signature'/>
          </Link>
          <div>
            <NavLink to='/code' className='navlink'>Code</NavLink>
            <NavLink to='/design' className='navlink'>Design/Animation</NavLink>
            <NavLink to='/art' className='navlink'>Art</NavLink>
            <NavLink to='/about' className='navlink'>About</NavLink>
          </div>
        </nav>
        <TransitionGroup>
          <CSSTransition>
            <Switch>
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
                    feats = { this.state.feats }
                  />
                </div>
              )}/>

            </Switch>
          </CSSTransition>
        </TransitionGroup>  
        {/* End of App */}
      </div>
    )
  }
}

export default App
