import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

require('dotenv').config()

const api = process.env.formAPI;
const apiPass = process.env.formPass;


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


  // Validates Email by checking
  // @ before the dot
  // No @ after the @
  // At least 3 characters before the dot
  // At least two characters after the dot
  checkEmail() {
    let email = this.state.emailValue
    let atPosition = email.lastIndexOf('@');
    let dotPosition = email.lastIndexOf('.');
    return (atPosition < dotPosition && atPosition > 0 && email.indexOf('@@') === -1 && dotPosition > 2 && (email.length - dotPosition) > 2);
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
      event.preventDefault();
    } else if (this.checkEmail() === false) {
      this.setState(
        {
          isRequired: 'Not a valid email address',
        }
      )
      event.preventDefault();
    } else {
      this.setState(
        {
          isSubmitted: true,
        }
      )

      this.formDataPost(this.state.nameValue, this.state.emailValue, this.state.messageValue);
      event.preventDefault();
    }
  };

  formDataPost = (name, email, message) => {
    const user = 'https://samsonloftin.wufoo.com/api/v3/forms/z15lm0o70p8t972/entries.json';
    const request = require("request");
    
    request({
      uri: user,
      method: 'POST',
      auth: {
        'username': api,
        'password': apiPass,
        'sendImmediately': false
      },
      form: {
        'Field1' : name,
        'Field2' : email,
        'Field3' : message,
      }
    }, function(error, response, body) {
      console.log(body);
    })
  }


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