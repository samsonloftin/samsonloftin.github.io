/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////NAVIGATION VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/

const navigate = () => {
	
// Finds all the main elements on the page
  const resumeElement = document.getElementById("resume");
  const aboutElement = document.getElementById("about");
  const workElement = document.getElementById("work");
  const voiceElement = document.getElementById("voice");
  const navigationElement = document.getElementById("navigation");

// Creates navigation links for each page
  const indexLink = document.createElement("a");
  const voiceLink = document.createElement("a");
  const resumeLink = document.createElement("a");
  const aboutLink = document.createElement("a");
  
// Creates logo
  const logoElement = document.createElement("img");

// Shows the element corresponding to the navigation link clicked
// Hides the other remaining elements
  const pageLink = event => {
    if (event.target.classList.contains("nav-home")) {
      workElement.style.display = "flex";
      voiceElement.style.display = "none";
      resumeElement.style.display = "none";
      aboutElement.style.display = "none";
    } else if (event.target.classList.contains("nav-voice")) {
      workElement.style.display = "none";
      voiceElement.style.display = "flex";
      resumeElement.style.display = "none";
      aboutElement.style.display = "none";
    } else if (event.target.classList.contains("nav-resume")) {
      workElement.style.display = "none";
      voiceElement.style.display = "none";
      resumeElement.style.display = "flex";
      aboutElement.style.display = "none";
    } else if (event.target.classList.contains("nav-about")) {
      workElement.style.display = "none";
      voiceElement.style.display = "none";
      resumeElement.style.display = "none";
      aboutElement.style.display = "flex";
    } else {
    }
  };

// Attaches the navigation links to the navigation div
    navigationElement.append(logoElement)
  navigationElement.append(indexLink);
  navigationElement.append(voiceLink);
  navigationElement.append(resumeLink);
  navigationElement.append(aboutLink);

// Images
  logoElement.addEventListener("click", pageLink, false);
  logoElement.setAttribute("src", "/img/signature.png");
  logoElement.setAttribute("alt", "Samson Loftin Signature");
  logoElement.setAttribute("class", "nav-home signature");
  logoElement.setAttribute("tabindex", "0");

// Adds function, accessibility to the navigation links
  indexLink.addEventListener("click", pageLink, false);
  indexLink.setAttribute("aria-labelledby", "Home");
  indexLink.setAttribute("class", "nav-home");
  indexLink.setAttribute("tabindex", "0");
  indexLink.innerHTML = "Work";

  voiceLink.addEventListener("click", pageLink, false);
  voiceLink.setAttribute("aria-labelledby", "Voice");
  voiceLink.setAttribute("class", "nav-voice");
  voiceLink.setAttribute("tabindex", "0");
  voiceLink.innerHTML = "Voice Actor";

  resumeLink.addEventListener("click", pageLink, false);
  resumeLink.setAttribute("aria-labelledby", "Resume");
  resumeLink.setAttribute("class", "nav-resume");
  resumeLink.setAttribute("tabindex", "0");
  resumeLink.innerHTML = "Resume";

  aboutLink.addEventListener("click", pageLink, false);
  aboutLink.setAttribute("aria-labelledby", "About");
  aboutLink.setAttribute("class", "nav-about");
  aboutLink.setAttribute("tabindex", "0");
  aboutLink.innerHTML = "About";
};

/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////FOOTER VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/

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

/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////BACK TO TOP VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/

const backToTopFunc = () => {
  const backToTopElement = document.getElementById("back-to-top");
  const backToTopLink = document.createElement("a");

  // Back to Top function scrolls user to the top of the page
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  backToTopElement;
  backToTopLink;
  backToTopElement.append(backToTopLink);
  
  backToTopLink.addEventListener("click", backToTop, false);
  backToTopLink.setAttribute("aria-labelledby", "Back To Top");
  backToTopLink.setAttribute("tabindex", "0");
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
  } else if (scrolledFixed <= 35) {
    backToTopElement.style.display = "none";
  }
};

backToTopFunc();
footer();
navigate();
