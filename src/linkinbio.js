import React, { Component } from "react";

class LinkInBio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="voice-over-container">

                <div className="video-flexbox" tabIndex="0">
                        <div className="video-container" id="video-container-full">
                            <div className="youtube-container">
                                <iframe className="youtube-video" title="animation vo demo" src="https://www.youtube.com/embed/Z211xH2LbV4" allowFullScreen />
                            </div>
                            <a href="https://downloadanimationvo.saml.me">Download Demo</a>
                        </div>
                </div>

                </div>

                <div className="voice-over-container">
                    <div className="linkinbio-name"  tabIndex="0">Home Studio</div>

                    <div className="home-studio-columns">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle"  tabIndex="0">Studio Sample (Raw)</div>
                            <div className="audioVO"  tabIndex="0">
                                <audio controls>
                                    <source src="https://homestudiosample.saml.me" type="audio/wav" />
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
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle" tabIndex="0">Animation VO Class</div>
                            <div className="training" tabIndex="0">VoiceTraxWest</div>
                            <div className="training" tabIndex="0">Susan Palyo</div>
                            <div className="training" tabIndex="0">Studio City, CA 2020</div>
                        </div>
                        <div className="home-studio-column-right">
                            <div className="linkinbio-subtitle" tabIndex="0">Improv</div>
                            <div className="training" tabIndex="0">East Bay Improv (Hayward, CA)</div>
                            <div className="training" tabIndex="0">Blacktop Comedy (Rocklin, CA)</div>
                        </div>
                    </div>

                    <div className="home-studio-columns">
                        <div className="home-studio-column" id="hide">
                            <div className="linkinbio-subtitle" tabIndex="0">Beginning Acting Course</div>
                            <div className="training" tabIndex="0">Kiba Walker</div>
                            <div className="training" tabIndex="0">Remote 2021</div>
                        </div>
                        <div className="home-studio-column-right">
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default LinkInBio;
