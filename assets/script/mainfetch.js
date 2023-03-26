// import variables 
import activeGMods from "./script.js";
// global variables
let fetchURL = 1;
let results = "a";
let resultsArea = document.querySelector('#resultsArea');
let resultsList = document.querySelector('ul');
let searchBtn = document.getElementById('search');
let logBtn = document.getElementById('log');
let log2Btn = document.getElementById('log2');
let genreArray = activeGMods;
let sortArray1;
let sortArray2;
let sortArray3;
let sortCollapseArray = [];
let outputArray = [];

// Genre Let declarations
let bluesArray;
let bluesRockArray;
let bluesPunkArray;
let countryArray;
let countryBluesArray;
let countryRockArray;
let folkArray;
let folkMetalArray;
let folkRockArray;
let metalArray;
let metalcoreArray
let heavyMetalArray;
let altMetalArray;
let thrashMetalArray;
// NO PROGRESSIVE METAL
// let melodicDeathMetalArray;
// let nuMetalArray;
let popArray;
let dancePopArray;
let indiePopArray;
let powerPopArray;
let punkArray;
let psychobillyArray
let hardcorePunkArray;
let punkBluesArray;
let psychedelicArray;
let psychedelicFolkArray;
let psychedelicPopArray;
let psychedelicRockArray;
let acidRockArray;


// Genre Urls
let bluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_musicians&prop=links&origin=*&format=json";

let bluesRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_rock_musicians&prop=links&origin=*&format=json";

let bluesPunkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_blues_musicians_and_bands&prop=links&origin=*&format=json";

let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

let countryBluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_country_blues_musicians&prop=links&origin=*&format=json";

let countryRock = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_country_rock_musicians&prop=links&origin=*&format=json";

let psychobillyUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychobilly_bands&prop=links&origin=*&format=json";

let folkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_musicians&prop=links&origin=*&format=json";

let folkMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_metal_bands&prop=links&origin=*&format=json";

let folkRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_rock_artists&prop=links&origin=*&format=json";

// There isn't a url for straight up Metal, so this one is doom metal
let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_doom_metal_bands&prop=links&origin=*&format=json";

let metalCoreUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_metalcore_bands&prop=links&origin=*&format=json";

let heavyMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_heavy_metal_bands&prop=links&origin=*&format=json";

let altMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_alternative_metal_artists&prop=links&origin=*&format=json";

let thrashMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_thrash_metal_bands&prop=links&origin=*&format=json";

// There isn't a url for straight up Pop, so this one is dance pop
let popUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_dance-pop_artists&prop=links&origin=*&format=json";

let dancePopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_dance-pop_artists&prop=links&origin=*&format=json";

let indiePopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_indie_pop_artists&prop=links&origin=*&format=json";

let powerPopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_power_pop_artists_and_songs&prop=links&origin=*&format=json";

let punkUrl1 = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";

let punkUrl2 = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_rock_bands,_L–Z&prop=links&origin=*&format=json";

let hardcorePunkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_hardcore_punk_bands&prop=links&origin=*&format=json";

let punkBluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_blues_musicians_and_bands&prop=links&origin=*&format=json";

// There isn't a url for straight up Psychedelic, so this one is psychedelic rock
let psychedelicUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychedelic_rock_artists&prop=links&origin=*&format=json";

let psychedelicFolkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychedelic_folk_artists&prop=links&origin=*&format=json";

let psychedelicPopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychedelic_pop_artists&prop=links&origin=*&format=json";

let psychedelicRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychedelic_rock_artists&prop=links&origin=*&format=json";

let acidRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_acid_rock_artists&prop=links&origin=*&format=json";





