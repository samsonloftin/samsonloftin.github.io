import React, { Component } from 'react'
import { resumeData } from './resumeData'

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Resume Data
      header: resumeData.header,
      skills: resumeData.skills,
      feat: resumeData.feat,
      art: resumeData.projectArt,
      experience: resumeData.experience,
      education: resumeData.education,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  // Only adds a list item to strings that arent empty
  isItEmpty = (text) => {
    if (text === '') {
      return ''
    } else {
      return (
        <li> { text } </li>
      )
    }
  }

  listArray = (item) => (
    <li key={item}> { item } </li>
  )

  header = (section) => {
    switch(section) {
      case 'skills':
        return this.state.header.skills
      case 'feat':
        return this.state.header.feat
      case 'tools':
        return this.state.header.tools
      case 'lang':
        return this.state.header.lang
      case 'framework':
        return this.state.header.framework
      default:
        return ''
    }
  }

  skills = (section) => {
    switch(section) {
      case 'skills':
        return this.state.skills.skills.map(this.listArray)
      case 'feat':
        return this.state.skills.feat.map(this.listArray)
      case 'tools':
        return this.state.skills.tools.map(this.listArray)
      case 'lang':
        return this.state.skills.lang.map(this.listArray)
      case 'framework':
        return this.state.skills.framework.map(this.listArray)
      default:
        return ''
    }
  }

  
  singleline = (section) => {
    switch(section) {
      case 'skills':
        return this.state.skills.skills.toString()
      case 'feat':
        return this.state.skills.feat.toString()
      case 'tools':
        return this.state.skills.tools.toString()
      case 'lang':
        return this.state.skills.lang.toString()
      case 'framework':
        return this.state.skills.framework.toString()
      default:
        return ''
    }
  }

  smSection = (section, sidebar) => {
    return (
      <div className={'resume' + section + sidebar}>
        <div className='resumeTitles'> { this.header(section) } </div>
        <ul className='noBulletPoint'> { this.skills(section) } </ul>
      </div>
    )
  }

  singleLineList = (section) => {
    return (
      <div className='resumeline'>
        <p><span className='resumeSmallerSubtitles'> { this.header(section) } </span> : { this.singleline(section) } </p>
      </div>
    )
  }

  feat = (sidebar) => {
    return (
      <div className={'resumefeat' + sidebar}>
        <div className='resumeTitles'> { this.state.header.feat } </div>
        <div className='resumeSmallerSubtitles'> { this.state.feat.name } </div>
        <ul>
          <li> { this.state.feat.p1 } </li>
          <li> { this.state.feat.p2 } </li>
        </ul>
     </div>
    )
  }

  education = (sidebar) => {
    return (
      <div className={'resumeEducation' + sidebar}>
        <div className='resumeTitles'> { this.state.header.education } </div>
        <div className='resumeEducationFlex'>
          {this.state.education.map((education) => (
            <div key={education.id} tabIndex='0' aria-labelledby={education.name} className='resumeSchools'>
              <div className='resumeSmallerSubtitles'> {education.degree} </div>
              <p> {education.school} </p>
              <p> {education.date} </p>
            </div>
          ))}
        </div>  
     </div>
    )
  }

  render() {
    return (
      <div className='resume'>

        { /* Header */ }
        <div className='resumeHeader'>
          <div className='resumeSelf'>
            <div className='resumeSelfName'> <span className='resumeSelfTitleColor'>{ this.state.header.first }</span>{ this.state.header.last } </div>
            <div className='resumeSelfTitle'> { this.state.header.titleMultimedia } </div>
          </div>
          <div className='resumeSelfSubHeader'> { this.state.header.subheader } </div>
        </div>

      <div className='resumeContainer'>
        <div className='resumeLeftSidebar'>

          <div className='resumetopskill'>
            <div className='resumeTitles'> { this.state.header.skills } </div>
            { this.singleLineList('skills') }
            { this.singleLineList('tools') }
            { this.singleLineList('lang') }
          </div>

            { /* Projects */ }
            <div className='resumeProjects'>
              <div className='resumeTitles'> { this.state.header.projects } </div>

              { /* Art Projects */ }
              {this.state.art.map((project) => (
                <div key={project.id} tabIndex='0' aria-labelledby={project.name}>
                  <div className='resumeSubtitles'> {project.name} </div>
                  <a href={project.url}> {project.url} </a>
                  <ul>
                    { this.isItEmpty(project.p1) }
                    { this.isItEmpty(project.p2) }
                    { this.isItEmpty(project.p3) }
                  </ul>
                </div>
              ))}
            </div>

          { /* Experience */ }
          <div className='resumeExp'>
            <div className='resumeTitles'> { this.state.header.experience } </div>
            {this.state.experience.map((experience) => (
              <div key={experience.id} tabIndex='0' aria-labelledby={experience.name}>
                <div className='resumeSubtitles'> {experience.company} </div>
                <div className='resumeExpPosition'> {experience.position + ' ' + experience.date}</div>
                <a href={experience.url}> {experience.url} </a>
                <ul>
                  { this.isItEmpty(experience.p1) }
                  { this.isItEmpty(experience.p2) }
                  { this.isItEmpty(experience.p3) }
                </ul>
              </div>
            ))}
          </div>

          { /* Education */ }
          { this.education('Left') }

          { /* Feat */ }
          { this.feat('left') }
        </div>

        <div className='resumeRightSidebar'>
            { /* Skills */ }
            { this.smSection('skills', 'right') }

            { /* Tools */ }
            { this.smSection('tools', 'right') }

            { /* Lang */ }
            { this.smSection('lang', 'right') }

            { /* Education */ }
            { this.education('Right') }

            { /* Feat */ }
            { this.feat('right') }
        </div>

      </div>
      </div>
    )
  }

}

export default Resume;