import cover from './img/cover-about.jpg'

import booktrackerThumb from './img/projects/booktracker_thumb.jpg'

import restaurantsReviewThumb from './img/projects/restaurantsreview_thumb.jpg'

import memoryGameThumb from './img/projects/memorygame_thumb.jpg'

import classicArcadeClassicThumb from './img/projects/classicarcadeclassic_thumb.jpg'

import animationdemoThumb from './img/projects/eye_thumb.jpg'

import thegameboyThumb from './img/projects/thegameboy_thumb.jpg'

import tenyearretroThumb from './img/projects/10yretro_thumb.jpg'
import tenyearretroVideo01 from './img/projects/10yretrovideo01.mp4'

import classcrassThumb from './img/projects/classcrass_thumb.jpg'
import classcrassVideo01 from './img/projects/classcrassintro.mp4'
import classcrassVideo02 from './img/projects/classcrassoutro.mp4'

import blossomridgeThumb from './img/projects/blossomridge_thumb.jpg'
import blossomridgeVideo02 from './img/projects/blossomridge_video02.mp4'

import mariaopolyThumb from './img/projects/mariaopoly_thumb.jpg'

// Mariaopoly Case Study
import mariaopoly01 from './img/projects/mop/mp01.jpg'
import mariaopoly02 from './img/projects/mop/mp02.jpg'
import mariaopoly03 from './img/projects/mop/mp03.jpg'
import mariaopoly04 from './img/projects/mop/mp04.jpg'
import mariaopoly05 from './img/projects/mop/mp05.jpg'

import kitestringThumb from './img/projects/kitestring_thumb.jpg'

// Kite String Case Study
import kitestring01 from './img/projects/ks2/ks01.jpg'
import kitestring02 from './img/projects/ks2/ks02.jpg'
import kitestring03 from './img/projects/ks2/ks03.jpg'
import kitestring04 from './img/projects/ks2/ks05.jpg'
import kitestring05 from './img/projects/ks2/ks06.jpg'

