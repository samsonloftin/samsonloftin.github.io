import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListFeats extends Component {
  static propTypes = {
    feats: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='row'>
      {this.props.feats.map((feat) => (
        <a href = { feat.url } key = { feat.id } className='column'>
          <div>
            <div className='thumbnail'></div>
            <p> { feat.name } </p>
          </div>
        </a>
      ))}
      </div>
    )
  }
}

export default ListFeats;