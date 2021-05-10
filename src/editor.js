import React, { Component } from "react";
import PropTypes from "prop-types";
import playOff from "./img/video/youtubeOff.png"
import playOn from "./img/video/youtubeOn.png"

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playButton: playOff,
            on: playOn,
            off: playOff,
        };
    }

    static propTypes = {
        video: PropTypes.array.isRequired,
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    playButton(e, status) {
        let button = e.target;
        button.src = status;
    }

    youTubeVideo = (e, url) => {
        let button = e.target.parentElement;
        button.setAttribute("id", "hide");

        let videoC = button.parentElement;
        console.log(videoC.querySelector(".youtube-container").childNodes[0])
        videoC.querySelector(".youtube-container").childNodes[0].src = ("https://www.youtube.com/embed/" + url + "?autoplay=1")
    }

    render() {
        return (
            <div>
                <div className="align-center linkinbio-name">Video Editor</div>

                <div className="video-flexbox">
                    {this.props.video.map((v) => (
                        <div className="video-container" key={v.id} tabIndex="0">
                            <div className="playVideo" onClick={(e) => this.youTubeVideo(e, v.url)} onMouseOver={(e) => this.playButton(e, this.state.on)} onMouseOut={(e) => this.playButton(e, this.state.off)}>
                                <img src={this.state.off} alt="playButton" className="playButton" />
                                <img src={v.thumbnail} alt={v.id} className="YouTubeEmbed" />
                            </div>

                            <div className="youtube-container">
                                <iframe className="youtube-video" title={v.title} src={"https://www.youtube.com/embed/" + v.url} allowFullScreen />
                            </div>

                             {/* <div className="video-caption">{v.caption}</div> */}
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Editor;
