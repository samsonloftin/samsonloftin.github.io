// Header
import banner from "./img/banner.jpeg";
import avatar from "./img/contact_pic.jpg";

// Social
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";

// Panels
import menacing from "./img/panels/menacing.gif";
import ashk from "./img/panels/menacing.gif";
import sunglasses from "./img/panels/menacing.gif";

// Demo
const demoPlayPrefix = 'https://drive.google.com/file/d/';
const demoPlaySuffix = "/preview";
const demoDwnPrefix = "https://drive.google.com/u/0/uc?id=";
const demoDwnSuffix = "&export=download";

// DEMO IDs
const demoAnimation = "1rNdAakWpkI1x96mha71bZAuLgxQdHdql";
const demoCommercial = "1NIRr8cQhS9PR0uqrJtB-5MVh2It-d9RS";

export const inBio = {
  social: [
    {
      id: "instagram",
      url: "https://instagram.saml.me",
      img: instagram,
      alt: "Instagram",
    },
    {
        id: "youtube",
        url: "https://youtube.saml.me",
        img: youtube,
        alt: "YouTube",
      },
  ],
  voice: {
    demoAsrc: demoPlayPrefix + demoAnimation + demoPlaySuffix,
    demoAdwn: demoDwnPrefix + demoAnimation + demoDwnSuffix,
    demoCsrc: demoPlayPrefix + demoCommercial + demoPlaySuffix,
    demoCdwn: demoDwnPrefix + demoCommercial + demoDwnSuffix,
  },
  links: [
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
};
