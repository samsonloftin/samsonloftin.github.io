import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AllProjects extends Component {
  static propTypes = {
    root: PropTypes.array.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='row projects'>
        {this.props.root.map((project) => (
          <div key={project.id} tabindex='0' className='column' id={project.id}>
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