function compare() {
  // ARRAY 1------
  // Blues
  if (genreArray[0] == "Blues") {
    sortArray1 = bluesArray;
  };
  // Blues Rock
  if (genreArray[0] == "Blues Rock") {
    sortArray1 = bluesRockArray;
  };
  // Blues Punk
  if (genreArray[0] == "Blues Punk") {
    sortArray1 = bluesPunkArray;
  };
  // Country
  if (genreArray[0] == "Country") {
    sortArray1 = countryArray;
  };
  // Country Blues
  if (genreArray[0] == "Country Blues") {
    sortArray1 = countryBluesArray;
  };
  // Country Rock
  if (genreArray[0] == "Country Rock") {
    sortArray1 = countryRockArray;
  };
  // Folk
  if (genreArray[0] == "Folk") {
    sortArray1 = folkArray;
  };
  // Folk Metal
  if (genreArray[0] == "Folk Metal") {
    sortArray1 = folkMetalArray;
  };
  // Folk Rock
  if (genreArray[0] == "Folk Rock") {
    sortArray1 = folkRockArray;
  };
  // Metal
  if (genreArray[0] == "Metal") {
    sortArray1 = metalArray;
  };
  // Metal Core
  if (genreArray[0] == "Metal Core") {
    sortArray1 = metalCoreArray;
  };
  // Heavy Metal
  if (genreArray[0] == "Heavy Metal") {
    sortArray1 = heavyMetalArray;
  };
  // Thrash Metal
  if (genreArray[0] == "Thrash Metal") {
    sortArray1 = thrashMetalArray;
  };
  // Pop
  if (genreArray[0] == "Pop") {
    sortArray1 = popArray;
  };
  // Dance Pop
  if (genreArray[0] == "Dance Pop") {
    sortArray1 = dancePopArray;
  };
  // Indie Pop
  if (genreArray[0] == "Indie Pop") {
    sortArray1 = indiePopArray;
  };
  // Power Pop
  if (genreArray[0] == "Power Pop") {
    sortArray1 = powerPopArray;
  };
  // Punk
  if (genreArray[0] == "Punk") {
    sortArray1 = punkArray;
  };
  // Psychobilly
  if (genreArray[0] == "Psychobilly") {
    sortArray1 = psychobillyArray;
  };
  // Hardcore Punk
  if (genreArray[0] == "Hardcore Punk") {
    sortArray1 = hardcorePunkArray;
  };
  // Punk Blues
  if (genreArray[0] == "Punk Blues") {
    sortArray1 = punkBluesArray;
  };
  // Psychedelic
  if (genreArray[0] == "Psychedelic") {
    sortArray1 = psychedelicArray;
  };
  // Psychedelic Folk
  if (genreArray[0] == "Psychedelic Folk") {
    sortArray1 = psychedelicFolkArray;
  };
  // Psychedelic Rock
  if (genreArray[0] == "Psychedelic Rock") {
    sortArray1 = psychedelicRockArray;
  };
  // Acid Rock
  if (genreArray[0] == "Acid Rock") {
    sortArray1 = acidRockArray;
  };

  // ARRAY 2 ------
  // Blues
  if (genreArray[1] == "Blues") {
    sortArray2 = bluesArray;
  };
  // Blues Rock
  if (genreArray[1] == "Blues Rock") {
    sortArray2 = bluesRockArray;
  };
  // Blues Punk
  if (genreArray[1] == "Blues Punk") {
    sortArray2 = bluesPunkArray;
  };
  // Country
  if (genreArray[1] == "Country") {
    sortArray2 = countryArray;
  };
  // Country Blues
  if (genreArray[1] == "Country Blues") {
    sortArray2 = countryBluesArray;
  };
  // Country Rock
  if (genreArray[1] == "Country Rock") {
    sortArray2 = countryRockArray;
  };
  // Folk
  if (genreArray[1] == "Folk") {
    sortArray2 = folkArray;
  };
  // Folk Metal
  if (genreArray[1] == "Folk Metal") {
    sortArray2 = folkMetalArray;
  };
  // Folk Rock
  if (genreArray[1] == "Folk Rock") {
    sortArray2 = folkRockArray;
  };
  // Metal
  if (genreArray[1] == "Metal") {
    sortArray2 = metalArray;
  };
  // Metal Core
  if (genreArray[1] == "Metal Core") {
    sortArray2 = metalCoreArray;
  };
  // Heavy Metal
  if (genreArray[1] == "Heavy Metal") {
    sortArray2 = heavyMetalArray;
  };
  // Thrash Metal
  if (genreArray[1] == "ThrashMetal") {
    sortArray2 = thrashMetalArray;
  };
  // Pop
  if (genreArray[1] == "Pop") {
    sortArray2 = popArray;
  };
  // Dance Pop
  if (genreArray[1] == "Dance Pop") {
    sortArray2 = dancePopArray;
  };
  // Indie Pop
  if (genreArray[1] == "Indie Pop") {
    sortArray2 = indiePopArray;
  };
  // Power Pop
  if (genreArray[1] == "Power Pop") {
    sortArray2 = powerPopArray;
  };
  // Punk
  if (genreArray[1] == "Punk") {
    sortArray2 = punkArray;
  };
  // Psychobilly
  if (genreArray[1] == "Psychobilly") {
    sortArray2 = psychobillyArray;
  };
  // Hardcore Punk
  if (genreArray[1] == "Hardcore Punk") {
    sortArray2 = hardcorePunkArray;
  };
  // Punk Blues
  if (genreArray[1] == "Punk Blues") {
    sortArray2 = punkBluesArray;
  };
  // Psychedelic
  if (genreArray[1] == "Psychedelic") {
    sortArray2 = psychedelicArray;
  };
  // Psychedelic Folk
  if (genreArray[1] == "Psychedelic Folk") {
    sortArray2 = psychedelicFolkArray;
  };
  // Psychedelic Rock
  if (genreArray[1] == "Psychedelic Rock") {
    sortArray2 = psychedelicRockArray;
  };
  // Acid Rock
  if (genreArray[1] == "Acid Rock") {
    sortArray2 = acidRockArray;
  };


  // ARRAY 3 ------
  // Blues
  if (genreArray[2] == "Blues") {
    sortArray3 = bluesArray;
  };
  // Blues Rock
  if (genreArray[2] == "Blues Rock") {
    sortArray3 = bluesRockArray;
  };
  // Blues Punk
  if (genreArray[2] == "Blues Punk") {
    sortArray3 = bluesPunkArray;
  };
  // Country
  if (genreArray[2] == "Country") {
    sortArray3 = countryArray;
  };
  // Country Blues
  if (genreArray[2] == "Country Blues") {
    sortArray3 = countryBluesArray;
  };
  // Country Rock
  if (genreArray[2] == "Country Rock") {
    sortArray3 = countryRockArray;
  };
  // Folk
  if (genreArray[2] == "Folk") {
    sortArray3 = folkArray;
  };
  // Folk Metal
  if (genreArray[2] == "Folk Metal") {
    sortArray3 = folkMetalArray;
  };
  // Folk Rock
  if (genreArray[2] == "Folk Rock") {
    sortArray3 = folkRockArray;
  };
  // Metal
  if (genreArray[2] == "Metal") {
    sortArray3 = metalArray;
  };
  // Metal Core
  if (genreArray[2] == "Metal Core") {
    sortArray3 = metalCoreArray;
  };
  // Heavy Metal
  if (genreArray[2] == "Heavy Metal") {
    sortArray3 = heavyMetalArray;
  };
  // Thrash Metal
  if (genreArray[2] == "ThrashMetal") {
    sortArray3 = thrashMetalArray;
  };
  // Pop
  if (genreArray[2] == "Pop") {
    sortArray3 = popArray;
  };
  // Dance Pop
  if (genreArray[2] == "Dance Pop") {
    sortArray3 = dancePopArray;
  };
  // Indie Pop
  if (genreArray[2] == "Indie Pop") {
    sortArray3 = indiePopArray;
  };
  // Power Pop
  if (genreArray[2] == "Power Pop") {
    sortArray3 = powerPopArray;
  };
  // Punk
  if (genreArray[2] == "Punk") {
    sortArray3 = punkArray;
  };
  // Psychobilly
  if (genreArray[2] == "Psychobilly") {
    sortArray3 = psychobillyArray;
  };
  // Hardcore Punk
  if (genreArray[2] == "Hardcore Punk") {
    sortArray3 = hardcorePunkArray;
  };
  // Punk Blues
  if (genreArray[2] == "Punk Blues") {
    sortArray3 = punkBluesArray;
  };
  // Psychedelic
  if (genreArray[2] == "Psychedelic") {
    sortArray3 = psychedelicArray;
  };
  // Psychedelic Folk
  if (genreArray[2] == "Psychedelic Folk") {
    sortArray3 = psychedelicFolkArray;
  };
  // Psychedelic Rock
  if (genreArray[2] == "Psychedelic Rock") {
    sortArray3 = psychedelicRockArray;
  };
  // Acid Rock
  if (genreArray[2] == "Acid Rock") {
    sortArray3 = acidRockArray;
  };



  for (var i = 0; i < sortArray1.length; i++) {
    sortArray1.splice(i, 1, sortArray1[i]["*"]);
  };
  // console.log(sortArray1);
  for (var j = 0; j < sortArray2.length; j++) {
    sortArray2.splice(j, 1, sortArray2[j]["*"]);
  };
  // console.log(sortArray2);

  if (genreArray[2]) {
    for (var k = 0; k < sortArray3.length; k++) {
      sortArray3.splice(k, 1, sortArray3[k]["*"]);
    };
    // console.log(sortArray3);
  };

  if (genreArray[2]) {
    for (var m = 0; m < sortArray1.length; m++) {
      if (sortArray2.includes(sortArray1[m]) && sortArray3.includes(sortArray1[m])) {
        outputArray.push(sortArray1[m]);
      };
    };
  } else {
    for (var m = 0; m < sortArray1.length; m++) {
      if (sortArray2.includes(sortArray1[m])) {
        outputArray.push(sortArray1[m]);
      };
    };
  };
  console.log(outputArray);
}


