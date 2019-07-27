import placeholder from './img/placeholder.jpg'
import cover from './img/cover-about-1x.jpg'
import coverSm from './img/cover-about-halfx.jpg'
import github from './img/github.svg'
import linkedin from './img/in.svg'

// Code thumbnails
import booktracker from './img/code-booktracker.jpg'
import review from './img/code-review.jpg'
import arcadegame from './img/code-arcadegame.jpg'
import memory from './img/code-memory.jpg'

// Design thumbnails
import kitestring from './img/design-kitestring.jpg'
import mariaopoly from './img/design-mariaopoly.jpg'

// Art thumbnails
import demo from './img/art-demo.jpg'
import dragoneaters from './img/art-dragoneaters.png'
import gen from './img/art-gen.jpg'
import jak from './img/art-jak.png'
import mountain from './img/art-mountain.jpg'


export const mainData = {
  code: [
    {
      id: 'bookTracker',
      name: 'Book Tracker',
      url: 'https://github.com/samsonloftin/book-tracker-9000',
      img: booktracker,
      alt: 'Book Tracker Website Thumbnail',
    },
    {
      id: 'restaurantsReview',
      name: 'Restaurants n Review',
      url: 'https://github.com/samsonloftin/restaurants-n-reviews',
      img: review,
      alt: 'Restaurant Review Website Thumbnail',
    },
    {
      id: 'arcadeClassic',
      name: 'Classic Arcade Classic',
      url: 'https://github.com/samsonloftin/classic-arcade-classic-toader',
      img: arcadegame,
      alt: 'Classic Arcade Classic Game Thumbnail',
    },
    {
      id: 'memoryGame',
      name: 'The Memory Game',
      url: 'https://github.com/samsonloftin/the-memory-game',
      img: memory,
      alt: 'The Memory Game Thumbnail',
    },
  ],
  design: [
    {
      id: 'mariaopoly',
      name: 'Maria-opoly',
      // Images
      img: mariaopoly,
      img01: placeholder,
      // Descriptions
      description: 'Hello',
      alt: 'Maria-opoly board game Thumbnail',
    },
    {
      id: 'kitestring',
      name: 'Kite & String',
      // Images
      img: kitestring,
      img01: placeholder,
      // Descriptions
      description: 'Hello',
      alt: 'Kite & String Characters Thumbnail',
    },
    {
      id: 'demo',
      name: 'Multimedia Demo Reel',
      url: 'https://youtu.be/Mp3bRlSl448',
      img: demo,
      alt: 'Multimedia Demo Reel thumbnail',
    },
  ],
  art: [
    {
      id: 'dragoneaters',
      name: '',
      img: dragoneaters,
      alt: 'Dragon Eaters Logo',
    },
    {
      id: 'gen',
      name: '',
      img: gen,
      alt: 'Character portrait of Gen',
    },
    {
      id: 'jak',
      name: '',
      img: jak,
      alt: 'Character portrait of Jak',
    },
    {
      id: 'mountain',
      name: '',
      img: mountain,
      alt: '3d Mountain Render',
    }
  ],
  feats: [
    {
      id: 'frontEnd',
      name: 'Front-End Web Developer Nanodegree',
      url: 'https://confirm.udacity.com/UKSVCLHR'
    },
    {
      id: 'androidBasics',
      name: 'Android Basics Nanodegree by Google',
      url: 'https://confirm.udacity.com/TTNWDSXN'
    },
    {
      id: 'trustAward',
      name: 'Howard Slatoff Trust Award',
      url: ''
    }
  ],
  social: [
    {
      id: 'github',
      url: 'https://github.com/samsonloftin',
      img: github,
      alt: 'Github Icon'
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/samsonloftin',
      img: linkedin,
      alt: 'LinkedIn Icon'
    }
  ],
  about: {
    id: 'about',
    name: 'Bio',
    description: 'Animator turned Front-End Web Developer building apps, which share positivity & bring joy to others!',
    img: cover,
    imgSm: coverSm,
    alt: 'picture of myself',
    feats: 'Feats',
    skills: 'Skills',
    code: 'JavaScript, Object-Oriented Programming (OOP), HTML, CSS, SASS, Grunt, Gulp, Git, jQuery, Service Workers, Testing Frameworks (Jasmine), Node, Ember, Angular, React, Redux',
    art: 'UX Design, Motion Graphics, Wireframing, Sketch, Storyboarding, Illustration, Adobe Creative Suite, Video Editing',
    emailTitle: 'Email',
    email: 'contact@samsonloftin.com'

  }
}