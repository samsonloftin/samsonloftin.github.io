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

  howManyImages = (project) => {
    if (project.main02 === undefined && project.main03 === undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
        </div>
      )
    } else if (project.main02 !== undefined && project.main03 === undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
        </div>
      )
    } else if (project.main02 !== undefined && project.main03 !== undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
          <img src={project.main03} alt={project.main03alt} className={project.main03size} />
        </div>
      )
    } else {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
          <img src={project.main03} alt={project.main03alt} className={project.main03size} />
          <img src={project.main04} alt={project.main04alt} className={project.main04size} />
        </div>
      )
    }
  }

  howMuchFootage = (project) => {
    if (project.video01 !== undefined) {
      return (
        <div className='video-container'>
          <iframe 
            title={project.name} aria-label={project.aria} 
            width="560" height="315" src={project.video01} frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
      )
    }
  }
 
  render() {
    return (
      <div className='basicContainer'>

        <div className='basicTextContainer'>
          <div className='basicTextFixed'>
            <div className='basicTitle'>{this.props.projectData.name}</div>

            <p className='basicDesc'>
              {this.props.projectData.longdesc}
            </p>
          </div>
        </div>

        <div className='basicImageContainer'>
          {this.howManyImages(this.props.projectData)}

          {this.howMuchFootage(this.props.projectData)}
        </div>
        
      </div>
    )
  }
}

export default Basic;