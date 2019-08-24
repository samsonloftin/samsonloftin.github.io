import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

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
        <NavLink to='/illustration' className='navlink' activeClassName='selected'>Illustration</NavLink>
        <NavLink to='/animation' className='navlink' activeClassName='selected'>Animation</NavLink>
        <NavLink to='/webdev' className='navlink' activeClassName='selected'>Web Dev</NavLink>
        <NavLink to='/about' className='navlink' activeClassName='selected'>About</NavLink>
      </span>
    )
  }
}

export default Navigation;