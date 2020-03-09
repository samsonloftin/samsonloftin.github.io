const main = () => {

/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////TEMP VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/

// These variable are to be changed quickly with little effort. Update a resume? Change text for about page? Etc...
const resumePDF = "https://drive.google.com/file/d/1C_pORHHBUdTfgKKebQ4vdqbCvCrDrlK1/preview";
const aboutCover = "/img/about-cover.jpg";

/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////RESUME VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/
const resume = () => {
  const htmlResume = document.getElementById("resume");
  const htmlResumeDiv = document.createElement("iframe");

  htmlResume;
  htmlResumeDiv;
  htmlResume.append(htmlResumeDiv);
  htmlResumeDiv.title = "Resume";
  htmlResumeDiv.src = resumePDF;
  htmlResumeDiv.classList.add("resumepdf");
};

/*
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////ABOUT VARIABLES///////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
*/
const about = () => {
  const htmlAbout = document.getElementById("about");
  const aboutImg = document.createElement("img");
  const aboutContainer = document.createElement("div");
  
  const dialogueBox = document.createElement("div");
  const dialogueText = document.createElement("div");
  const dialogueContainer = document.createElement("div");
  
  htmlAbout;
  htmlAbout.append(aboutImg);
  htmlAbout.append(aboutContainer);
  
  // aboutImg.setAttribute("src", aboutCover);
  aboutImg.setAttribute("src", "/img/bg-sam.jpeg");
  aboutImg.setAttribute("alt", "Samson Loftin Cover");
  aboutImg.setAttribute("class", "aboutCover");
  
  aboutContainer.append(dialogueContainer);
  dialogueContainer.append(dialogueBox);
  
  dialogueBox.setAttribute("class", "dialogueBox");
  dialogueBox.innerHTML = "Hey, let's test out this box. See how far it goes as I continue to chat you up! HAHAHAHAHAHAHA VERY FUNNY YOU KNOW EXACTLY WHAT I AM THINKING AT";
  
  window.onscroll = () => {
  	
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scrollTop / scrollHeight) * 100;
  let scrolledFixed = scrolled.toFixed(0);

console.log(scrolledFixed);
  // Shows & Hide Back to Top Link
  if (scrolledFixed >= 100) {
    aboutImg.style.width = 100% - ((scrolledFixed) + "%");
  } else if (scrolledFixed <= 101) {
  	aboutImg.style.maxWidth = "640px";
    
  }
  	
  	};
  
  /* DIALOGUE
  let dialogueChoice = 0;
  const aboutDialogue01 = "Hello, thank you for taking your time to go through my portfolio.";
  const aboutDialogue01a = "Feel free to email me at contact@samsonloftin.com or message me on social media!"
  const aboutDialogue02 = "I'm Samson Loftin, a Multimedia Designer based in Los Angeles!";
  const aboutDialogue03 = "I love sharing positivity through the gaggle of experiences I make! From";
  const aboutDialogue04 = "Augmented Reality";
  const aboutDialogue05 = "Animations";
  const aboutDialogue06 = "Graphic Design";
  const aboutDialogue07 = "Websites";
  const aboutDialogue08 = "And anything else I find creatively exciting!";
  const aboutDialogue09 = "I enjoy hiking, if only to take pictures like the one above!";
  const aboutDialogue10 = "You'll also find him playing games, watching anime, or watching folks like Easy Allies & Maximillian Dood!";
  const aboutDialogue11 = "";
*/

};



resume();
about();

};

main();