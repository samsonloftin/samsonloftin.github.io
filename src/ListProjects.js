import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListProjects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  render() {
    return (
      <ul>
        {this.props.projects.map((project) => (
          <a href = { project.url } key = { project.id }>
            <li>
              <p> { project.name } </p>
            </li>
          </a>
        ))}
      </ul>
    )
  }
}

export default ListProjects;