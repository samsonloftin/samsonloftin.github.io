import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AllProjects extends Component {
  static propTypes = {
    root: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='row projects'>
        {this.props.root.map((project) => (
          <div key={project.id} className='column' id={project.id}>
            <a href={project.url}>
              <img src={project.img} alt={project.alt} className='thumbnail' />
              <h3 className='title'>{project.name}</h3>
            </a>
          </div>
        ))}
     </div>
    )
  }
}

export default AllProjects;