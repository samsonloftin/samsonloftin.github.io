import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    social: PropTypes.array.isRequired,
    feats: PropTypes.array.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.data)
    return (
      <div className='about'>

        <div className='cover'>
          <img src={this.props.data.img} alt={this.props.data.alt} />
        </div>

        <div className='info'>

          <div className='bio'>
            <div className='abouttitle'>{this.props.data.name}</div>
            <div>{this.props.data.description}</div>
            <div className='abouttitle'>{this.props.data.emailTitle}</div>
            <div>{this.props.data.email}</div>
            <div className='abouttitle'>{this.props.data.feats}</div>
            {this.props.feats.map((feat) => (
              <a href={feat.url} key={feat.id} className='feats'>
                <div>{feat.name}</div>
              </a>
            ))}
            {this.props.social.map((icon) => (
                  <a href={icon.url}>
                    <img src={icon.img}  alt={icon.alt} className='social' />
                  </a>
            ))}
          </div>
          
          <div className='skills'>
            <div className='abouttitle'>{this.props.data.skills}</div>
            <div>{this.props.data.code}</div>
            <div>{this.props.data.art}</div>
          </div>

        </div>
      </div>
    )
  }
}

export default About;