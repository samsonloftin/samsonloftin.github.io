import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListFeats extends Component {
  static propTypes = {
    feats: PropTypes.array.isRequired,
  }

  render() {
    return (
      <ul>
      {this.props.feats.map((feat) => (
        <a href = { feat.url } key = { feat.id }>
          <li>
            <p> { feat.name } </p>
          </li>
        </a>
      ))}
      </ul>
    )
  }
}

export default ListFeats;