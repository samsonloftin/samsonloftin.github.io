// Panels
import menacing from "./img/panels/menacing.gif";
import ashk from "./img/panels/menacing.gif";
import sunglasses from "./img/panels/menacing.gif";

// About
import banner from "./img/banner.jpeg";
import avatar from "./img/contact_pic.jpg";

// Social Demo
// import twitter_icon from './img/twitter.png';
import instagram_icon from "./img/instagram.png";
import youtube_icon from "./img/youtube.png";

// Demo
const demoPlayPrefix = "https://drive.google.com/file/d/";
const demoPlaySuffix = "/preview";
const demoDwnPrefix = "https://drive.google.com/u/0/uc?id=";
const demoDwnSuffix = "&export=download";

// DEMO IDs
const demoAnimation = "1rNdAakWpkI1x96mha71bZAuLgxQdHdql";
const demoCommercial = "1NIRr8cQhS9PR0uqrJtB-5MVh2It-d9RS";

export const Data = {
  demo: {
    demoAsrc: demoPlayPrefix + demoAnimation + demoPlaySuffix,
    demoAdwn: demoDwnPrefix + demoAnimation + demoDwnSuffix,
    demoCsrc: demoPlayPrefix + demoCommercial + demoPlaySuffix,
    demoCdwn: demoDwnPrefix + demoCommercial + demoDwnSuffix,
  },
  // FOR PHOTOS
  a: [
    /*
    {
      id: "",
      url: "",
      img: "",
      alt: "",
      title: "",
      subtitle: "",
    }, 
    */
    {
      id: "menacing",
      url: "https://www.instagram.com/a/r/?effect_id=487255095558391",
      img: menacing,
      alt: "Menacing AR",
      title: "Jojo Menacing",
      subtitle: "AR Filter",
    },
    {
      id: "ashketchum",
      url: "https://www.instagram.com/a/r/?effect_id=835817750200334",
      img: ashk,
      alt: "Ash Ketchum AR Filter",
      title: "Ash Ketchum Mask",
      subtitle: "AR Filter",
    },
    {
      id: "mega64sunglasses",
      url: "https://www.instagram.com/a/r/?effect_id=877722595996492",
      img: sunglasses,
      alt: "Mega64 Sunglasses AR",
      title: "Mega64 Sunglasses",
      subtitle: "AR Filter",
    },
  ],
  // FOR LINKS
  links: [
  ],
  info: {
    contact: avatar,
    contactAlt: "Picture of Samson",
    banner: banner,
    name: "Samson Loftin",
    location: "Los Angeles",
    bio: "I make dumb things and I hope you all enjoy!",
  },
  social: [
    {
      id: "instagram",
      url: "https://instagram.saml.me",
      img: instagram_icon,
      alt: "Instagram",
    },
    {
      id: "youtube",
      url: "https://youtube.saml.me",
      img: youtube_icon,
      alt: "YouTube",
    },
  ],
  about: {
    first:
      "Hello! I'm Samson Loftin, I'm a black LA-based voice actor born & raised in the San Francisco Bay Area. " +
      "My journey into voice-acting started in 2006 when I started animating my own dumb internet cartoons. ",

    last:
      "Since then I've voiced in other internet cartoons, performed a handful of improv shows at CSU East Bay(Hayward, CA) & Blacktop Comedy(Rocklin, CA). " +
      "In 2019, I moved to LA and began training in professional voice-acting. I trained under Susan Palyo at Voice Trax West for Animation VO.",
  },
  timeline: {
    1: "",
    2: "",
  }
};
