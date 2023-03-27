// import variables 
// import outputArray from "./mainfetch.js";
// global variables
let userSearch = document.querySelector("#searchTerm");
let resultsListing = document.querySelector("#resultsListing");
let activeGMods = [];
let genModTray = document.querySelector("#gmTray");
let gMods = document.querySelectorAll("[data-genMod]");
let loadDeckBtn = document.querySelector("#search");
let shuffleBtn = document.querySelector("#log");
let remixBtn = document.querySelector("#remix");
let displayGenres = document.querySelector("#displayGenres");

// functions area
// primary function cased on genre modifier click selection will add/remove
$(genModTray).click(function (event) {
  let gmodState = event.target.getAttribute("value");
  let gmodString = event.target.getAttribute("title");
  if (gmodState === "inactive") {
    event.target.setAttribute("value", "active");
    // console.log(gmodState);
    activeGMods.push(gmodString);
    // console.log(gmodString);
  } else {
    event.target.setAttribute("value", "inactive");
    // console.log(gmodState);
    function removeGMod() {
      let gmodIndex = activeGMods.indexOf(gmodString); console.log(gmodIndex);
      activeGMods.splice(gmodIndex, 1);
    }
    removeGMod();
    // console.log(gmodString);
  }
  console.log(activeGMods);
});
// function to switch Load Deck to Shuffle buttons and write activeGMods to search results Tablet & mainfetch
$(loadDeckBtn).click(function (event) {
  setTime();
  displayGenres.innerHTML = activeGMods.join("...") + "...";
});
// function to switch Shuffle & Remix buttons and load fetch results
$(shuffleBtn).click(function (event) {
  shuffleBtn.classList.add("hide");
  remixBtn.classList.remove("hide");
});
// function to switch Remix and Load Deck button and reset system
$(remixBtn).click(function (event) {
  remixBtn.classList.add("hide");
  loadDeckBtn.classList.remove("hide");
  window.location.reload();
});

let secondsLeft = 1;

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      loadDeckBtn.classList.add("hide");
      shuffleBtn.classList.remove("hide");
      clearInterval(timerInterval);
    }

  }, 1000);
}

// export variables 
export default activeGMods;