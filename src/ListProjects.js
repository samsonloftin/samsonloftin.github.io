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

  isThereAURL = (project) => {
    if (project.url !== undefined) {
      if(project.url.includes('http') === true) {
        return (
          <a href={project.url}>
            <img src={project.img} alt={project.alt} className='thumbnail' />
            <h3 className='title'>{project.name}</h3>
          </a>
        )
      } else {
        return (
            <Link to={project.url}>
            <img src={project.img} alt={project.alt} className='thumbnail' />
            <h3 className='title'>{project.name}</h3>
          </Link>
        )
      }
    } else {
      return (
      <div>
        <img src={project.img} alt={project.alt} className='thumbnail' />
        <h3 className='title'>{project.name}</h3>
      </div>
      )
    }
  }

  render() {
    return (
      <div className='row projects'>
        {this.props.data.map((project) => (
          <div key={project.id} tabIndex='0' className='column' id={project.id} aria-labelledby={project.aria}>
            {this.isThereAURL(project)}
          </div>
        ))}
     </div>
    )
  }
}

export default ListProjects;