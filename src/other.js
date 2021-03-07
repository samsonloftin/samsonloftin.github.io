import React, { Component } from "react";
import PropTypes from "prop-types";

class Other extends Component {
    static propTypes = {
        a: PropTypes.array.isRequired,
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
                            </video>
                            <div className="linkinbio-subtitle">{ar.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default Other;
