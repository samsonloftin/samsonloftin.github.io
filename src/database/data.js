//Social Media
import github_icon from "../img/socialMediaIcons_github.png";
import ig_icon from "../img/socialMediaIcons_ig.png";
import twitch_icon from "../img/socialMediaIcons_twitch.png";
import twitter_icon from "../img/socialMediaIcons_twitter.png";
import youtube_icon from "../img/socialMediaIcons_youtube.png";

import linkinavatar from "../img/avatar.png"

// AR
import amongUsVideo from "../img/ar/amongus.webm"
import ashVideo from "../img/ar/ash.webm"
import jojoVideo from "../img/ar/jojo.webm"
import sunglassesVideo from "../img/ar/sunglasses.webm"

// Timeline Videos
import one from "../img/timeline/07-01.png";
import two from "../img/timeline/07-02.png";
import three from "../img/timeline/09-01.png";
import four from "../img/timeline/09-02.png";
import five from "../img/timeline/09-03.png";
import six from "../img/timeline/10-01.png";
import seven from "../img/timeline/11-01.png";
import eight from "../img/timeline/15-01.png";
import nine from "../img/timeline/15-02.png";
import ten from "../img/timeline/16-01.png";
import eleven from "../img/timeline/16-02.png";
import twelve from "../img/timeline/17-01.png";
import thirteen from "../img/timeline/17-02.png";
import fourteen from "../img/timeline/18-01.png";
import fifteen from "../img/timeline/19-01.png";
import sixteen from "../img/timeline/20-01.png";
import seventeen from "../img/timeline/20-02.png";
import eighteen from "../img/timeline/20-10.png";

export const Data = {
  socialicons: [
    {
      id: "youtube",
      src: youtube_icon,
      url: "https://youtube.saml.me"
    },
    {
      id: "twitter",
      src: twitter_icon,
      url: "https://twitter.saml.me"
    },
    {
      id: "ig",
      src: ig_icon,
      url: "https://instagram.saml.me"
    },
    {
      id: "twitch",
      src: twitch_icon,
      url: "https://twitch.saml.me"
    },
    {
      id: "github",
      src: github_icon,
      url: "https://github.saml.me"
    },
  ],
  // FOR PHOTOS
  a: [
   {
    id: "amongus",
    url: "https://amongus.saml.me",
    title: "Among Us",
    poster: "",
    video: amongUsVideo,
  },
    {
      id: "menacing",
      url: "https://www.instagram.com/a/r/?effect_id=487255095558391",
      title: "Jojo Menacing",
      poster: "",
      video: jojoVideo, 
    },
    {
      id: "ashketchum",
      url: "https://www.instagram.com/a/r/?effect_id=835817750200334",
      title: "Ash Ketchum Mask",
      poster: "",
      video: ashVideo,
    },
    {
      id: "mega64sunglasses",
      url: "https://www.instagram.com/a/r/?effect_id=877722595996492",
      title: "Mega64 Sunglasses",
      poster: "",
      video: sunglassesVideo,
    },
  ],
  editor: [
    {
      id: "fav5games",
      url: "55jgxpJZIaU",
      title: "5 Favorite Anime of 2020",
      caption: "My favorite anime of 2020, everything captured, edited, and voiced by myself",
    },
    {
      id: "fav6anime",
      url: "3SkTWcKx-Uo",
      title: "6 Favorite Games of 2020",
      caption: "My favorite games of 2020, everything captured, edited, and voiced by myself",
    },
    {
      id: "familymatters",
      url: "XEqX3umaUi8",
      title: "YoVideoGames x Family Matters",
      caption: "Edited together a series of clips from the YoVideoGames streams to the theme of Family Matters"
    },
    {
      id: "dcmmbyiamym",
      url: "hq9xQDWuark",
      title: "Don't Call Me Mama Review",
      caption: "Various Easy ALlies Reviews editing together to create a fake review for Kyle Bosman's Gameboy game."
    },
    {
      id: "retrospective",
      url: "8Z3j6I1guno",
      title: "10 Years Ago, I Started Animating",
      caption: "A look back at 10 years of my animation career.",
    },
    {
      id: "gameboy",
      url: "e2kZOTx0UCE",
      title: "The Gameboy",
      caption: "A Short Film, all done by myself",
    },
  ],
  links: [
    {
      id: "Anime I've Watched",
      url: "/anime",
    },
    {
      id: "Games I've Played",
      url: "/games",
    },

  ],
  web: [
    {
      id: "youtubeTag",
      title: "YouTube Metadata Form",
      img: one,
      url: "https://samsonloftin.github.io/YouTubeTag/",
      caption: "A Simplied Way to Generate YouTube Metadata for Videos!"
    },
    /*
    {
      id: "morioh",
      title: "Morioh Tour Guide",
      img: "",
      url: "",
    },
    */
    {
      id: "portfolioMuseum",
      title: "Portfolio Museum",
      img: one,
      url: "/timeline",
      caption: "A look back at over a decade and a half of previous portfolios"
    },
  ],
  info: {
    linkin: linkinavatar,
    contactAlt: "Picture of Samson",
  },
  about: {
    first:
      "Hi & Hello, I'm Samson Loftin, I'm a digital creator of... everything. I love making people smile through my work. " +
      "It's what drives me to keep creating and exploring new ways to create. (Which you can follow my journey on Instagram) " +
      "However, the reason you're reading this is probably because you're curious about my journey into voice-acting or you're bored. ",
    last:
      "I started my journey into voice-acting in 2006 when I started to learn how to make my own dumb internet cartoons. " +
      "It was a great opportunity for me to voice my own cartoon characters! I was doing what I grew up loving. " +
      "Since then, I've continued that journey through voicing in other folks' internet cartoons to dumb live-action performances to performing a handful of live improve shows " +
      "at CSU East Bay (Hayward, CA) & Blacktop Comedy (Rocklin, CA). " +
      "In 2019, I moved to LA and began my training into professional voice-acting. I built my own recording closet and in 2020, " +
      "I trained under Susan Palyo at Voice Trax West for Animation VO and here I am!",
  },
  timeline: [
   {img: one,
  alt: "2007"},
    {img: two,
      alt: "2007"},
    {img: three,
      alt: "2009"},
    {img: four,
      alt: "2009"},
    {img: five,
      alt: "2009"},
    {img: six,
      alt: "2010"},
    {img: seven,
      alt: "2011"},
    {img: eight,
      alt: "2015"},
    {img: nine,
      alt: "2015"},
    {img: ten,
      alt: "2016"},
    {img: eleven,
      alt: "2016"},
    {img: twelve,
      alt: "2017"},
    {img: thirteen,
      alt: "2017"},
    {img: fourteen,
      alt: "2018"},
    {img: fifteen,
      alt: "2019"},
    {img: sixteen,
      alt: "2020"},
    {img: seventeen,
       alt: "2020"},
       {img: eighteen,
        alt: "2020"},
  ],
};
