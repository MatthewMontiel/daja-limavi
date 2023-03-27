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
let outputArray = [];
let resultsListing = document.querySelector("#resultsListing");

// Genre Let declarations
let bluesArray;
let countryArray;
let folkArray;
let metalArray;
let popArray;
let punkArray;
let psychedelicArray;

// Genre Urls
let bluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_musicians&prop=links&origin=*&format=json";

let bluesRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_blues_rock_musicians&prop=links&origin=*&format=json";

let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

let countryBluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_country_blues_musicians&prop=links&origin=*&format=json";

let countryRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_country_rock_musicians&prop=links&origin=*&format=json";

let altCountryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_alternative_country_musicians&prop=links&origin=*&format=json";

let psychobillyUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_psychobilly_bands&prop=links&origin=*&format=json";

let folkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_musicians&prop=links&origin=*&format=json";

let folkMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_metal_bands&prop=links&origin=*&format=json";

let folkRockUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_folk_rock_artists&prop=links&origin=*&format=json";

let metalCoreUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_metalcore_bands&prop=links&origin=*&format=json";

let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_heavy_metal_bands&prop=links&origin=*&format=json";

let altMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_alternative_metal_artists&prop=links&origin=*&format=json";

let progMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_progressive_metal_artists&prop=links&origin=*&format=json";

let thrashMetalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_thrash_metal_bands&prop=links&origin=*&format=json";

let dancePopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_dance-pop_artists&prop=links&origin=*&format=json";

let indiePopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_indie_pop_artists&prop=links&origin=*&format=json";

let powerPopUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_power_pop_artists_and_songs&prop=links&origin=*&format=json";

let punkUrl1 = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";

let punkUrl2 = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_rock_bands,_L–Z&prop=links&origin=*&format=json";

let popPunkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_pop-punk_bands&prop=links&origin=*&format=json";


let hardcoreUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_hardcore_punk_bands&prop=links&origin=*&format=json";

let punkBluesUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_blues_musicians_and_bands&prop=links&origin=*&format=json";

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
  // Country
  if (genreArray[0] == "Country") {
    sortArray1 = countryArray;
  };
  // Folk
  if (genreArray[0] == "Folk") {
    sortArray1 = folkArray;
  };
  // Metal
  if (genreArray[0] == "Metal") {
    sortArray1 = metalArray;
  };
  // Pop
  if (genreArray[0] == "Pop") {
    sortArray1 = popArray;
  };
  // Punk
  if (genreArray[0] == "Punk") {
    sortArray1 = punkArray;
  };
  // Psychedelic
  if (genreArray[0] == "Psychedelic") {
    sortArray1 = psychedelicArray;
  };

  // ARRAY 2 ------
  // Blues
  if (genreArray[1] == "Blues") {
    sortArray2 = bluesArray;
  };
  // Country
  if (genreArray[1] == "Country") {
    sortArray2 = countryArray;
  };
  // Folk
  if (genreArray[1] == "Folk") {
    sortArray2 = folkArray;
  };
  // Metal
  if (genreArray[1] == "Metal") {
    sortArray2 = metalArray;
  };
  // Pop
  if (genreArray[1] == "Pop") {
    sortArray2 = popArray;
  };
  // Punk
  if (genreArray[1] == "Punk") {
    sortArray2 = punkArray;
  };
  // Psychedelic
  if (genreArray[1] == "Psychedelic") {
    sortArray2 = psychedelicArray;
  };


  // ARRAY 3 ------
  // Blues
  if (genreArray[2] == "Blues") {
    sortArray3 = bluesArray;
  };
  // Country
  if (genreArray[2] == "Country") {
    sortArray3 = countryArray;
  };
  // Folk
  if (genreArray[2] == "Folk") {
    sortArray3 = folkArray;
  };
  // Metal
  if (genreArray[2] == "Metal") {
    sortArray3 = metalArray;
  };
  // Pop
  if (genreArray[2] == "Pop") {
    sortArray3 = popArray;
  };
  // Punk
  if (genreArray[2] == "Punk") {
    sortArray3 = punkArray;
  };
  // Psychedelic
  if (genreArray[2] == "Psychedelic") {
    sortArray3 = psychedelicArray;
  };



  for (var i = 0; i < sortArray1.length; i++) {
    sortArray1.splice(i, 1, sortArray1[i]["*"]);
  };
  // console.log(sortArray1);
  if (genreArray[1]) {
    for (var j = 0; j < sortArray2.length; j++) {
      sortArray2.splice(j, 1, sortArray2[j]["*"]);
    };
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
  } else if (genreArray[1]) {
    for (var m = 0; m < sortArray1.length; m++) {
      if (sortArray2.includes(sortArray1[m])) {
        outputArray.push(sortArray1[m]);
      };
    };
  } else {
    outputArray = sortArray1;
  };
  console.log(outputArray);
  printShuffle();
}


