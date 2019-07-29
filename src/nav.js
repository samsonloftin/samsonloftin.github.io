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
      <nav id={ this.isThereAMenu(this.props.menu) }>
        <NavLink to='/code' className='navlink'>Code</NavLink>
        <NavLink to='/design' className='navlink'>Design/Animation</NavLink>
        <NavLink to='/art' className='navlink'>Art</NavLink>
        <NavLink to='/about' className='navlink'>About</NavLink>
      </nav>
    )
  }
}

export default Navigation;