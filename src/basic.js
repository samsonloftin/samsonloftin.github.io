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

  externalLink = (project) => {
    if (project.link !== undefined) {
      return (
        <a href={project.link} className='basiclink'>
           {project.linkdesc}
        </a>
      )
    }

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
          src={video} muted
          loop>
        </video>
      </div>
    )
  }

  vimeoParam = (project, video) => {
    const videoUrl = 'https://player.vimeo.com/video/' + video + '?title=0&byline=0&portrait=0' 

    return (
      <div className='videocontainervimeo'>
          <iframe src={videoUrl} 
            title={project.name} aria-label={project.aria} frameBorder="0" 
            allow="autoplay; fullscreen" allowFullScreen>
          </iframe>
      </div>
    )
  }

  isItVimeo = (project, number) => {
    let video;

    if (number === 'one') {
      video = project.video01
    } else {
      video = project.video02
    }

    if (video.endsWith('mp4') === true) {
      return (this.videoParam(project, video))
    } else {
      return (this.vimeoParam(project, video))
    }

  }

  howMuchFootage = (project) => {

    if (project.video01 === undefined && project.video02 === undefined) {
      return;
    } else if (project.video01 !== undefined && project.video02 === undefined) {
      return (
        <div className='spacer'>
          {this.isItVimeo(project, 'one')}
        </div>
      )
    } else {
      return (
        <div>
          {this.isItVimeo(project, 'one')}
          {this.isItVimeo(project, 'two')}
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
              {this.externalLink(this.props.projectData)}
            </p>
          </div>
        </div>

        <div className='basicImageContainer'>
          {this.howManyImages(this.props.projectData)}

          {this.howMuchFootage(this.props.projectData)}
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        
      </div>
    )
  }
}

export default Basic;