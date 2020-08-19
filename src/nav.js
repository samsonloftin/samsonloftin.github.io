import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navigation extends Component {

  static propTypes = {
    social: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className='navigation-container'>
        <div className='navigation-subcontainer'>
          <Link to='/' className='navigation-signature'>Samson Loftin</Link>
          <div className='navigation-menu'>
          <div className="socialmedia">
              {this.props.social.map((icon) => (
                <a
                  key={icon.id}
                  tabIndex="0"
                  href={icon.url}
                  aria-labelledby={icon.alt}
                >
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
            <a href='https://samsonloftin.typeform.com/to/SIz5ax' className='contact-nav typeform-share link' data-mode="drawer_left" data-hide-headers={true} data-hide-footer={true} data-submit-close-delay="1" target="_blank" rel="noopener noreferrer">Contact</a>
            <script> {(function() { var js,q,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()} </script>
          </div>
          </div>
      </div>
    )
  }
}

export default Navigation;