export const mainData = {
  design: [
    // Maria-opoly
    {
      id: 'mariaopoly',
      name: 'Maria-opoly',
      url: '/mariaopoly',
      aria: 'Maria-opoly Board Game Project',

      // Thumbnail
      desc: 'Redesign of Monopoly',
      thumb: mariaopolyThumb,
      thumbalt: 'Maria-opoly Thumb',
      casestudy: true,

      // Case Study
      longdesc: 'Maria-opoly is an redesign of Monopoly. This project was created for my girlfriend for our anniversary. I also never designed a physical product or even designed solely on an iPad Pro. So this project was definitely an exciting challenge.',
      main01: mariaopoly01,
      main01alt: 'Photo of Mariaopoly Gameboard',
      main01size: 'basicImageLg',
      main02: mariaopoly02,
      main02alt: 'Close Up of Board Render',
      main02size: 'basicImageLg',
      main03: mariaopoly03,
      main03alt: 'Card Designs for Mariaopoly',
      main03size: 'basicImageMd',
      main04: mariaopoly04,
      main04alt: 'Mariaopoly Game Box',
      main04size: 'basicImageLg',
      main05: mariaopoly05,
      main05alt: 'Cards & Play money',
      main05size: 'basicImageLg',
      title01: 'Tools',
      desc01: 'iPad Pro, ProCreate, Affinity Photos',
    },
    {
      id: 'booktracker',
      name: 'Book Tracker',
      url: 'https://www.samsonloftin.com/book-tracker-9000/',

      // Thumbnail
      desc: 'Book tracking app built in React',
      thumb: booktrackerThumb,
      thumbalt: 'Book Tracker Website Thumbnail',
      aria: 'Book Tracker App',
      casestudy: true,
    },
    {
      id: 'restaurantsReview',
      name: 'Restaurants n\' Review',
      url: 'https://github.com/samsonloftin/restaurants-n-reviews',

      // Thumbnail
      desc: 'Restaurant Reviews site built in Javascript!',
      thumb: restaurantsReviewThumb,
      thumbalt: 'Restaurant Review Website Thumbnail',
      aria: 'Restaurant Review Website',
      casestudy: true,
    },
    {
      id: 'classicarcadeclassic',
      name: 'Classic Arcade Classic',
      url: 'https://github.com/samsonloftin/classic-arcade-classic-toader',

      // Thumbnail
      desc: 'Arcade game based on Frogger built in JavaScript!',
      thumb: classicArcadeClassicThumb,
      thumbalt: 'Classic Arcade Classic Game Thumbnail',
      aria: 'Classic Arcade Classic coding project',
      casestudy: true,

    },
    {
      id: 'memorygame',
      name: 'The Memory Game',
      url: 'https://github.com/samsonloftin/the-memory-game',

      // Thumbnail
      desc: 'Memory Game built in JavaScript',
      thumb: memoryGameThumb,
      thumbalt: 'The Memory Game Thumbnail',
      aria: 'The Memory Game coding project',
      casestudy: true,

    },
  ],
  video: [

    // Kite & String
    {
      id: 'kitestring',
      name: 'Kite & String Episode 2',
      url: '/kitestring',
      aria: 'Kite & String Episode 2 Animation',
      casestudy: true,

      // Thumbnail
      desc: 'Animation about two friends!',
      thumb: kitestringThumb,
      thumbalt: 'Kite & String',

      // Case Study
      longdesc: 'Kite & String is an animated series about the adventures between a ball of string and a kite. I was contracted to animate episode 2.',
      video01: 'https://www.youtube.com/embed/DROHyuFNsrk',
      main01: kitestring01,
      main01alt: 'Original designs from the first episode',
      main01size: 'basicImageLg',
      main02: kitestring02,
      main02alt: 'Character designs',
      main02size: 'basicImageLg',
      main03: kitestring03,
      main03alt: 'Background of Park',
      main03size: 'basicImageLg',
      main04: kitestring04,
      main04alt: 'Rendered of Kite & String looking at Daisy',
      main04size: 'basicImageLg',
      main05: kitestring05,
      main05alt: 'Animatics of Kite & String looking at Daisy',
      main05size: 'basicImageLg',
      title01: 'Tools',
      desc01: 'Adobe Animate, Photoshop, and Illustrator'
    },

    // Animation Demo Reel
    {
      id: 'animationdemo',
      name: 'Animation Demo Reel',
      url: '/animationdemo',
      aria: 'Animation Demo Reel',
      casestudy: false,

      // Thumbnail
      desc: 'Animation Demo Reel',
      thumb: animationdemoThumb,
      thumbalt: 'Animation Demo Reel',

      longdesc: 'A demo reel of some of my animation work!',
      video01: '357029486',

    },

    // Class & Crass
    {
      id: 'classcrass',
      name: 'Class & Crass Branding',
      url: '/classcrass',
      aria: 'Class & Crass Animated Branding',
      casestudy: false,

      // Thumbnail
      desc: 'Animated branding for a gaming channel on YouTube',
      thumb: classcrassThumb,
      thumbalt: 'Class & Crass',

      longdesc: 'I worked on a gaming YouTube channel for a few months. I created the branding for the channel as well as editing hundreds of hours of footage to producing 88 gaming videos & 6 short-form videos.',
      video01: classcrassVideo01,
      video02: classcrassVideo02,
    },

    // Blossom Ridge
    {
      id: 'blossomridge',
      name: 'Blossom Ridge Home Health Hospice',
      url: '/blossomridge',
      aria: 'Blossom Ridge Home Health Hospice Explainer Video',
      casestudy: false,

      // Thumbnail
      desc: 'Contracted to animated an explainer video about Hospice care. ',
      linkdesc: '(External link to Blossom Ridge)',
      link: 'https://blossomridge.com/2016/10/04/a-video-to-help-explain-hospice-and-how-we-can-help/',
      thumb: blossomridgeThumb,
      thumbalt: 'Class & Crass',

      longdesc: 'I contracted by Blossom Ridge Home Health Agency to animate an explainer about hospice care',
      video01: '185383645',
      video02: blossomridgeVideo02,
    },

    // 10 Years
    {
      id: '10yreptrospective',
      name: '10 Year Retrospective',
      url: '/10yreptrospective',
      aria: '10 Year Retrospective',
      casestudy: false,

      // Thumbnail
      desc: 'A 10 year retrospective of my journey as an animator',
      thumb: tenyearretroThumb,
      thumbalt: '10 Year Retrospective',

      longdesc: 'On the 10th year anniversary of releasing my first animation. I created this retrospective to celebrate the journey I took.',
      video01: '355783795',
      video02: tenyearretroVideo01,
    },

    // The Gameboy
    {
      id: 'thegameboy',
      name: 'The Gameboy',
      url: '/thegameboy',
      aria: 'The Gameboy',
      casestudy: false,

      // Thumbnail
      desc: 'A short film about a Gameboy',
      thumb: thegameboyThumb,
      thumbalt: 'The Gameboy',

      longdesc: 'The Gameboy is a short film about a Gameboy. This film won the Howard Slatoff Trust Award at the first In The Dark: New Media Works exhibition at California State University East Bay.',
      video01: '355781743',
      title01: 'VHS',
      desc01: 'The VHS effect was created by burning my video to a DVD and then recording that DVD to a VHS using a VCR. Once I had my movie on a VHS, I recorded the TV and messed with the VCR tracking to get the effect I wanted. (I also don\'t have a twin)',
    },
    
  ],
  about: {
    id: 'about',
    name: 'Bio',
    img: cover,
    alt: 'picture of myself',
    description: 'Hello! I\'m Samson Loftin, a Multimedia Designer, looking for new opportunites that\'ll challenge & improve my skills! No challenge is too much! I\'ve self-taught myself to animate, earned a BA in Multimedia, and learned Front-End web development & Android development through Udacity. There\'s always more to learn & grow from so I\'m excited to take on any challenge that comes my way!',
    contact: 'Contact',
    email: 'contact@samsonloftin.com',
    in: 'Linkedin',
    inurl: 'https://www.linkedin.com/in/samsonloftin',
    git: 'Github',
    giturl: 'https://github.com/samsonloftin',
    resume: 'resume',
    resumeurl: '/resume',
    aria: 'About, email contact link',
  },
}