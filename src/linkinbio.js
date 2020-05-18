import React, { Component } from "react";
import PropTypes from "prop-types";

class LinkInBio extends Component {
  static propTypes = {
    linkinbio: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
    linkinbioMisc: PropTypes.object.isRequired,
    linkinbioAR: PropTypes.array.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    window.onload = () => {
      let navigation = document.querySelector(".navigation-bar");
      let footer = document.querySelector(".footer");

      navigation.style.display = "none";
      footer.style.display = "none";
    };

    return (
      <div className="section">
        <div className="section-container">
          <div className="linkinbio-container ">
            <div className="linkinbio-header">
              <div className="linkinbio-avatar">
                <img
                  src={this.props.linkinbioMisc.igpic}
                  alt={this.props.linkinbioMisc.igpicalt}
                />
              </div>
              <div className="linkinbio-name">
                {this.props.linkinbioMisc.name}
              </div>
              <div className="linkinbio-tag">
                {this.props.linkinbioMisc.igtag}
              </div>
              <div className="linkinbio-social">
                {this.props.social.map((social) => (
                  <a
                    key={social.id}
                    tabIndex="0"
                    href={social.url}
                    aria-labelledby={social.alt}
                  >
                    <img
                      src={social.img}
                      alt={social.alt}
                      className="linkinbio-social-icon"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="linkinbio-divider" />
            <div className="linkinbio-title">AR Filters</div>
            <div className="linkinbio-main-ar">
              {this.props.linkinbioAR.map((ar) => (
                <a href={ar.arurl} id={ar.id}>
                  <div className="linkinbio-rect-padding">
                    <div className="linkinbio-rect">{ar.artitle}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="linkinbio-divider" />
            <div className="linkinbio-title">Posts</div>

            <div className="linkinbio-main">
              {this.props.linkinbio.map((link) => (
                <a href={link.url} id={link.id}>
                  <div className="linkinbio-post">
                    <img src={link.pic} alt={link.alt} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkInBio;
