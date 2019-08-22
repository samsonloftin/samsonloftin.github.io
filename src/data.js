import cover from './img/cover-about.jpg'

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
  webdev: [
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
  illustration: [
    {
      id: 'illustration01',
      name: 'Maria-opoly',
      url: '/mariaopoly',
      desc: '',
      longdesc: '',
      img: mp01,
      alt: 'Maria-opoly board game Thumbnail',
      aria: 'Design Projects, Mariaopoly board game',
    },
    {
      id: 'illustration02',
      name: 'Dragon Eaters',
      url: '',
      desc: '',
      longdesc: '',
      img: dragoneaters,
      alt: 'Dragon Eaters Logo',
      aria: 'Art Projects, Dragon Eaters Logo',
    },
    {
      id: 'illustration03',
      name: 'Character Design of Jak',
      url: '',
      desc: '',
      longdesc: '',
      img: jak,
      alt: 'Character portrait of Jak',
      aria: 'Art Projects, Jak Character Portrait',
    },
    {
      id: 'illustration04',
      name: 'Character Design of Gen',
      url: '',
      img: gen,
      alt: 'Character portrait of Gen',
      desc: 'Character Design of my DnD Character',
      longdesc: '',
      aria: 'Art Projects, Gen Character Portrait',
    },
    {
      id: 'illustration05',
      name: 'Low Poly Mountains',
      url: '',
      desc: '',
      longdesc: '',
      img: mountain,
      alt: '3d Mountain Render',
      aria: 'Art Projects, 3D Render of a Mountain',
    }
  ],
  animation: [
    {
      id: 'animate01',
      name: 'Kite & String',
      url: '/kitestring',
      desc: '',
      longdesc: '',
      img: kitestring,
      alt: 'Kite & String Characters Thumbnail',
      aria: 'Design Projects, Kite & String Animation',
    },
    {
      id: 'animate02',
      name: 'Demo Reel',
      desc: '',
      longdesc: '',
      url: 'https://youtu.be/Mp3bRlSl448',
      img: demo,
      alt: 'Demo Reel thumbnail',
      aria: 'Design Projects, Demo Reel',
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