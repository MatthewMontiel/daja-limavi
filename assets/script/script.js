let activeGMods = [];
GenModTray = document.querySelector("#gmTray");
GMods = document.querySelectorAll("[data-genMod]");

// this part works but isn't the desired end result
$(GenModTray).click(function() {
    activeGMods.push(this).innerHTML;console.log(activeGMods);
    });

// $(GenModTray).click(function() {
//     if (EventTarget.value === "inactive") {
//         EventTarget.setAttribute("value","active");
//     } else {
//         EventTarget.set("value","inactive");
//     }
//     console.log(activeGMods);
// });