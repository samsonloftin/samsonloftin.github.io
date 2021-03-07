import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import aboutIMG from "./img/aboutimg.gif"

class About extends Component {
    static propTypes = {
        link: PropTypes.array.isRequired,
        about: PropTypes.object.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="about-container" id={this.props.about}>
                    <img src={aboutIMG} alt="Samson" className="aboutImage" />
                    <div className="align-center linkinbio-name">About</div>

                    <div tabIndex="0">
                        <p>Welcome I'm Samson Loftin! I'm a voice-actor, video editor, frontend programmer, and creator of a lot of other things. I enjoy exploring various avenues of entertaining people because I really love making people laugh & smile. It's really cheesy, but its what motivates me to keep creating.</p>
                        <p>My journey started in 2006, when I started learning how to create <a href="https://samsonloftin.newgrounds.com/movies">my own animations</a>. For the first time, I was able to animate my own animations & voice my own characters. I've animated over 50+ animation & shorts with nearly 70+ characters voiced. </p>
                        <p>In 2013, I went to CSU East Bay in Hayward, CA for a BA in Multimedia. There I improved my skills in video editing, frontend programming, and improv. After graduating in 2015, I utilized my skills as an animator to create motion graphic and continued to improve my skills in video editing and frontend programming. It was also when I started to consider myself a professional in the industry because I started accepting clients for paid work.</p>
                        <p>In late 2019, I moved to LA, which ended up being a perfect opportunity to go professional with my voice-acting career that I started back in 2006, which leads me here in 2021. I'm still expanding my skills in voice-acting, video editing, animations, motion graphics, and I'm still learning new skills like AR (Augmented Reality) filters! </p>
                        <p>I appreciate you taking the time to go through my about page. I wanted to make sure I captured my journey that I started a decade and a half ago. </p>
                        <p>- Samson Loftin</p>
                    </div>
                    {/* ABOUT SECTION END */}

                    <div className="listRow" id="aboutRow">
                        {this.props.link.map((link) => (
                            <Link
                                to={link.url}
                                key={link.id}
                            >
                                <div className="listButtons" id="aboutButtons">
                                    <div className="linkinbio-title">
                                        {link.id}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
