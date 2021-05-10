import React, { Component } from "react";
import PropTypes from "prop-types";
import aDemo from "./img/2021_Demo_Animated.mp4";
import aDemoPic from "./img/video/animation2021.jpg"

class Other extends Component {
    static propTypes = {
        a: PropTypes.array.isRequired,
        web: PropTypes.array.isRequired,
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
                <div className="align-center linkinbio-name" tabIndex="0">Instagram AR Filters</div>

                <div className="ar-flexbox">
                    {this.props.a.map((ar) => (
                        <a
                            href={ar.url}
                            key={ar.id}
                            tabIndex="0"
                        >
                            <video className="ar-video" poster={ar.poster} autoPlay playsInline muted loop tabIndex="0">
                                <source src={ar.video} type="video/mp4" />
                                <img src={ar.poster} alt="ar.id" />
                            </video>
                            <div className="linkinbio-subtitle">{ar.title}</div>
                        </a>
                    ))}
                </div>

                <div className="align-center linkinbio-name" tabIndex="0">Animation Demo</div>

                <div className="video-flexbox" tabIndex="0">
                        <div className="video-container" id="video-container-full">
                            <video className="youtube-container" id="video-demo" controls poster={aDemoPic}>
                                <source className="youtube-video" title="animation vo demo" src={aDemo} type="video/mp4"/>
                            </video>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Other;
