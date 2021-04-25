import React, { Component } from "react";
import PropTypes from "prop-types";

class Timeline extends Component {
  static propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  slideIndex = 1;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.showDivs(this.slideIndex);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
    this.showDivs(this.slideIndex);
  }

  showDivs = (n) => {
    var i;
    var x = document.getElementsByClassName("timeline-image");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "flex";
  }

  plusDivs = (n) => {
    this.slideIndex = this.slideIndex + n
    this.showDivs((this.slideIndex + n));
  }



  render() {
    return (
      <div>

        <div className="align-center linkinbio-name">Portfolio Timeline</div>

        <div>
          <p>These are snapshots of my portfolio websites from when I started in
          2007 till now. Some websites have been lost to time, others have been
          pulled from the Wayback Machine so it might not be "complete", but
          it's a great showcase of my journey as a digital creator.
          </p>
        </div>

        <div className="timeline-container">
          <button className="timeline-arrow" id="minus-arrow" onClick={() => this.plusDivs(-1)}>&#10094;</button>
          <button className="timeline-arrow" id="plus-arrow" onClick={() => this.plusDivs(+1)}>&#10095;</button>
          {this.props.timeline.map((link) => (
            <div className="timeline-image" key={link.key}>
              <div className="timeline-caption">{link.alt}</div>
              <img src={link.img} alt={link.alt} />
            </div>
          ))}
        </div>

      </div>
    )
  }
}

export default Timeline;
