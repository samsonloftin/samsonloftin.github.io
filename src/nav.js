import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'
import youtube from './img/youtube.png'
import instagram from './img/instagram.png'

class Navigation extends Component {
  static propTypes = {
    menu: PropTypes.bool.isRequired,
  }

  isThereAMenu = (menu) => {
    if (menu === false) {
      return ''
    } else {
      return 'show'
    }
  } 

  render() {
    return (
      <div>
        <div id={ this.isThereAMenu(this.props.menu) } className='menu'>
          <NavLink to='/design' className='navlink' activeClassName='selected'>Design</NavLink>
          <NavLink to='/video' className='navlink' activeClassName='selected'>Video</NavLink>
          <NavLink to='/resume' className='navlink' activeClassName='selected'>Resume</NavLink>
          <NavLink to='/about' className='navlink' activeClassName='selected'>About</NavLink>
        </div>
        <div className='socialMedia'>
          <a href='https://github.saml.me'><img src={ github } alt='Github icon'></img></a>
          <a href='https://linkedin.saml.me'><img src={ linkedin } alt='Linkedin icon'></img></a>
          <a href='https://twitter.saml.me'><img src={ twitter } alt='Twitter icon'></img></a>
          <a href='https://youtube.saml.me'><img src={ youtube } alt='YouTube icon'></img></a>
          <a href='https://instagram.saml.me'><img src={ instagram } alt='Instagram icon'></img></a>
        </div>
      </div>
    )
  }
}

export default Navigation;