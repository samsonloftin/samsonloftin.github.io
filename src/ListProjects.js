import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListProjects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className='row projects'>
        {this.props.data.map((project) => (
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

export default ListProjects;