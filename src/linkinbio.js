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
                    <div className="linkinbio-name">Animation VO Demo</div>
                    <div className="audioVO audioVOAlign">
                        <audio controls>
                            <source src="https://downloadanimationvo.saml.me" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>

                <div className="voice-over-container">
                    <div className="linkinbio-name">Home Studio</div>

                    <div className="home-studio-columns">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle">Studio Sample (Raw)</div>
                            <div className="audioVO">
                                <audio controls>
                                    <source src="https://homestudiosample.saml.me" type="audio/wav" />
                                </audio>
                            </div>
                        </div>

                        <div className="home-studio-column-right">
                            <div className="linkinbio-subtitle">Microphone</div>
                        Audio Technica AT2035 XLR Condenser
                        <div className="linkinbio-subtitle">Interface</div>
                        Focusrite Scarlett Solo (3rd Gen)
                    </div>
                    </div>
                </div>

                <div className="voice-over-container">
                    <div className="linkinbio-name">Training</div>
                    <div className="home-studio-columns">
                        <div className="home-studio-column">
                            <div className="linkinbio-subtitle">Animation VO Class</div>
                            <div className="training">VoiceTraxWest</div>
                            <div className="training">Susan Palyo</div>
                            <div className="training">Studio City, CA 2020</div>
                        </div>
                        <div className="home-studio-column-right">
                            <div className="linkinbio-subtitle">Improv</div>
                            <div className="training">East Bay Improv (Hayward, CA)</div>
                            <div className="training">Blacktop Comedy (Rocklin, CA)</div>
                        </div>
                    </div>

                    <div className="home-studio-columns">
                        <div className="home-studio-column" id="hide">
                            <div className="linkinbio-subtitle">Beginning Acting Course</div>
                            <div className="training">Kiba Walker</div>
                            <div className="training">Remote 2021</div>
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
