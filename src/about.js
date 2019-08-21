import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Wufoo from './wufoo'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charLe: 700,
      nameValue: '',
      namePlace: 'Name',
      emailValue: '',
      emailPlace: 'Email',
      messageValue: '',
      messagePlace: 'Message',
      isRequired: '',
      bigStyle: '1em',
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    social: PropTypes.array.isRequired,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(event) {
    if (event.target.placeholder === 'Name') {

      if (event.target.value === '') {
        this.setState(
          {
            namePlace: 'Please add your name in this field',
          }
        )
      } else {
        this.setState(
          {
            nameValue: event.target.value,
          }
        )
      }

    } else if (event.target.placeholder === 'Email') {

      if (event.target.value === '') {
        this.setState(
          {
            emailPlace: 'Please add your email in this field',
          }
        )
      } else {
        this.setState(
          {
            emailValue: event.target.value,
          }
        )
      }

    } else {
      let length = event.target.value.length;
      let maxlength = 700 - length;

      if (event.target.value === '') {
        this.setState(
          {
            charLe: maxlength,
            messagePlace: 'Please add your name in this field',
          }
        )
      } else {
        this.setState(
          {
            charLe: maxlength,
            messageValue: event.target.value,
          }
        )
      }
      
    }
  }

  handleSubmit(event) {
    if (this.state.nameValue === '' || this.state.emailValue === '' || this.state.messageValue === '') {
      let start = this.state.bigStyle
      let removeEm = start.replace('em', '')
      let number = Number(removeEm);
      let increase = .1;
      let newNumber = number + increase
      let style = newNumber.toFixed(2) + 'em';
      
      this.setState(
        {
          isRequired: 'All fields are required, thank you!',
          bigStyle: style,
        }
      )
    } else {
      this.setState(
        {
          isSubmitted: true,
        }
      )

      Wufoo.post(this.formData());

    }

    event.preventDefault();
  };

  formData = () => ({
    'Field1': this.state.nameValue,
    'Field2': this.state.emailValue,
    'Field3': this.state.messageValue,
  })


  render() {

    const submitted = this.state.isSubmitted;
    let form;

    if (submitted) {
      form = (
        <div className='contactFormThanks'>Thank you! I'll try to contact you ASAP!</div>
      )
    } else {
      form = (
        <form onSubmit={this.handleSubmit} className='contactForm'>
          <label className='contactFormTitle'>Contact</label>

          <div className='contactInfo'>
            <input type='text' placeholder={this.state.namePlace} className='contactName' onChange={this.handleChange} />
            <input type='text' placeholder={this.state.emailPlace} className='contactEmail' onChange={this.handleChange} />
          </div>

          <textarea placeholder={this.state.messagePlace} maxLength='700' onChange={this.handleChange} className='contactMessage' />
          <div className='underthebox'>
            <label className='contactcharleft' style={{ fontSize: this.state.bigStyle }}>{this.state.isRequired}</label>
            <label className='contactchar'>Characters left: {this.state.charLe}</label>
          </div>
          <input type='submit' value='Submit' className='contactSubmit' />
        </form>
      )
    }

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
          <div className='abouttext2'>Feel free to email me at contact@samsonloftin.com or use the form below</div>

        </div>

        {form}

      </div>
    )
  }
}

export default About;