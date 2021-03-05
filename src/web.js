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
                    <div className="linkinbio-name">Web Projects</div>
                    <p>Currently under construction! </p>
                    <p>YouTube Tagging</p>
                    <p>Jogha Family Name Generator</p>
                    <p>Morioh Tour Guide</p>
                    <p>Portfolio Museum</p>

            </div>
        );
    }
}

export default Web;
