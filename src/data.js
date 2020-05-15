// About
import contact_pic from './img/contact_pic.jpg'

// VO Demo
import animation_demo from './audio/animation-vo-demo.mp3'
import commercial_demo from './audio/commercial-vo-demo.mp3'


// Social Demo
import twitter_icon from './img/twitter.png'
import instagram_icon from './img/instagram.png'
import youtube_icon from './img/youtube.png'

const animation_vo_title = 'Animation VO Demo';
const commercial_vo_title = 'Commercial VO Demo';
const twitter_alt = 'Twitter Icon';
const instagram_alt = 'Instagram Icon';
const youtube_alt = 'YouTube Icon';



  /*
import linkedin_icon from './img/linkedin.png'
import artstation_icon from './img/artstation.png'
const linkedin_alt = 'Linkedin Icon';
const artstation_alt = 'Artstation Icon';

*/








export const mainData = {
  voiceObject: {
    demoHeader: "Voice-Over Demos",
    trainHeader: "Training",
    animationHeader: "Animation VO",
    improvHeader: "Improv"
  },
  voiceArray: [
    {
      id: 'animation_vo_demo',
      name: animation_vo_title,
      button: 'animation_vo_button',
      timeline: 'animation_timeline',
      playhead: 'animation_playhead',
      url: animation_demo,
      aria: animation_vo_title,
    },
    {
      id: 'commercial_vo_demo',
      name: commercial_vo_title,
      button: 'commercial_vo_button',
      timeline: 'commercial_timeline',
      playhead: 'commercial_playhead',
      url: commercial_demo,
      aria: commercial_vo_title,
    }
  ],
  animationVO: [
    {
      studio: 'Voice Trax West',
      instructor: 'Susan Palyo',
      location: 'Studio City, CA',
      year: '2020',
    }
  ],
  improv: [
    {
      studio: 'CSU East Bay',
      location: 'Hayward, CA',
      year: '2015',
    },
    {
      studio: 'Blacktop Comedy',
      location: 'Rocklin, CA',
      year: '2015',
    }
  ],
  social: [
    {
      id: 'twitter',
      url: 'https://twitter.saml.me',
      img: twitter_icon,
      alt: twitter_alt
    },
    {
      id: 'instagram',
      url: 'https://instagram.saml.me',
      img: instagram_icon,
      alt: instagram_alt
    },
    {
      id: 'youtube',
      url: 'https://youtube.saml.me',
      img: youtube_icon,
      alt: youtube_alt
    },
  /*
    {
      id: 'artstation',
      url: 'https://artstation.saml.me',
      img: artstation_icon,
      alt: artstation_alt
    },
    {
      id: 'linkedin',
      url: 'https://linkedin.saml.me',
      img: linkedin_icon,
      alt: linkedin_alt
    },
    */
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
  about: {
    id: 'about',
    name: 'Bio',
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
  },
  voice: {
    id: 'contact',
    img: contact_pic,
    alt: 'Samson Loftin',
    header: "Let's Work Together!",
    demoA: "Animation Demo",
    demoAsrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795876337&color=%23f2a0cd&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
    demoC: "Commercial Demo",
    demoCsrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795876217&color=%23f2a0cd&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"
  }
}