function runGenres() {
  if (genreArray.includes("Blues")) {
    getBlues();
  };
  if (genreArray.includes("Country")) {
    getCountry();
  };
  if (genreArray.includes("Folk")) {
    getFolk();
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
  if (genreArray.includes("Psychedelic")) {
    getPsychedelic();
  };
}




// functions that fetch various genres

function getBlues() {
  fetch(bluesUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (blues) {
      fetch(bluesRockUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (bluesRock) {
          fetch(countryBluesUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (countryBlues) {
              fetch(punkBluesUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (punkBlues) {
                  let bluesPiece1 = blues.parse.links;
                  let bluesPiece2 = bluesRock.parse.links;
                  let bluesPiece3 = countryBlues.parse.links;
                  let bluesPiece4 = punkBlues.parse.links;
                  bluesArray = bluesPiece1.concat(bluesPiece2, bluesPiece3, bluesPiece4);
                });
            });
        });
    });

}

function getCountry() {
  fetch(countryUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (country) {
      fetch(altCountryUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (altCountry) {
          fetch(countryBluesUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (countryBlues) {
              fetch(psychobillyUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (psychobilly) {
                  fetch(countryRockUrl)
                    .then(function (response) {
                      if (response.status == 200) {
                        return response.json();
                      }
                    })
                    .then(function (countryRock) {

                      let countryPiece1 = country.parse.links;
                      let countryPiece2 = altCountry.parse.links;
                      let countryPiece3 = countryBlues.parse.links;
                      let countryPiece4 = psychobilly.parse.links;
                      let countryPiece5 = countryRock.parse.links;
                      countryArray = countryPiece1.concat(countryPiece2, countryPiece3, countryPiece4, countryPiece5);
                    });
                });
            });
        });
    });

}

function getFolk() {
  fetch(folkUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (folk) {
      fetch(folkRockUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (folkRock) {
          fetch(psychedelicFolkUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (psychedelicFolk) {
              fetch(folkMetalUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (folkMetal) {
                  let folkPiece1 = folk.parse.links;
                  let folkPiece2 = folkRock.parse.links;
                  let folkPiece3 = psychedelicFolk.parse.links;
                  let folkPiece4 = folkMetal.parse.links;
                  folkArray = folkPiece1.concat(folkPiece2, folkPiece3, folkPiece4);
                });
            });
        });
    });

}


function getMetal() {
  fetch(metalUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (metal) {
      fetch(folkMetalUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (folkMetal) {
          fetch(altMetalUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (altMetal) {
              fetch(metalCoreUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (metalCore) {
                  fetch(thrashMetalUrl)
                    .then(function (response) {
                      if (response.status == 200) {
                        return response.json();
                      }
                    })
                    .then(function (thrashMetal) {
                      fetch(progMetalUrl)
                        .then(function (response) {
                          if (response.status == 200) {
                            return response.json();
                          }
                        })
                        .then(function (progMetal) {
                          let metalPiece1 = metal.parse.links;
                          let metalPiece2 = folkMetal.parse.links;
                          let metalPiece3 = altMetal.parse.links;
                          let metalPiece4 = metalCore.parse.links;
                          let metalPiece5 = thrashMetal.parse.links;
                          let metalPiece6 = progMetal.parse.links;
                          metalArray = metalPiece1.concat(metalPiece2, metalPiece3, metalPiece4, metalPiece5, metalPiece6);
                          // console.log(punkArray)
                        });
                    });
                });
            });
        });
    });

}

function getPop() {
  fetch(dancePopUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (dancePop) {
      fetch(psychedelicPopUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (psychedelicPop) {
          fetch(indiePopUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (indiePop) {
              fetch(powerPopUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (powerPop) {
                  fetch(popPunkUrl)
                    .then(function (response) {
                      if (response.status == 200) {
                        return response.json();
                      }
                    })
                    .then(function (popPunk) {

                      let popPiece1 = dancePop.parse.links;
                      let popPiece2 = psychedelicPop.parse.links;
                      let popPiece3 = indiePop.parse.links;
                      let popPiece4 = powerPop.parse.links;
                      let popPiece5 = popPunk.parse.links;
                      popArray = popPiece1.concat(popPiece2, popPiece3, popPiece4, popPiece5);
                    });
                });
            });
        });
    });

}

function getPunk() {
  fetch(punkUrl1)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (punk1) {
      fetch(punkUrl2)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (punk2) {
          fetch(punkBluesUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (punkBlues) {
              fetch(psychobillyUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (psychobilly) {
                  fetch(hardcoreUrl)
                    .then(function (response) {
                      if (response.status == 200) {
                        return response.json();
                      }
                    })
                    .then(function (hardcore) {
                      fetch(popPunkUrl)
                        .then(function (response) {
                          if (response.status == 200) {
                            return response.json();
                          }
                        })
                        .then(function (popPunk) {
                          let punkPiece1 = punk1.parse.links;
                          let punkPiece2 = punk2.parse.links;
                          let punkPiece3 = punkBlues.parse.links;
                          let punkPiece4 = psychobilly.parse.links;
                          let punkPiece5 = hardcore.parse.links;
                          let punkPiece6 = popPunk.parse.links;
                          punkArray = punkPiece1.concat(punkPiece2, punkPiece3, punkPiece4, punkPiece5, punkPiece6);
                        });
                    });
                });
            });
        });
    });

}

