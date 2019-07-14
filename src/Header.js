import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    social: PropTypes.array.isRequired,
    header: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <p> { this.props.header.name } </p>
        <p> { this.props.header.description } </p>
        <ul className='social'>
          {this.props.social.map((icon) => (
            <li key = { icon.id }>
              <a href = { icon.url }>
                <img src = { icon.img } alt = { icon.alt } />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default Header;