import cover from './img/cover-about.jpg'
import github from './img/github.svg'
import linkedin from './img/in.svg'

// Code thumbnails
import booktracker from './img/code-booktracker.jpg'
import review from './img/code-review.jpg'
import arcadegame from './img/code-arcadegame.jpg'
import memory from './img/code-memory.jpg'

// Design thumbnails
import kitestring from './casestudy/img/ks00.jpg'
import mp01 from './casestudy/img/mp01.jpg'

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
      url: '/mariaopoly',
      img: mp01,
      alt: 'Maria-opoly board game Thumbnail',
      aria: 'Design Projects, Mariaopoly board game',
    },
    {
      id: 'design02',
      name: 'Kite & String',
      url: '/kitestring',
      img: kitestring,
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
    img: cover,
    alt: 'picture of myself',
    description: 'Hello! I\'m Samson Loftin, I\'m an animator who transitioned into front-end web development because I wanted to learn new ways to create positive experiences. Whether it be simplifying an app to cause less frustration for the end-user, building a game that makes someone smile, or creating an app that focuses on creating a positive impact. I enjoy working on projects which bring joy & positivity to others.',
    feats: 'Feats',
    skills: 'Skills',
    code: 'JavaScript, HTML, CSS, SASS, Git, jQuery, Node, Ember, Angular, React, Redux',
    art: 'UX Design, Motion Graphics, Wireframing, Sketch, Storyboarding, Illustration, Adobe Creative Suite, Video Editing',
    emailTitle: 'Email',
    email: 'contact@samsonloftin.com',
    aria: 'About, email contact link',

    // Education
    schoolName: 'Education',
    school: 'BA Multimedia, CSU East Bay',

    udacity01: 'Front-End Web Developer Nanodegree, Udacity',
    udacity02: 'Android Basics Nanodegree, Udacity',
  }
}