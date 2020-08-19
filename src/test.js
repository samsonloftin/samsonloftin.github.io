import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { inBio } from "./inBioData";
import banner from "./img/banner.jpeg";
import avatar from "./img/contact_pic.jpg";
import social from "./img/instagram.png";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // About
      social: inBio.social,
      links: inBio.links,
      demo: inBio.voice,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="inBio-Container">
        <div className="inBio-Header">
          {/* Banner */}
          <div className="inBio-Banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="inBio-Avatar">
            <img src={avatar} alt="bio" />
          </div>

          <div className="inBio-Information">
            <div className="inBio-Name">Samson Loftin</div>

            <div className="inBio-Location">Los Angeles</div>

            <div className="inBio-Bio">It Me!</div>

            <div className="inBio-Social-Container">
              {this.state.social.map((isocial) => (
                <a href={isocial.url} id={isocial.id} key={isocial.id}>
                  <div className="inBio-Social">
                    <img src={isocial.img} alt={isocial.alt} />
                  </div>
                </a>
              ))}
              <a
                href="https://samsonloftin.typeform.com/to/SIz5ax"
                className="inBio-Social typeform-share link"
                id="Social-Contact"
                data-mode="drawer_left"
                data-hide-headers={true}
                data-hide-footer={true}
                data-submit-close-delay="1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
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
            {/* End of inBio-Social-Container*/}
          </div>
          {/* End of inBio-Information*/}
        </div>
        {/* End of inBio-Header*/}

        <div className="inBio-Panels">
          <div className="inBio-Panel" id="video">
            <iframe
              id="animation"
              title="title"
              src="https://www.youtube-nocookie.com/embed/JdaJhq82RP4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a className="inBio-Title" href={this.state.demo.demoAdwn}>
              Download Animation Demo
            </a>
          </div>

          {this.state.links.map((link) => (
            <a href={link.url} id={link.id} key={link.id}>
              <div className="inBio-Panel">
                <div className="inBio-Info">
                  <div className="inBio-Thumbnail">
                    <img src={link.img} alt={link.alt}></img>
                  </div>
                  <div className="inBio-Title">{link.title}</div>
                  <div className="inBio-Subtitle">{link.subtitle}</div>
                </div>
              </div>
            </a>
          ))}

          <div className="inBio-Footer">
            Copyright 2020 - Created by Samson Loftin
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
