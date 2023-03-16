// function to highlight genre modifier
let GMBtn = document.querySelector(".button");

GMBtn.addEventListener("click", selectGenreModifiers);

function selectGenreModifiers(event) {
        event.target.toggle("useGM");
    }