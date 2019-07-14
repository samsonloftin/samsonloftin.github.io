import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    social: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        <p>Samson Loftin</p>
        <p>I love building apps, which share positivity & bring joy to others! - Samson Loftin</p>
        <ul>
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