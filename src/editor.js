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
                        <div className="video-container" key={v.id} tabIndex="0">
                            <div className="youtube-container">
                                <iframe className="youtube-video" title={v.title} src={"https://www.youtube.com/embed/" + v.url} allowFullScreen />
                            </div>
                                <div className="video-caption">{v.caption}</div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Editor;
