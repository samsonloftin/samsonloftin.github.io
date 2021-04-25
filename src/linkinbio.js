import React, { Component } from "react";
import aDemo from "./img/2020_AnimationDemo.mp4";
import homeDemo from "./img/HomeAudioSample.wav";
import aDemoDwn from "./img/animation-vo-demo.mp3";
class LinkInBio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    revealVideo = () => {
        document.getElementById("video-thumbnail-demo").style.display = "none";
        document.getElementById("video-demo").style.display = "flex";
    }

    render() {
        return (
            <div>
                <div className="voice-over-container">

                    <div className="video-flexbox" tabIndex="0">
                        <div className="video-container" id="video-container-full">
                            <video className="youtube-container" id="video-demo" controls>
                                <source className="youtube-video" title="animation vo demo" src={aDemo} type="video/mp4"/>
                            </video>
                            <a href={aDemoDwn}>Download Demo</a>
                        </div>
                    </div>

                </div>

                <div className="voice-over-container">
                    <div className="linkinbio-name" tabIndex="0">Home Studio</div>

                    <div className="home-studio-columns">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle" tabIndex="0">Studio Sample (Raw)</div>
                            <div className="audioVO" tabIndex="0">
                                <audio controls>
                                    <source src={homeDemo} type="audio/wav" />
                                </audio>
                            </div>
                        </div>

                        <div className="home-studio-column-right">
                            <div className="linkinbio-subtitle" tabIndex="0">Microphone</div>
                        Audio Technica AT2035 XLR Condenser
                        <div className="linkinbio-subtitle" tabIndex="0">Interface</div>
                        Focusrite Scarlett Solo (3rd Gen)
                    </div>
                    </div>
                </div>

                <div className="voice-over-container">
                    <div className="linkinbio-name" tabIndex="0">Training</div>
                    <div className="home-studio-columns">
                    <a href="http://www.voicetraxwest.com/" id="classes">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle" tabIndex="0">Animation VO Class</div>
                            <div className="training" tabIndex="0">VoiceTraxWest</div>
                            <div className="training link-emphasis" tabIndex="0">Susan Palyo</div>
                            <div className="training" tabIndex="0">Studio City, CA 2020</div>
                        </div>
                        </a>
                        <div className="home-studio-column-right">
                            <div className="linkinbio-subtitle" tabIndex="0">Improv</div>
                            <div className="training" tabIndex="0">East Bay Improv (Hayward, CA)</div>
                            <div className="training" tabIndex="0">Blacktop Comedy (Rocklin, CA)</div>
                        </div>
                    </div>

                    <div className="home-studio-columns">
                        <a href="https://www.kibawalkervoices.com/" id="classes">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle" tabIndex="0">Beginning Acting Course</div>
                            <div className="training link-emphasis" tabIndex="0">Kiba Walker</div>
                            <div className="training" tabIndex="0">Remote 2021</div>
                        </div>
                        </a>
                        <div className="home-studio-column-right">
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default LinkInBio;
