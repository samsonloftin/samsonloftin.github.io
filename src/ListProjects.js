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

  render() {
    return (
      <div className='row'>
        {this.props.data.map((project) => (
          <Link to={project.url} key={project.id} tabIndex='0' className='column' id={project.id} aria-labelledby={project.aria}>
            <div className='thumbnail'>
              <div className='hoverOverThumbnail'>
                <div className='thumbnailTitle'>{project.name}</div>
                <div className='thumbnailDesc'>{project.desc}</div>
              </div>
              <img src={project.img} alt={project.alt} />
            </div>
          </Link>
        ))}
     </div>
    )
  }
}

export default ListProjects;