function runGenres() {
  if (genreArray.includes("Blues")) {
    getBlues();
  };
  if (genreArray.includes("Blues Rock")) {
    getBluesRock();
  };
  if (genreArray.includes("Blues Punk")) {
    getBluesPunk();
  };
  if (genreArray.includes("Country")) {
    getCountry();
  };
  if (genreArray.includes("Country Blues")) {
    getCountryBlues();
  };
  if (genreArray.includes("Country Rock")) {
    getCountryRock();
  };
  if (genreArray.includes("Folk")) {
    getFolk();
  };
  if (genreArray.includes("Folk Metal")) {
    getFolkMetal();
  };
  if (genreArray.includes("Folk Rock")) {
    getFolkRock();
  };
  if (genreArray.includes("Metal")) {
    getMetal();
  };
  if (genreArray.includes("Metal Core")) {
    getMetalCore();
  };
  if (genreArray.includes("Heavy Metal")) {
    getHeavyMetal();
  };
  if (genreArray.includes("Alternative Metal")) {
    getAlternativeMetal();
  };
  if (genreArray.includes("Thrash Metal")) {
    getThrashMetal();
  };
  if (genreArray.includes("Pop")) {
    getPop();
  };
  if (genreArray.includes("Dance Pop")) {
    getDancePop();
  };
  if (genreArray.includes("Indie Pop")) {
    getIndiePop();
  };
  if (genreArray.includes("Power Pop")) {
    getPowerPop();
  };
  if (genreArray.includes("Punk")) {
    getPunk();
  };
  if (genreArray.includes("Psychobilly")) {
    getPsychobilly();
  };
  if (genreArray.includes("Hardcore Punk")) {
    getHardcorePunk();
  };
  if (genreArray.includes("Punk Blues")) {
    getPunkBlues();
  };
  if (genreArray.includes("Psychedelic")) {
    getPsychedelic();
  };
  if (genreArray.includes("Psychedelic Folk")) {
    getPsychedelicFolk();
  };
  if (genreArray.includes("Psychedelic Pop")) {
    getPsychedelicPop();
  };
  if (genreArray.includes("Psychedelic Rock")) {
    getPsychedelicRock();
  };
  if (genreArray.includes("Acid Rock")) {
    getAcidRock();
  };
}




