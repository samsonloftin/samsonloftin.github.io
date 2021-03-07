import React, { Component } from "react";
import PropTypes from "prop-types";

class Web extends Component {
    static propTypes = {
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
                <div className="linkinbio-name" tabIndex="0">Web Projects</div>

                <div className="video-flexbox">

                    {this.props.web.map((sites) => (
                        <a
                            href={sites.url}
                            key={sites.id}
                            tabIndex="0"
                            className="video-container"
                            id="container-select"
                        >
                            <img src={sites.img} alt={sites.title} className="web-container" />
                            <div className="linkinbio-subtitle">{sites.title}</div>
                            <div className="video-caption">{sites.caption}</div>
                        </a>
                    ))}
                </div>
                <div className="linkinbio-subtitle" tabIndex="0">More Web Examples to Come!</div>
            </div>
        );
    }
}

export default Web;
