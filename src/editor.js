import React, { Component } from "react";
import PropTypes from "prop-types";

class Editor extends Component {
    static propTypes = {
        video: PropTypes.array.isRequired,
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
                <div className="align-center linkinbio-name">Video Editor</div>

                <div className="video-flexbox">
                    {this.props.video.map((v) => (
                        <div className="video-container" key={v.id}>
                            <div className="youtube-container">
                                <iframe className="youtube-video" title={v.title} src={"https://www.youtube.com/embed/" + v.url} allowFullScreen />
                            </div>
                                <p className="video-caption">{v.caption}</p>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Editor;
