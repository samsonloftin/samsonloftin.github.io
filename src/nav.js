import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navigation extends Component {
  static propTypes = {
    social: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="navigation-container">
        <div className="nav-home">
          <Link to="/" className="navigation-signature">
            Samson Loftin
          </Link>
        </div>
        <div className="navlink-container">
          <div className="navlink-media-icons">
            {this.props.social.map((icon) => (
              <a
                key={icon.id}
                id={icon.id}
                tabIndex="0"
                href={icon.url}
                aria-labelledby={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon.img} alt={icon.alt} />
              </a>
            ))}
          </div>
          <div className="menu">
            <Link to="/" className="inBio-Title" id="nav-title">
              Home
            </Link>
            <Link to="/about" className="inBio-Title" id="nav-title">
              About
            </Link>
            <a
              href="https://samsonloftin.typeform.com/to/SIz5ax"
              tabIndex="0"
              id="contact-button"
              className="typeform-share link"
              data-mode="drawer_left"
              data-hide-headers={true}
              data-hide-footer={true}
              data-submit-close-delay="1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
        <script>
          {" "}
          {(function () {
            var js,
              q,
              d = document,
              gi = d.getElementById,
              ce = d.createElement,
              gt = d.getElementsByTagName,
              id = "typef_orm_share",
              b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
              js = ce.call(d, "script");
              js.id = id;
              js.src = b + "embed.js";
              q = gt.call(d, "script")[0];
              q.parentNode.insertBefore(js, q);
            }
          })()}{" "}
        </script>
      </div>
    );
  }
}

export default Navigation;
