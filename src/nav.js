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
      <div>
        <div id={ this.isThereAMenu(this.props.menu) } className='menu'>
          <NavLink to='/work' className='navlink' activeClassName='selected'>Work</NavLink>
          <NavLink to='/resume' className='navlink' activeClassName='selected'>Resume</NavLink>
          <NavLink to='/about' className='navlink' activeClassName='selected'>About</NavLink>
        </div>
        
      </div>
    )
  }
}

export default Navigation;