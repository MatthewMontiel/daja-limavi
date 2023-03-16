// function to highlight genre modifier
let GMBtn = document.querySelector(".button");

GMBtn.addEventListener("click", selectGenreModifiers);

function selectGenreModifiers(event) {
        event.target.toggle("useGM");
    }

// Code to get script from one script to another - export default "name" - import "name" from "filepath"