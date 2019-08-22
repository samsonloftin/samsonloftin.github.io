import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import aws from 'aws-sdk'


const url = new aws.S3({
  typeform: process.env.TYPEFORM
})

class About extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='about'>

        <div className='cover'>
          <img src={this.props.data.img} alt={this.props.data.alt} />
          <div className='aboutLinks'>
            <Link to={this.props.data.resumeurl} className='abouttitle'>
                <div>{this.props.data.resume}</div>
            </Link>
            <a href={this.props.data.giturl} className='abouttitle'>
              <div>{this.props.data.git}</div>
            </a>
            <a href={this.props.data.inurl} className='abouttitle'>
              <div>{this.props.data.in}</div>
            </a>
          </div>
        </div>

        <div className='info'>
          <div className='abouttitlebio'>{this.props.data.name}</div>
          <div className='abouttext'>{this.props.data.description}</div>

          <div className='abouttitlebio'>Contact</div>
          <div className='abouttext'>Feel free to email me at contact@samsonloftin.com or use the form below</div>
          
          <div 
            className="contactTypeform typeform-widget" data-url={url.typeform} 
            data-transparency="100" data-hide-headers={true} data-hide-footer={true}>
          </div> 
          
          <script> 
            {(() => { 
              let 
                js,
                // eslint-disable-next-line
                qs,
                // eslint-disable-next-line
                s,
                q,
                d = document,
                gi = d.getElementById,
                ce = d.createElement,
                gt = d.getElementsByTagName,
                id = "typef_orm",
                b = "https://embed.typeform.com/";
              
              if (!gi.call(d,id)) { 
                js = ce.call(d,"script");
                js.id = id;
                js.src = b + "embed.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js,q);
              } 
            })()}
          </script> 

        </div>
        

      </div>
    )
  }
}

export default About;