let userSearch = document.querySelector("#searchTerm");
let activeGMods = [];
genModTray = document.querySelector("#gmTray");
gMods = document.querySelectorAll("[data-genMod]");
console.log(gMods);

// this part works but isn't the desired end result
$(genModTray).click(function (event) {
  let gmodState = event.target.getAttribute("value");
  let gmodString = event.target.getAttribute("title");
  if (gmodState === "inactive") {
    event.target.setAttribute("value", "active");
    console.log(gmodState);
    activeGMods.push(gmodString);
    console.log(gmodString);
  } else {
    event.target.setAttribute("value", "inactive");
    console.log(gmodState);
    function removeGMod() {
        let gmodIndex = activeGMods.indexOf(gmodString); console.log(gmodIndex);
        activeGMods.splice(gmodIndex,1);
    }
    removeGMod();
    console.log(gmodString);
  }
  console.log(activeGMods);
});
