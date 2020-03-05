/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// Breakpoints
// 37em; // 460px
// 48em; // 768px
// 64em; // 1024px
// 85.375em; // 1366px
// 120em; // 1920px
// 160em; // 2560px

// RESUME VARIABLES

const resume = () => {
  const resumePDF =
    "https://drive.google.com/file/d/1C_pORHHBUdTfgKKebQ4vdqbCvCrDrlK1/preview";
  const htmlResume = document.getElementById("resume");
  const htmlResumeDiv = document.createElement("iframe");

  htmlResume;
  htmlResumeDiv;
  htmlResume.append(htmlResumeDiv);
  htmlResumeDiv.title = "Resume";
  htmlResumeDiv.src = resumePDF;
  htmlResumeDiv.classList.add("resumepdf");
};

// FOOTER VARIABLES

const footer = () => {
  const htmlFooter = document.getElementById("footer");
  const htmlFooterName = document.createElement("div");

  // Creates ALL FOOTER ELEMENTS
  htmlFooter;
  htmlFooterName;

  // Attaches all the elements to the Footer element
  htmlFooter.append(htmlFooterName);

  // FOOTER ELEMENTS
  htmlFooterName.innerHTML = "© 2020 - Created by Samson Loftin";

  // HTML BACK TO TOP ATTRIBUTES
};

// SCROLLING EVENTS

const backToTopFunc = () => {
  const backToTopElement = document.getElementById("back-to-top");
  const backToTopLink = document.createElement("a");
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  // Back to Top function scrolls user to the top of the page
  const backToTop = () => {
    scrollTop = 0;
  };

  backToTopElement;
  backToTopLink;
  backToTopElement.append(backToTopLink);

  // Back to Top Link Attributes
  backToTopLink.tabindex = "0";
  backToTopLink.arialabelledby = "Back To Top";
  backToTopLink.onclick = backToTop();
  backToTopLink.innerHTML = "▲";
};

window.onscroll = () => {
  const backToTopElement = document.getElementById("back-to-top");
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scrollTop / scrollHeight) * 100;
  let scrolledFixed = scrolled.toFixed(0);

  // Shows & Hide Back to Top Link
  if (scrolledFixed >= 35) {
    backToTopElement.style.display = "flex";
  } else {
    backToTopElement.style.display = "none";
  }
};

backToTopFunc();
resume();
footer();
