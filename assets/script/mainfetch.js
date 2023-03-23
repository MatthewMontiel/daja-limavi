// import variables 
import activeGMods from "./script.js";
// global variables
let fetchURL = 1;
let results = "a";
let resultsArea = document.querySelector('#resultsArea');
let resultsList = document.querySelector('ul');
let searchBtn = document.getElementById('search');
let logBtn = document.getElementById('log');
let genreArray = activeGMods;

let ambientObject;
let bluesObject;
let classicalObject;
let countryObject;
let electronicObject;
let experimentalObject;
let folkObject;
let funkObject;
let hipHopObject;
let jazzObject;
let latinObject;
let metalObject;
let popObject;
let punkObject;
let religiousObject;
let rockObject;
let showtunesObject;
let worldObject;


let punk1;
let punk2;


let ambientUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_ambient_music_artists&prop=links&origin=*&format=json";

let bluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_musicians&prop=links&origin=*&format=json";

let classicalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_classical_pianists&prop=links&origin=*&format=json";

let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

let electronicUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_electro_house_artists&prop=links&origin=*&format=json";

let experimentalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_experimental_musicians&prop=links&origin=*&format=json";

let folkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_musicians&prop=links&origin=*&format=json";

let funkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_funk_musicians&prop=links&origin=*&format=json";

let hiphopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_hip_hop_musicians&prop=links&origin=*&format=json";

let jazzUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_jazz_musicians&prop=links&origin=*&format=json";

let latinUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Latin_American_rock_musicians&prop=links&origin=*&format=json";

let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_heavy_metal_bands&prop=links&origin=*&format=json";

let popUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_dance-pop_artists&prop=links&origin=*&format=json";

let punkUrl1 = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";

let punkUrl2 = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_rock_bands,_L–Z&prop=links&origin=*&format=json";

let religiousUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_Christian_rock_bands&prop=links&origin=*&format=json";

let rockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_alternative_rock_artists&prop=links&origin=*&format=json";

let showtunesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_video_game_musicians&prop=links&origin=*&format=json";

let worldUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_C-pop_artists&prop=links&origin=*&format=json";


// functions area
// determines which fetch functions to run based on array

function log() {
  let punkArray1 = punk1.parse.links;
  let punkArray2 = punk2.parse.links;
  let punkArrayFull = punkArray1.concat(punkArray2);
  console.log(punkArrayFull)
}

function runGenres() {
  if (genreArray.includes("Ambient")) {
    getAmbient();
  }
  if (genreArray.includes("Blues")) {
    getBlues();
  };
  if (genreArray.includes("Classical")) {
    getClassical();
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
  if (genreArray.includes("HipHop")) {
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
    getPunk();
  };
  if (genreArray.includes("Rock")) {
    getRock();
  };
  if (genreArray.includes("Showtunes")) {
    getShowtunes();
  };
  if (genreArray.includes("World")) {
    getWorld();
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
      console.log(data)
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
      console.log(data)
    });
}

function getClassical() {
  fetch(classicalUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }

    }).then(function (data) {
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      console.log(data)
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
      metalObject = data;
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
      metalObject = data;
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
    .then(function (data1) {
      punk1 = data1
    });
  fetch(punkUrl2)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
    })
    .then(function (data2) {
      punk2 = data2
    });
  // .then(console.log(punkObject))
}

function getReligious() {
  fetch(religiousUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      metalObject = data;
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
      metalObject = data;
    })
  // .then(console.log(rockObject))
}

function getShowtunes() {
  fetch(showtunesUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      metalObject = data;
    })
  // .then(console.log(showtunesObject))
}

function getWorld() {
  fetch(worldUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      metalObject = data;
    })
  // .then(console.log(worldObject))
}





// function to compare fetch result arrays



// event listener to run getGenres function
searchBtn.addEventListener('click', runGenres);
logBtn.addEventListener('click', log);
// export variables
    // export default results;




