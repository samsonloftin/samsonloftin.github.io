import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class ListProjects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  // Builds the thumbnail for each project
  buildProjectThumbnail = (project) => {
    return (
      <div className='thumbnail'>
        <div className='hoverOverThumbnail'>
          <div className='thumbnailTitle'>{project.name}</div>
          <div className='thumbnailDesc'>{project.desc}</div>
        </div>
        <img src={project.thumb} alt={project.thumbalt} />
      </div>
    )
  }

  // This determines if the project is linking to an external site
  // <A> for external
  // <Link> for internal
  externalLink = (project) => {
    const url = project.url

    if (url.startsWith('http') === true) {
      return (
        <a href={project.url} aria-labelledby={project.aria} key={project.id} tabIndex='0' className='column' id={project.id}>
          {this.buildProjectThumbnail(project)}
        </a>
      )
    } else {
      return (
        <Link to={project.url} aria-labelledby={project.aria} key={project.id} tabIndex='0' className='column' id={project.id}>
          {this.buildProjectThumbnail(project)}
        </Link>
      )
    }
  }

  render() {
    return (
        <div className='row'>
          {this.props.data.map((project) => {
            return this.externalLink(project)
          })}
      </div>
    )
  }
}

export default ListProjects;