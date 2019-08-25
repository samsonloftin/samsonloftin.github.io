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
    if (project.main01 !== undefined && project.main02 === undefined && project.main03 === undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
        </div>
      )
    } else if (project.main01 !== undefined && project.main02 !== undefined && project.main03 === undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
        </div>
      )
    } else if (project.main01 !== undefined && project.main02 !== undefined && project.main03 !== undefined && project.main04 === undefined) {
      return (
        <div className='basicImageColumn'>
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
          <img src={project.main03} alt={project.main03alt} className={project.main03size} />
        </div>
      )
    } else if (project.main01 === undefined && project.main02 === undefined && project.main03 === undefined && project.main04 === undefined) {
      return
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

  videoParam = (project, video) => {

    return (
      <div className='video-container'>
          <video 
            title={project.name} aria-label={project.aria} autoPlay 
            width="560" height="315" src={video} muted 
            loop>
          </video>
      </div>
    )
  }

  youtubeParam = (project, video) => {
    return (
      <div className='video-container'>
          <iframe 
            title={project.name} aria-label={project.aria} 
            width="560" height="315" src={video} frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
      </div>
    )
  }

  isItYouTube = (project, number) => {

    if (number === 1) {
      number = project.video01
    } else {
      number = project.video02
    }

    let video = number

    if (video.startsWith('https://www.youtube.com') === true) {
      return (this.youtubeParam(project, video))
    } else {
      return (this.videoParam(project, video))
    }

  }

  howMuchFootage = (project) => {
    if (project.video01 === undefined && project.video02 === undefined) {
      return;
    } else if (project.video01 !== undefined && project.video02 === undefined) {
      return (this.isItYouTube(project, 1))
    } else {
      return (
        <div>
          {this.isItYouTube(project, 1)}
          {this.isItYouTube(project, 2)}
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