// functions that fetch various genres

function getBlues() {
  fetch(bluesUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      bluesArray = data.parse.links;
      // console.log(bluesArray);
    });
}

function getCountry() {
  fetch(countryUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
    }).then(function (data) {
      countryArray = data.parse.links;
      // console.log(countryArray);
    });
}

function getFolk() {
  fetch(folkUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      folkArray = data.parse.links;
      console.log(folkArray);
    });
}


function getMetal() {
  fetch(metalUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      metalArray = data.parse.links;
      // console.log(metalArray);
    })
  // .then(console.log(metalObject))
}

function getPop() {
  fetch(popUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      popArray = data.parse.links;
      console.log(popArray);
    })
  // .then(console.log(popObject))
}

function getPunk() {
  fetch(punkUrl1)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
    })
    .then(function (punk1) {
      fetch(punkUrl2)
        .then(function (response) {
          if (response.status == 200) {
            // console.log(response);
            return response.json();
          }
        })
        .then(function (punk2) {
          let punkHalf1 = punk1.parse.links;
          let punkHalf2 = punk2.parse.links;
          punkArray = punkHalf1.concat(punkHalf2);
          // console.log(punkArray)
        });
    });

}

function getPsychedlic() {
  fetch(psychedelicUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      instrumentalArray = data.parse.links;
      // console.log(worldArray);
    })
  // .then(console.log(worldObject))
}




// event listener to run getGenres function
searchBtn.addEventListener('click', runGenres);
logBtn.addEventListener('click', compare);
// log2Btn.addEventListener('click', compare2);
// export variables
// export default results;



// NOTES

// use for loop to filter outputArray

// text to filter for:
// "Wikipedia:"
// "Category:"
// "Template:"
// "(identifier)"
// ".com"
// "AllMusic"
// "NME"

// change "search" button to "select"
// change "log" button to "search" and make it only display once "select" is clicked