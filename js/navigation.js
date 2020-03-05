const navigate = () => {
  const resumeElement = document.getElementById("resume");
  const aboutElement = document.getElementById("about");
  const workElement = document.getElementById("work");
  const voiceElement = document.getElementById("voice");
  const navigationElement = document.getElementById("navigation");

  const indexLink = document.createElement("a");
  const voiceLink = document.createElement("a");
  const resumeLink = document.createElement("a");
  const aboutLink = document.createElement("a");

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

  navigationElement.append(indexLink);
  navigationElement.append(voiceLink);
  navigationElement.append(resumeLink);
  navigationElement.append(aboutLink);

  indexLink.addEventListener("click", pageLink, false);
  indexLink.setAttribute("aria-labelledby", "Home");
  indexLink.setAttribute("class", "nav-home");
  indexLink.setAttribute("tabindex", "0");
  indexLink.innerHTML = "Home";

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

navigate();
