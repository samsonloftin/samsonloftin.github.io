import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Planet01 from "./img/planets_01.png"
import Planet02 from "./img/planets_02.png"
import Planet03 from "./img/planets_03.png"

class LinkInBio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "hide",
        };
    }

    static propTypes = {
        info: PropTypes.object.isRequired,
        socialicons: PropTypes.array.isRequired,
        link: PropTypes.array.isRequired,
        a: PropTypes.array.isRequired,
        anime: PropTypes.array.isRequired,
        about: PropTypes.object.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    revealAbout = (reveal) => {
        if (reveal === "About") {
            if (this.state.about === "hide") {
                this.setState(state => ({
                    about: "show"
                }))
            } else {
                this.setState(state => ({
                    about: "hide"
                }))
            }
        }

    }

    render() {
        return (
            <div>
                <div className="linkinbio-container">

                    <img src={Planet01} alt="planet01" className="planets" id="planet01" />
                    <img src={Planet02} alt="planet02" className="planets" id="planet02" />
                    <img src={Planet03} alt="planet03" className="planets" id="planet03" />

                    <div className="linkinbio-avatar">
                        <img
                            src={this.props.info.linkin}
                            alt={this.props.info.contactAlt}
                        />
                    </div>

                    <div className="align-center" id="linkinbio-name">Samson Loftin</div>
                    <div className="align-center" id="linkinbio-email">
                        <a href="mailto:contact@samsonloftin.com">contact@samsonloftin.com</a></div>
                    <div className="linkinbio-socials-container">
                        {this.props.socialicons.map((icons) => (
                            <div className="linkinbio-socials" key={icons.id}>
                                <img src={icons.src} alt={icons.id} />
                            </div>
                        ))}
                    </div>

                    <div className="align-center" id="linkinbio-name">Animation VO Demo</div>
                    <div className="audioVO">
                        <audio controls>
                            <source src="https://downloadanimationvo.saml.me" type="audio/mpeg" />
                            <a href="https://animation.saml.me" id="linkinbio-demo">
                                <div className="linkinbio-button">
                                    <div className="linkinbio-title">
                                        YouTube Version
                                </div>
                                </div>
                            </a>
                        </audio>

                    </div>


                    {this.props.link.map((link) => (
                        <a
                            href={link.url}
                            key={link.id}
                            onClick={() => this.revealAbout(link.id)}
                        >
                            <div className="linkinbio-button">
                                <div className="linkinbio-title">
                                    {link.id}
                                </div>
                            </div>
                        </a>
                    ))}

                    <div className="align-center" id="linkinbio-name">Instagram AR Filters</div>

                    <div className="linkinbio-ar-container">
                        {this.props.a.map((ar) => (
                            <a
                                href={ar.url}
                                key={ar.id}
                                id="linkinbio-ar-links"
                            >
                                <div className="linkinbio-button" id="linkinbio-ar">
                                    <div className="linkinbio-title">
                                        {ar.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div id="about" />
                    <div className="about-container" id={this.state.about}>
                        <div className="align-center" id="linkinbio-name">About</div>

                        <div>
                            <p>{this.props.about.first}</p>
                            <p>{this.props.about.last}</p>
                        </div>
                        {/* ABOUT SECTION END */}

                        <Link to="/timeline">
                            <div className="linkinbio-button">
                                <div className="linkinbio-title">
                                    {">>"} Explore the many redesigns of my portfolio! {"<<"}
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        );
    }
}

export default LinkInBio;
