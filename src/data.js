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
      id: 'code01',
      name: 'Book Tracker',
      url: 'https://github.com/samsonloftin/book-tracker-9000',
      img: booktracker,
      alt: 'Book Tracker Website Thumbnail',
      aria: 'Code Projects, Book Tracker',
    },
    {
      id: 'code02',
      name: 'Restaurants n Review',
      url: 'https://github.com/samsonloftin/restaurants-n-reviews',
      img: review,
      alt: 'Restaurant Review Website Thumbnail',
      aria: 'Code Projects, Restaurant Review website',
    },
    {
      id: 'code03',
      name: 'Classic Arcade Classic',
      url: 'https://github.com/samsonloftin/classic-arcade-classic-toader',
      img: arcadegame,
      alt: 'Classic Arcade Classic Game Thumbnail',
      aria: 'Code Projects, Classic Arcade Classic',
    },
    {
      id: 'code04',
      name: 'The Memory Game',
      url: 'https://github.com/samsonloftin/the-memory-game',
      img: memory,
      alt: 'The Memory Game Thumbnail',
      aria: 'Code Projects, The Memory Game',
    },
  ],
  design: [
    {
      id: 'design01',
      name: 'Maria-opoly',
      // Images
      img: mariaopoly,
      img01: mariaopoly,
      // Descriptions
      description: 'Hello',
      alt: 'Maria-opoly board game Thumbnail',
      aria: 'Design Projects, Mariaopoly board game',
    },
    {
      id: 'design02',
      name: 'Kite & String',
      // Images
      img: kitestring,
      img01: kitestring,
      // Descriptions
      description: 'Hello',
      alt: 'Kite & String Characters Thumbnail',
      aria: 'Design Projects, Kite & String Animation',
    },
    {
      id: 'design03',
      name: 'Demo Reel',
      url: 'https://youtu.be/Mp3bRlSl448',
      img: demo,
      alt: 'Demo Reel thumbnail',
      aria: 'Design Projects, Demo Reel',
    },
  ],
  art: [
    {
      id: 'art01',
      name: '',
      img: dragoneaters,
      alt: 'Dragon Eaters Logo',
      aria: 'Art Projects, Dragon Eaters Logo',
    },
    {
      id: 'art02',
      name: '',
      img: jak,
      alt: 'Character portrait of Jak',
      aria: 'Art Projects, Jak Character Portrait',
    },
    {
      id: 'art03',
      name: '',
      img: gen,
      alt: 'Character portrait of Gen',
      aria: 'Art Projects, Gen Character Portrait',
    },
    {
      id: 'art04',
      name: '',
      img: mountain,
      alt: '3d Mountain Render',
      aria: 'Art Projects, 3D Render of a Mountain',
    }
  ],
  feats: [
    {
      id: 'frontEnd',
      name: 'Front-End Web Developer Nanodegree',
      url: 'https://confirm.udacity.com/UKSVCLHR',
      aria: 'Front End Web Developer Nanodegree',
    },
    {
      id: 'androidBasics',
      name: 'Android Basics Nanodegree by Google',
      url: 'https://confirm.udacity.com/TTNWDSXN',
      aria: 'Android Basics Nanodegree by Google',
    },
    {
      id: 'trustAward',
      name: 'Howard Slatoff Trust Award',
      url: '',
      aria: 'Howard Slatoff Trust Award',
    }
  ],
  social: [
    {
      id: 'github',
      url: 'https://github.com/samsonloftin',
      img: github,
      alt: 'Github Icon',
      aria: 'Github Icon',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/samsonloftin',
      img: linkedin,
      alt: 'LinkedIn Icon',
      aria: 'LinkedIn Icon',
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
    email: 'contact@samsonloftin.com',
    aria: 'About, email contact link',

  }
}