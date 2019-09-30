import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import github from './img/github.png'
import linkedin from './img/linkedin.png'

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
      <span id={ this.isThereAMenu(this.props.menu) } className='menu'>
        <NavLink to='/design' className='navlink' activeClassName='selected'>Design</NavLink>
        <NavLink to='/video' className='navlink' activeClassName='selected'>Video</NavLink>
        <NavLink to='/resume' className='navlink' activeClassName='selected'>Resume</NavLink>
        <NavLink to='/about' className='navlink' activeClassName='selected'>About</NavLink>
        <a href='https://github.com/samsonloftin'><img src={ github } alt='Github icon'></img></a>
        <a href='https://www.linkedin.com/in/samsonloftin'><img src={ linkedin } alt='Linkedin icon'></img></a>
      </span>
    )
  }
}

export default Navigation;