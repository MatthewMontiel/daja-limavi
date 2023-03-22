// import variables 
// import results from "./mainfetch";
// global variables
  let userSearch = document.querySelector("#searchTerm");
  let resultsListing = document.querySelector("#resultsListing");
  let activeGMods = [];
  let genModTray = document.querySelector("#gmTray");
  let gMods = document.querySelectorAll("[data-genMod]");
  // console.log(gMods);

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
      console.log(gmodState);
      function removeGMod() {
        let gmodIndex = activeGMods.indexOf(gmodString); console.log(gmodIndex);
        activeGMods.splice(gmodIndex,1);
      }
      removeGMod();
      // console.log(gmodString);
    }
    console.log(activeGMods);
  });
  // function to write results in display list
  // // function displayResults () {
    
  // };
// export variables 
  export default activeGMods;