import React, { Component } from 'react'
import { linkInBioData } from './linkinbiodata'


class LinkInBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insta: linkInBioData.instagram,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='about'>

        <div className='info'>
          <div className='abouttitlebio'>Link in Bio</div>
          <div className='abouttext'>Hello! You'll find the full review below! </div>
        </div>

        <div class='tweetrow'>

        <div class='tweet'>
          <div className='tweettitle'> Don't Call Me Mama But Yes I Am Your Mama Easy Allies Review </div>
          <blockquote class="twitter-tweet" data-theme="dark" data-link-color="#9266CC"><p lang="en" dir="ltr">Don’t Call Me Mama But Yes I Am Your Mama <a href="https://twitter.com/EasyAllies?ref_src=twsrc%5Etfw">@EasyAllies</a> Review <a href="https://t.co/IIqxr2y0UN">pic.twitter.com/IIqxr2y0UN</a></p>&mdash; Samson (@samsonloftin) <a href="https://twitter.com/samsonloftin/status/1180751114477555713?ref_src=twsrc%5Etfw">October 6, 2019</a></blockquote>
        </div>

        </div>
      </div>
    )
  }
}

export default LinkInBio;