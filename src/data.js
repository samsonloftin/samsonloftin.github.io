import animationdemoThumb from './img/projects/animation_demo.jpg'

// Mariaopoly Case Study
import mariaopoly01 from './img/projects/mp/mariaopoly_01.jpg'
import mariaopoly02 from './img/projects/mp/mariaopoly_02.jpg'
import mariaopoly03 from './img/projects/mp/mariaopoly_03.jpg'
import mariaopoly04 from './img/projects/mp/mariaopoly_04.jpg'
import mariaopoly05 from './img/projects/mp/mariaopoly_05.jpg'

// Kite String Case Study
import kitestring01 from './img/projects/ks2/kitestring_01.jpg'
import kitestring02 from './img/projects/ks2/kitestring_02.jpg'
import kitestring03 from './img/projects/ks2/kitestring_03.jpg'
import kitestring04 from './img/projects/ks2/kitestring_04.jpg'

// MIGA Projects
/* import miga01 from './img/projects/miga/miga_01.gif'
import miga02 from './img/projects/miga/miga_02.gif'
import miga03 from './img/projects/miga/miga_03.gif'
import miga04 from './img/projects/miga/miga_04.gif' */

export const mainData = {
  pdf: {
    resumepdf: 'https://drive.google.com/file/d/1C_pORHHBUdTfgKKebQ4vdqbCvCrDrlK1/preview',
  },
  work: [
    // Maria-opoly
    {
      id: 'mariaopoly',
      name: 'Maria-opoly',
      url: '/mariaopoly',
      aria: 'Maria-opoly Board Game Project',

      // Thumbnail
      desc: 'Redesign of Monopoly',
      thumb: mariaopoly02,
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
    
          longdesc: 'Demonstration of the best motion graphics & animation work I\'ve done!',
          video01: 'https://www.youtube.com/embed/cTi8Ey5cT48',
    
        },
        /*
    {
      id: 'miga',
    },
    {
      id: 'arprojects',
    },
    */
    // Kite & String
    {
      id: 'kitestring',
      name: 'Kite & String Episode 2',
      url: '/kitestring',
      aria: 'Kite & String Episode 2 Animation',
      casestudy: true,

      // Thumbnail
      desc: 'Animation about two friends!',
      thumb: kitestring04,
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
      main05: kitestring04,
      main05alt: 'Animatics of Kite & String looking at Daisy',
      main05size: 'basicImageLg',
      title01: 'Tools',
      desc01: 'Adobe Animate, Photoshop, and Illustrator'
    },
    
  ],
}