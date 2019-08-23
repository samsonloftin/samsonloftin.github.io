import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Basic extends Component {

  static propTypes = {
    projectData: PropTypes.object.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div>
        <h1>{this.props.projectData.name}</h1>

        <p className='text-container'>
          {this.props.projectData.desc}
        </p>
        
      </div>
    )
  }
}

export default Basic;