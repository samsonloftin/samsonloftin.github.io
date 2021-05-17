import React, { Component } from "react";
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
                        <p>Hello! I'm Samson Loftin, I'm a black voice actor based in Los Angeles, CA. I enjoy exploring different ways to entertain people from voice acting, <a href="https://youtube.saml.me">creating video & animation</a> and <a href="https://ar.saml.me">designing AR Filters</a>! I really love making people laugh & smile. It's really cheesy, but its what motivates me to keep creating.</p>
                        <p>My journey started in 2006, when I started learning how to create <a href="https://samsonloftin.newgrounds.com/movies">my own animations</a>. For the first time, I was able to animate my own animations & voice my own characters. I've animated over 50+ animation & shorts with nearly 70+ characters voiced. (Always fun to cast yourself, haha) </p>
                        <p>In late 2019, I moved to LA, unrelated to voice acting, but I did find it to be a perfect opportunity to pursue voice acting professionally and hopefully voice in anime & games! </p>
                        <p>I appreciate you taking the time to go through my about page. Feel free to contact me <a href="mailto:contact@samsonloftin.com">contact@samsonloftin.com</a></p>
                        <p>- Samson Loftin</p>
                    </div>
                    {/* ABOUT SECTION END 

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
                    */}
                </div>
            </div>
        );
    }
}

export default About;
