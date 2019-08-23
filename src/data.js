import cover from './img/cover-about.jpg'

import booktrackerThumb from './img/projects/booktracker_thumb.png'

import restaurantsReviewThumb from './img/projects/restaurantsreview_thumb.png'

import memoryGameThumb from './img/projects/memorygame_thumb.png'

import classicArcadeClassicThumb from './img/projects/classicarcadeclassic_thumb.png'

import kitestringThumb from './img/projects/kitestring_thumb.png'

import animationdemoThumb from './img/projects/eye_thumb.png'

import dragoneatersThumb from './img/projects/dragoneaters_thumb.png'
import dragoneatersMain from './img/projects/dragoneaters_main.png'

import genThumb from './img/projects/gen_thumb.png'
import genMain from './img/projects/gen_main.png'
import genMain01 from './img/projects/gen_main01.png'

import joghaThumb from './img/projects/jogha_thumb.png'
import joghaMain from './img/projects/jogha_main.png'

import lpMt from './img/projects/lowPolyMountains_thumb.png'
import lpMtMain from './img/projects/lowPolyMountains_main.png'

import mariaopolyThumb from './img/projects/mariaopoly_thumb.png'


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
      main02: genMain01,
      main02alt: 'Mask variants for Gen',
    
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
      main01: joghaMain,
      main01alt: 'Illustration of Jogha raging',
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