import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Basic extends Component {

  static propTypes = {
    projectData: PropTypes.object.isRequired,
    casestudy: PropTypes.object.isRequired,
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
        <p className='basicDesc'>
          <a href={project.link} className='basiclink'>
            {project.linkdesc}
          </a>
        </p>
      )
    }

  }

  thisManyImages = (project, number) => {
    switch (number) {
      case 1:
        return (
          <img src={project.main01} alt={project.main01alt} className={project.main01size} />
        )
      case 2:
        return (
          <img src={project.main02} alt={project.main02alt} className={project.main02size} />
        ) 
      case 3:
        return (
          <img src={project.main03} alt={project.main03alt} className={project.main03size} />
        ) 
      case 4:
        return (
          <img src={project.main04} alt={project.main04alt} className={project.main04size} />
        )
      case 5:
        return (
          <img src={project.main05} alt={project.main05alt} className={project.main05size} />
        )
      case 6:
        return (
          <img src={project.main06} alt={project.main06alt} className={project.main06size} />
        ) 
      default:
        break;
    }


  }

  howManyImages = (project) => {
    return (
      <div>
        {this.thisManyImages(project, 1)}
        {this.thisManyImages(project, 2)}
        {this.thisManyImages(project, 3)}
        {this.thisManyImages(project, 4)}
        {this.thisManyImages(project, 5)}
        {this.thisManyImages(project, 6)}
        {this.thisManyImages(project, 7)}
      </div>
    )
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

  youtubeParam = (project, video) => {
    const videoUrl = video 

    return (
      <div className='videocontainervimeo'>
          <iframe src={videoUrl} 
            title={project.name} aria-label={project.aria} frameBorder="0" 
            allow="autoplay; encrypted-media; fullscreen" allowFullScreen>
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
    } else if (video.startsWith('https://www.youtube.com/embed') === true) {
      return (this.youtubeParam(project, video))
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
                <div className='basicTitle'>
                  {this.props.projectData.name}
                </div>

                <p className='basicDesc'>
                  {this.props.projectData.longdesc}
                </p>

                <div className='basicTitleCase'>{ this.props.projectData.title01 }</div>
                <p className='basicDesc'>{ this.props.projectData.desc01 }</p>

                {this.externalLink(this.props.projectData)}

          </div>
        </div>

        <div className='basicImageContainer'>
          {this.howMuchFootage(this.props.projectData)}
          {this.howManyImages(this.props.projectData)}
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        
      </div>
    )
  }
}

export default Basic;