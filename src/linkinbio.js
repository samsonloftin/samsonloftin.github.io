import React, { Component } from "react";
import PropTypes from "prop-types";

class LinkInBio extends Component {
    static propTypes = {
        info: PropTypes.object.isRequired,
        link: PropTypes.array.isRequired,
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
                <div className="linkinbio-container">
                    <div className="linkinbio-avatar">
                        <img
                            src={this.props.info.contact}
                            alt={this.props.info.contactAlt}
                        />
                    </div>

                    <div className="inBio-Title align-center" id="section-title">♥ Samson Loftin ♥</div>

                    {this.props.link.map((link) => (
                        <a 
                        href={link.url}
                        key={link.id}
                        >
                        <div className="linkinbio-button">
                            <div className="linkinbio-title">
                                {link.id}
                            </div>
                        </div>
                    </a>
                    ))}
                    
                    <div className="inBio-Title align-center" id="section-title">♥ AR Filters ♥</div>

                    {this.props.a.map((ar) => (
                        <a 
                        href={ar.url}
                        key={ar.id}
                        >
                        <div className="linkinbio-button">
                            <div className="linkinbio-title">
                                {ar.title}
                            </div>
                        </div>
                    </a>
                    ))}

                   
                </div>
            </div>
        );
    }
}

export default LinkInBio;
