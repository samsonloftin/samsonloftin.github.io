import cover from './img/cover-about.jpg'

import booktrackerThumb from './img/projects/booktracker_thumb.jpg'

import restaurantsReviewThumb from './img/projects/restaurantsreview_thumb.jpg'

import memoryGameThumb from './img/projects/memorygame_thumb.jpg'

import classicArcadeClassicThumb from './img/projects/classicarcadeclassic_thumb.jpg'

import kitestringThumb from './img/projects/kitestring_thumb.jpg'

// import animationdemoThumb from './img/projects/eye_thumb.jpg'

import dragoneatersThumb from './img/projects/dragoneaters_thumb.jpg'
import dragoneatersMain from './img/projects/dragoneaters_main.jpg'

import thegameboyThumb from './img/projects/thegameboy_thumb.jpg'

import tenyearretroThumb from './img/projects/10yretro_thumb.jpg'
import tenyearretroVideo01 from './img/projects/10yretrovideo01.mp4'

import classcrassThumb from './img/projects/classcrass_thumb.jpg'
import classcrassVideo01 from './img/projects/classcrassintro.mp4'
import classcrassVideo02 from './img/projects/classcrassoutro.mp4'

import genThumb from './img/projects/gen_thumb.jpg'
import genMain from './img/projects/gen_main.jpg'
import genMain01 from './img/projects/gen_main01.jpg'

import joghaThumb from './img/projects/jogha_thumb.jpg'
import joghaMain01 from './img/projects/jogha_main01.jpg'
import joghaMain02 from './img/projects/jogha_main02.jpg'
import joghaMain03 from './img/projects/jogha_main03.jpg'
import joghaMain04 from './img/projects/jogha_main04.jpg'


import lpMt from './img/projects/lowPolyMountains_thumb.jpg'
import lpMtMain from './img/projects/lowPolyMountains_main.jpg'

import mariaopolyThumb from './img/projects/mariaopoly_thumb.jpg'


export const mainData = {
  webdev: [
    {
      id: 'booktracker',
      name: 'Book Tracker',
      url: 'https://github.com/samsonloftin/book-tracker-9000',

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
  illustration: [
    
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

    },

    // Dragon Eaters
    {
      id: 'dragoneaters',
      name: 'Dragon Eaters',
      url: '/dragoneaters',
      aria: 'Dragon Eaters Logo Illustration Project',
      casestudy: false,

      // Thumbnail
      desc: 'Logo for a DnD Adventure Party',
      thumb: dragoneatersThumb,
      thumbalt: 'Dragon Eaters Logo',

      // Project Page
      longdesc: 'I designed this logo for my former DnD adventuring party called the Dragon Eaters. Made in ProCreate.',
      main01: dragoneatersMain,
      main01alt: 'Dragon Eaters Logo',
      main01size: 'basicImageLg'
    },

    // Gen
    {
      id: 'gensearch',
      name: 'Gen Searching',
      url: '/gensearch',
      aria: 'Character Gen Searching Illustration Project',
      casestudy: false,

      // Thumbnail
      desc: 'Character Illustration of Gen',
      thumb: genThumb,
      thumbalt: 'Gen Character Illustration',

      // Project Page
      longdesc: 'Character illustration of one of my DnD characters, Gen. A Drow Gloom Stalker Ranger, apart of the Dragon Eaters adventuring party. Made in ProCreate.',
      main01: genMain,
      main01alt: 'Full body illustration of Gen',
      main01size: 'basicImageLg',
      main02: genMain01,
      main02alt: 'Mask variants for Gen',
      main02size: 'basicImageMd',
    
    },

    // Jogha Raging
    {
      id: 'jogharage',
      name: 'Jogha Raging',
      url: '/jogharage',
      aria: 'Character Jogha Raging Illustration Project',
      casestudy: false,

      // Thumbnail
      desc: 'Character Illustration of Jogha Raging',
      thumb: joghaThumb,
      thumbalt: 'Jogha Character Illustration',

      // Project Page
      longdesc: 'Character illustration of one of my DnD characters, Jogha. A Half-Orc Barbarian. Made in ProCreate.',
      main01: joghaMain01,
      main01alt: 'Illustration of Jogha raging',
      main01size: 'basicImageLg',
      main02: joghaMain02,
      main02alt: 'CLose up of the steam',
      main02size: 'basicImageSm',
      main03: joghaMain03,
      main03alt: 'Close up of Jogha face, soft shadows',
      main03size: 'basicImageMd',
      main04: joghaMain04,
      main04alt: 'Close up of Jogha face, hard shadows',
      main04size: 'basicImageMd',
    },

    // Low Poly Mountains
    {
      id: 'lowPolyMountain',
      name: 'Low Poly Mountain',
      url: '/lowPolyMountain',
      aria: 'Landscape of a low poly mountain',
      casestudy: false,

      // Thumbnail
      desc: 'Landscape of a low poly mountain',
      thumb: lpMt,
      thumbalt: 'Low Poly Mountain Render',

      // Project Page
      longdesc: 'A low poly render of mountains. Made in Blender.',
      main01: lpMtMain,
      main01alt: 'Low Poly Render of Mountains',
      main01size: 'basicImageLg',
    }
  ],
  animation: [

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

    },

    // Animation Demo Reel
 /*    {
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
      video01: '355783795',

    }, */

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

      longdesc: 'The Gameboy is a short film about a Gameboy. This film won the Howard Slatoff Trust Award at the first In The Dark: New Media Works exhibition at California State University East Bay. The VHS effect was created by burning my video to a DVD and then recording that DVD to a VHS using a VCR. Once I had my movie on a VHS, I recorded the TV and messed with the VCR tracking to get the effect I wanted.',
      video01: '355781743',
    },
    
  ],
  about: {
    id: 'about',
    name: 'Bio',
    img: cover,
    alt: 'picture of myself',
    description: 'Hello! I\'m Samson Loftin, I\'m an animator who transitioned into front-end web development because I wanted to learn new ways to create positive experiences. Whether it be simplifying an app to cause less frustration for the end-user, building a game that makes someone smile, or creating an app that focuses on creating a positive impact. I enjoy working on projects which bring joy & positivity to others.',
    contact: 'Contact',
    email: 'contact@samsonloftin.com',
    in: 'Linkedin',
    inurl: 'https://www.linkedin.com/in/samsonloftin',
    git: 'Github',
    giturl: 'https://github.com/samsonloftin',
    resume: 'resume',
    resumeurl: '/resume',
    aria: 'About, email contact link',
  }
}