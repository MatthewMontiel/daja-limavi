// import variables 
import outputArray from "./mainfetch.js";
// global variables
let userSearch = document.querySelector("#searchTerm");
let resultsListing = document.querySelector("#resultsListing");
let activeGMods = [];
let genModTray = document.querySelector("#gmTray");
let gMods = document.querySelectorAll("[data-genMod]");
let loadDeckBtn = document.querySelector("#search");
let shuffleBtn = document.querySelector("#log");
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
// function to switch Load Deck & Shuffle buttons and write activeGMods to search results Tablet
$(loadDeckBtn).click(function (event) {
  loadDeckBtn.classList.toggle("hide");
  shuffleBtn.classList.toggle("hide");
  displayGenres.innerHTML = activeGMods[0] + " + " + activeGMods[1] + " + " + activeGMods[2];
});
// function to switch Load Deck & Shuffle buttons and clear activeGMods to search results Tablet
$(shuffleBtn).click(function (event) {
  printShuffle();
  loadDeckBtn.classList.toggle("hide");
  shuffleBtn.classList.toggle("hide");
});
// function to print the outputArray from Shuffle fetch
function printShuffle() {
  for (var i = 0; i < outputArray.length; i++) {
    var suggestion = document.createElement("li");
    suggestion.classList.add();
    resultsListing.appendChild(suggestion);
  }
}

// export variables 
export default activeGMods;