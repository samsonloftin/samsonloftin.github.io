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

  vimeoParam = (project, video) => {
    const videoUrl = 'https://player.vimeo.com/video/' + video + '?title=0&byline=0&portrait=0' 

    return (
      <div className='video-container'>
          <iframe src={videoUrl} 
            title={project.name} aria-label={project.aria} frameborder="0" 
            allow="autoplay; fullscreen" allowfullscreen>
            </iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    )
  }

  isItVimeo = (project, number) => {

    if (number === 1) {
      number = project.video01
    } else {
      number = project.video02
    }

    let video = number

    if (video.startsWith('./img/projects/') === true) {
      return (this.videoParam(project, video))
    } else {
      return (this.vimeoParam(project, video))
    }

  }

  howMuchFootage = (project) => {
    if (project.video01 === undefined && project.video02 === undefined) {
      return;
    } else if (project.video01 !== undefined && project.video02 === undefined) {
      return (this.isItVimeo(project, 1))
    } else {
      return (
        <div>
          {this.isItVimeo(project, 1)}
          {this.isItVimeo(project, 2)}
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