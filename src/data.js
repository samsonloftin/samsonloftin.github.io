// About
import contact_pic from './img/contact_pic.jpg';

// Link in Bio
import igpic from './img/ig.jpg';
import placeholder from './img/placeholder.jpg';
import linkinbio_dreamlandhero from './img/linkinbio/dreamlandhero.jpg';


// Social Demo
import twitter_icon from './img/twitter.png';
import instagram_icon from './img/instagram.png';
import youtube_icon from './img/youtube.png';

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
  voice: {
    id: 'contact',
    img: contact_pic,
    alt: 'Samson Loftin',
    header: "Let's Work Together!",
    demoA: "Animation Demo",
    demoAsrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795876337&color=%23f2a0cd&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true",
    demoC: "Commercial Demo",
    demoCsrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795876217&color=%23f2a0cd&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
  },
  linkinbioMisc: {
    igpic: igpic,
    igpicalt: 'Samson IG Profile Picture',
    name: 'Samson Loftin',
    igtag: 'Digital Creator of Everything',
  },
  linkinbioAR: [
    {
      id: 'menacing',
      artitle: 'Jojo Menacing',
      arurl: 'https://www.instagram.com/a/r/?effect_id=487255095558391',
    },
{
  id: 'ashketchum',
  artitle: 'Ash Ketchum Mask',
  arurl: 'https://www.instagram.com/a/r/?effect_id=835817750200334',
},
{
  id: 'Mega64Sunglasses',
  artitle: 'Mega64 Sunglasses',
  arurl: 'https://www.instagram.com/a/r/?effect_id=877722595996492',
},
],
  linkinbio: [
    {
      id: 'dreamlandhero',
      alt: 'Dreamland Hero',
      pic: linkinbio_dreamlandhero,
      url: 'https://www.newgrounds.com/projects/movies/85588',
    },
  ]
}