function getPsychedelic() {
  fetch(psychedelicRockUrl)
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (psychedelicRock) {
      fetch(acidRockUrl)
        .then(function (response) {
          if (response.status == 200) {
            return response.json();
          }
        })
        .then(function (acidRock) {
          fetch(psychedelicFolkUrl)
            .then(function (response) {
              if (response.status == 200) {
                return response.json();
              }
            })
            .then(function (psychedelicFolk) {
              fetch(psychedelicPopUrl)
                .then(function (response) {
                  if (response.status == 200) {
                    return response.json();
                  }
                })
                .then(function (psychedelicPop) {
                  let psychedelicPiece1 = psychedelicRock.parse.links;
                  let psychedelicPiece2 = acidRock.parse.links;
                  let psychedelicPiece3 = psychedelicFolk.parse.links;
                  let psychedelicPiece4 = psychedelicPop.parse.links;
                  psychedelicArray = psychedelicPiece1.concat(psychedelicPiece2, psychedelicPiece3, psychedelicPiece4);
                });
            });
        });
    });

}

// function to print the outputArray from Shuffle fetch
function printShuffle() {
  for (var i = 0; i < outputArray.length; i++) {
    var suggestion = document.createElement("li");
    suggestion.innerHTML = outputArray[i];
    // console.log(suggestion);
    // suggestion.classList.add(); /* if we need to add classes for styling */
    resultsListing.appendChild(suggestion);
  }
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