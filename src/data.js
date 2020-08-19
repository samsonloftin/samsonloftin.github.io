// About
import contact_pic from './img/contact_pic.jpg';

// Link in Bio
import linkinbio_dreamlandhero from './img/linkinbio/dreamlandhero.jpg';


// Social Demo
// import twitter_icon from './img/twitter.png';
import instagram_icon from './img/instagram.png';
import youtube_icon from './img/youtube.png';

// const twitter_alt = 'Twitter Icon';
const instagram_alt = 'Instagram Icon';
const youtube_alt = 'YouTube Icon';




// Demo
const demoPlayPrefix = 'https://drive.google.com/file/d/';
const demoPlaySuffix = "/preview";
const demoDwnPrefix = "https://drive.google.com/u/0/uc?id=";
const demoDwnSuffix = "&export=download";

// DEMO IDs
const demoAnimation = "1rNdAakWpkI1x96mha71bZAuLgxQdHdql";
const demoCommercial = "1NIRr8cQhS9PR0uqrJtB-5MVh2It-d9RS";





  /*
import linkedin_icon from './img/linkedin.png'
import artstation_icon from './img/artstation.png'
const linkedin_alt = 'Linkedin Icon';
const artstation_alt = 'Artstation Icon';

*/

export const mainData = {
  social: [
  /*  {
      id: 'twitter',
      url: 'https://twitter.saml.me',
      img: twitter_icon,
      alt: twitter_alt
    },
    */
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
    demoAsrc: demoPlayPrefix + demoAnimation + demoPlaySuffix,
    demoAdwn: demoDwnPrefix + demoAnimation + demoDwnSuffix,
    demoC: "Commercial Demo",
    demoCsrc: demoPlayPrefix + demoCommercial + demoPlaySuffix,
    demoCdwn: demoDwnPrefix + demoCommercial + demoDwnSuffix,
  },
  about: {
    first: "Hello! I'm Samson Loftin, I'm a black LA-based voice actor born & raised in the San Francisco Bay Area. " +
    "My journey into voice-acting started in 2006 when I started animating my own dumb internet cartoons. ",

    last: "Since then I've voiced in other internet cartoons, performed a handful of improv shows at CSU East Bay(Hayward, CA) & Blacktop Comedy(Rocklin, CA). " +
    "In 2019, I moved to LA and began training in professional voice-acting. I trained under Susan Palyo at Voice Trax West for Animation VO.",
    
    other: "Other Works",
  },
  linkinbioMisc: {
    igpic: contact_pic,
    igpicalt: 'Samson IG Profile Picture',
    name: 'Samson Loftin',
    igtag: 'I make dumb things and I hope you all enjoy!',
    website: "My Website!",
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