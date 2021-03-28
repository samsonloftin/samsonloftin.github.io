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
                        >
                            <img src={sites.img} alt={sites.title} className="web-container" />
                            <div className="linkinbio-subtitle">{sites.title}</div>
                            <div className="video-caption">{sites.caption}</div>
                        </a>
                    ))}
                </div>
                <div className="linkinbio-subtitle" tabIndex="0">More examples soon. I'm in the process of redesigning the frontend of these older projects, but if you're impatient check out my <a href="https://github.saml.me/">Github</a>, haha</div>
            </div>
        );
    }
}

export default Web;
