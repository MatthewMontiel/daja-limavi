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

let ambientArray;
let bluesArray;
let countryArray;
let electronicArray;
let experimentalArray;
let folkArray;
let funkArray;
let hipHopArray;
let jazzArray;
let latinArray;
let metalArray;
let popArray;
let punkArray;
let religiousArray;
let rockArray;
let worldArray;
let postRockArray;
let instrumentalArray;


let ambientUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_ambient_music_artists&prop=links&origin=*&format=json";

let bluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_musicians&prop=links&origin=*&format=json";

let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

let electronicUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_electro_house_artists&prop=links&origin=*&format=json";

let experimentalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_experimental_musicians&prop=links&origin=*&format=json";

let folkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_musicians&prop=links&origin=*&format=json";

let funkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_funk_musicians&prop=links&origin=*&format=json";

let hiphopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_hip_hop_musicians&prop=links&origin=*&format=json";

let jazzUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_jazz_musicians&prop=links&origin=*&format=json";

let latinUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Latin_American_rock_musicians&prop=links&origin=*&format=json";

let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_doom_metal_bands&prop=links&origin=*&format=json";

let popUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_dance-pop_artists&prop=links&origin=*&format=json";

let punkUrl1 = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";

let punkUrl2 = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_rock_bands,_L–Z&prop=links&origin=*&format=json";

let religiousUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Christian_rock_bands&prop=links&origin=*&format=json";

let rockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_alternative_rock_artists&prop=links&origin=*&format=json";

let worldUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_C-pop_artists&prop=links&origin=*&format=json";

let postRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_post-rock_bands&prop=links&origin=*&format=json";

let instrumentalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_instrumental_bands&prop=links&origin=*&format=json";

  

function compare() {
  if (genreArray[0]=="Ambient") {
    sortArray1 = ambientArray;};
  if (genreArray[0]=="blues") {
    sortArray1 = bluesArray;};
  if (genreArray[0]=="Country") {
    sortArray1 = countryArray;};
  if (genreArray[0]=="instrumental") {
    sortArray1 = instrumentalArray;};
  if (genreArray[0]=="post-rock") {
    sortArray1 = postRockArray;};
  if (genreArray[0]=="Metal") {
    sortArray1 = metalArray;};
  if (genreArray[0]=="Punk") {
    sortArray1 = punkArray;};

  if (genreArray[1]=="Ambient") {
    sortArray2 = ambientArray;};
  if (genreArray[1]=="blues") {
    sortArray2 = bluesArray;};
  if (genreArray[1]=="Country") {
    sortArray2 = countryArray;};
  if (genreArray[1]=="instrumental") {
    sortArray2 = instrumentalArray;};
  if (genreArray[1]=="post-rock") {
    sortArray2 = postRockArray;};
  if (genreArray[1]=="Metal") {
    sortArray2 = metalArray;};
  if (genreArray[1]=="Punk") {
    sortArray2 = punkArray;};

  if (genreArray[2]=="Ambient") {
    sortArray3 = ambientArray;};
  if (genreArray[2]=="blues") {
    sortArray3 = bluesArray;};
  if (genreArray[2]=="Country") {
    sortArray3 = countryArray;};
  if (genreArray[2]=="instrumental") {
    sortArray3 = instrumentalArray;};
  if (genreArray[2]=="post-rock") {
    sortArray3 = postRockArray;};
  if (genreArray[2]=="Metal") {
    sortArray3 = metalArray;};
  if (genreArray[2]=="Punk") {
    sortArray3 = punkArray;};

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
    };};
  } else {
    for (var m = 0; m < sortArray1.length; m++) {
      if (sortArray2.includes(sortArray1[m])) {
        outputArray.push(sortArray1[m]);
      };};};
  console.log(outputArray);
}


function runGenres() {
  if (genreArray.includes("Ambient")) {
    getAmbient();
  }
  if (genreArray.includes("blues")) {
    getBlues();
  };
  if (genreArray.includes("Country")) {
    getCountry();
  };
  if (genreArray.includes("Electronic")) {
    getElectronic();
  };
  if (genreArray.includes("Experimental")) {
    getExperimental();
  };
  if (genreArray.includes("Folk")) {
    getFolk();
  };
  if (genreArray.includes("Funk")) {
    getFunk();
  };
  if (genreArray.includes("Hip-Hop/Rap")) {
    getHipHop();
  };
  if (genreArray.includes("Jazz")) {
    getJazz();
  };
  if (genreArray.includes("Latin")) {
    getLatin();
  };
  if (genreArray.includes("Metal")) {
    getMetal();
  };
  if (genreArray.includes("Pop")) {
    getPop();
  };
  if (genreArray.includes("Punk")) {
    getPunk();
  };
  if (genreArray.includes("Religious")) {
    getReligious();
  };
  if (genreArray.includes("Rock")) {
    getRock();
  };
  if (genreArray.includes("World Music")) {
    getWorld();
  };
  if (genreArray.includes("post-rock")) {
    getPostRock();
  };
  if (genreArray.includes("instrumental")) {
    getInstrumental();
  };
}




// functions that fetch various genres
function getAmbient() {
  fetch(ambientUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      ambientArray = data.parse.links;
      // console.log(ambientArray);
    });
}

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

function getElectronic() {
  fetch(electronicUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      electronicArray = data.parse.links;
      console.log(electronicArray);
    });
}

function getExperimental() {
  fetch(experimentalUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      experimentalArray = data.parse.links;
      console.log(experimentalArray);
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

function getFunk() {
  fetch(funkUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      funkArray = data.parse.links;
      console.log(funkArray);
    });
}

function getHipHop() {
  fetch(hiphopUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      hipHopArray = data.parse.links;
      console.log(hipHopArray);
    });
}

function getJazz() {
  fetch(jazzUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      jazzArray = data.parse.links;
      console.log(jazzArray);
    });
}

function getLatin() {
  fetch(latinUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      latinArray = data.parse.links;
      console.log(latinArray);
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

function getReligious() {
  fetch(religiousUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      religiousArray = data.parse.links;
      console.log(religiousArray);
    })
  // .then(console.log(religiousObject))
}

function getRock() {
  fetch(rockUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      rockArray = data.parse.links;
      console.log(rockArray);
    })
  // .then(console.log(rockObject))
}


function getWorld() {
  fetch(worldUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      worldArray = data.parse.links;
      console.log(worldArray);
    })
  // .then(console.log(worldObject))
}

function getPostRock() {
  fetch(postRockUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      postRockArray = data.parse.links;
      // console.log(worldArray);
    })
  // .then(console.log(worldObject))
}

function getInstrumental() {
  fetch(instrumentalUrl)
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