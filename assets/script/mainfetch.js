// import variables 
import activeGMods from "./script.js";
// global variables
let loadDeckBtn = document.getElementById('search');
let shuffleBtn = document.getElementById('log');
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

// Genre fetch Urls
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

// function to compare genre modifiers
function compare() {
  // ARRAY 1 check cycle for each genre
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
  // ARRAY 2 check cycle for each genre
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
  // ARRAY 3 check cycle for each genre
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
// for loop to combine genre modifiers
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
  // console.log(outputArray);
  // for loop to exclude irrelevant stings
  for (var n = 0; n < outputArray.length; n++) {
    if (outputArray[n].includes("Category")
      || outputArray[n].includes("Help:")
      || outputArray[n].includes("Template")
      || outputArray[n].includes("Wikipedia")
      || outputArray[n].includes("(identifier)")
      || outputArray[n].includes(".com")
      || outputArray[n].includes("Essex")
      || outputArray[n].includes("Psychobilly")
      || outputArray[n].includes("Essex")
      || outputArray[n].includes("Florida")
      || outputArray[n].includes("Tennessee")
      || outputArray[n].includes("AllMusic")
      || outputArray[n].includes("NME")
      || outputArray[n].includes("Colchester")
      || outputArray[n].includes("Folk")
      || outputArray[n].includes("Gothabilly")
      || outputArray[n].includes("Observer")
      || outputArray[n].includes("Times")
      || outputArray[n].includes("Tennessean")
      || outputArray[n].includes("PopMatters")
      || outputArray[n].includes("metal")
      || outputArray[n].includes("Rock music")
      || outputArray[n].includes("Rock and roll")
      || outputArray[n].includes("Punk blues")
      || outputArray[n].includes("Blues")
      || outputArray[n].includes("blues")
      || outputArray[n].includes("agazine")
      || outputArray[n].includes("CBC")
      || outputArray[n].includes("CMJ")
      || outputArray[n].includes("Canongate")
      || outputArray[n].includes("Tribune")
      || outputArray[n].includes("Exclaim")
      || outputArray[n].includes("HarperCollins")
      || outputArray[n].includes("MTV")
      || outputArray[n].includes("(newspaper)")
      || outputArray[n].includes("(website)")
      || outputArray[n].includes("Gazette")
      || outputArray[n].includes("Chronicle")
      || outputArray[n].includes("Telegraph")
      || outputArray[n].includes("The Guardian")
      || outputArray[n].includes("Toronto")
      || outputArray[n].includes("Sputnik")
      || outputArray[n].includes("Rolling Stone")
      || outputArray[n].includes("rock")
      || outputArray[n].includes("punk")
      || outputArray[n].includes("sychedelia")
      || outputArray[n].includes("Grebo")
      || outputArray[n].includes("Press")
      || outputArray[n].includes("Weekly")
      || outputArray[n].includes("Routledge")
      || outputArray[n].includes("Emo")
      || outputArray[n].includes("Grunge")
      || outputArray[n].includes("Independent")
      || outputArray[n].includes("London")
      || outputArray[n].includes("New wave")
      || outputArray[n].includes("Pop music")
      || outputArray[n].includes("hardcore")
      || outputArray[n].includes("Noise")
      || outputArray[n].includes("grrrl")
      || outputArray[n].includes("Power pop")
      || outputArray[n].includes("Indie pop")
      || outputArray[n].includes("Kerrang")
      || outputArray[n].includes("Punk")
      || outputArray[n].includes("AOL")
      || outputArray[n].includes("Allmusic")
      || outputArray[n].includes("Artistdirect")
      || outputArray[n].includes("Broadcasting")
      || outputArray[n].includes("BBC")
      || outputArray[n].includes("Media")
      || outputArray[n].includes("Blogcritics")
      || outputArray[n].includes("Network")
      || outputArray[n].includes("Canadian")
      || outputArray[n].includes(".ca")
      || outputArray[n].includes("Chart")
      || outputArray[n].includes("City Pages")
      || outputArray[n].includes("Scene")
      || outputArray[n].includes("College")
      || outputArray[n].includes("Cross Rhythms")
      || outputArray[n].includes("Daily")
      || outputArray[n].includes("News")
      || outputArray[n].includes(".fm")
      || outputArray[n].includes("Drowned in Sound")
      || outputArray[n].includes("Evening Standard")
      || outputArray[n].includes("Courant")
      || outputArray[n].includes("Herald")
      || outputArray[n].includes("IGN")
      || outputArray[n].includes("Globe")
      || outputArray[n].includes("Jam")
      || outputArray[n].includes("Review")
      || outputArray[n].includes("MIT")
      || outputArray[n].includes(".net")
      || outputArray[n].includes("genre")
      || outputArray[n].includes("Mtv")
      || outputArray[n].includes("Metro Silicon Valley")
      || outputArray[n].includes("NBC")
      || outputArray[n].includes("Nextmedia")
      || outputArray[n].includes("Nielsen")
      || outputArray[n].includes("City Paper")
      || outputArray[n].includes("Pop Candy")
      || outputArray[n].includes("Radio 1")
      || outputArray[n].includes("Power chord")
      || outputArray[n].includes("online")
      || outputArray[n].includes("Corporation")
      || outputArray[n].includes("Publishing")
      || outputArray[n].includes("Sony")
      || outputArray[n].includes("Technorati")
      || outputArray[n].includes("Tempo")
      || outputArray[n].includes("A.V. Club")
      || outputArray[n].includes("Chicago")
      || outputArray[n].includes("Kansas City Star")
      || outputArray[n].includes("The Onion")
      || outputArray[n].includes("Morning Call")
      || outputArray[n].includes("Inquirer")
      || outputArray[n].includes("Time Inc.")
      || outputArray[n].includes("USA Today")
      || outputArray[n].includes("University")
      || outputArray[n].includes("Viacom")
      || outputArray[n].includes("Vox")
      || outputArray[n].includes("Wall Of Sound")
      || outputArray[n].includes("Matheson")
      || outputArray[n].includes("Western Mail")
      || outputArray[n].includes("Alberta")
      || outputArray[n].includes("Buenos Aires")
      || outputArray[n].includes("Crossover")
      || outputArray[n].includes("England")
      || outputArray[n].includes("Funk")
      || outputArray[n].includes("Ontario")
      || outputArray[n].includes("Metalcore")
      || outputArray[n].includes("Hip hop")
      || outputArray[n].includes("Netherlands")
      || outputArray[n].includes("Stoke-on-Trent")
      || outputArray[n].includes("Countrycore")
      || outputArray[n].includes("Deathcore")
      || outputArray[n].includes("Electronicore")
      || outputArray[n].includes("Industrial")
      || outputArray[n].includes("Nintendocore")
      || outputArray[n].includes("Mathcore")
      || outputArray[n].includes("Milan")
      || outputArray[n].includes("Moshing")
      || outputArray[n].includes("Poseur")
      || outputArray[n].includes("Russia")
      || outputArray[n].includes("Argentina")
      || outputArray[n].includes("Poland")
      || outputArray[n].includes("Italy")
      || outputArray[n].includes("Grindcore")
      || outputArray[n].includes("Madrid")
      || outputArray[n].includes("Oslo")
      || outputArray[n].includes("Paris")
      || outputArray[n].includes("Screamo")
      || outputArray[n].includes("Rapcore")
      || outputArray[n].includes("Edmonton")
      || outputArray[n].includes("Popular")
      || outputArray[n].includes("Record")
      || outputArray[n].includes("Identification")
      || outputArray[n].includes("Mississippi")
      || outputArray[n].includes("Appalachian")
      || outputArray[n].includes("Banjo guitar")
      || outputArray[n].includes("Bentonia")
      || outputArray[n].includes("Boogie-woogie")
      || outputArray[n].includes("Virginia")
      || outputArray[n].includes("Brenham")
      || outputArray[n].includes("Carolina")
      || outputArray[n].includes("Texas")
      || outputArray[n].includes("Dallas")
      || outputArray[n].includes("Georgia")
      || outputArray[n].includes("Falsetto")
      || outputArray[n].includes("School Girl")
      || outputArray[n].includes("French horn")
      || outputArray[n].includes("Opry")
      || outputArray[n].includes("Fingerstyle")
      || outputArray[n].includes("Alabama")
      || outputArray[n].includes("Jazz")
      || outputArray[n].includes("Jug band")
      || outputArray[n].includes("Mandolinist")
      || outputArray[n].includes("label")
      || outputArray[n].includes("festival")
      || outputArray[n].includes("industry")
      || outputArray[n].includes("Books")
      || outputArray[n].includes("Pocketknife")
      || outputArray[n].includes("Ragtime")
      || outputArray[n].includes("historian")
      || outputArray[n].includes("Slide guitar")
      || outputArray[n].includes("String band")
      || outputArray[n].includes("Washington")
      || outputArray[n].includes("Tin Pan Alley")
      || outputArray[n].includes("Association")
      || outputArray[n].includes("Twelve-string")
      || outputArray[n].includes("Ukelele")
      || outputArray[n].includes("Vaudeville")
      || outputArray[n].includes("Company")
      || outputArray[n].includes("World War")
      || outputArray[n].includes("writer")
      || outputArray[n].includes("Alternative")
      || outputArray[n].includes("Schuster")
      || outputArray[n].includes("Indy Week")
      || outputArray[n].includes("ABC")
      || outputArray[n].includes("NPR")
      || outputArray[n].includes("HP Newquist")
      || outputArray[n].includes("Rough Guides")
      || outputArray[n].includes("Consequence of Sound")
      || outputArray[n].includes("publisher")
      || outputArray[n].includes("Sentinel")
      || outputArray[n].includes("Music Sales Group")
      || outputArray[n].includes("Seattle")
      || outputArray[n].includes("Guitar World")
      || outputArray[n].includes("Loudwire")
      || outputArray[n].includes("Metal Forces")
      || outputArray[n].includes("Riff")
      || outputArray[n].includes("Portal:")
      || outputArray[n].includes("Acid")
      || outputArray[n].includes("Beat Generation")
      || outputArray[n].includes("culture")
      || outputArray[n].includes("Chillwave")
      || outputArray[n].includes("Deadhead")
      || outputArray[n].includes("Dream-beat")
      || outputArray[n].includes("Dream pop")
      || outputArray[n].includes("Freak scene")
      || outputArray[n].includes("Freakbeat")
      || outputArray[n].includes("Hypnagogic")
      || outputArray[n].includes("List")
      || outputArray[n].includes("Madchester")
      || outputArray[n].includes("Psychedelic")
      || outputArray[n].includes("New Age")
      || outputArray[n].includes("New Weird")
      || outputArray[n].includes("Paisley Underground")
      || outputArray[n].includes("Summer of Love")
      || outputArray[n].includes("San Francisco")
      || outputArray[n].includes("Shoegaze")
      || outputArray[n].includes("Sampledelia")
      || outputArray[n].includes("Tropicália")
      || outputArray[n].includes("UK underground")
      || outputArray[n].includes("Hippie")
      || outputArray[n].includes("Accordion")
      || outputArray[n].includes("Hurdy")
      || outputArray[n].includes("MusicMight")
      || outputArray[n].includes("author")
      || outputArray[n].includes("Loud and Quiet")
      || outputArray[n].includes("Martin C. Strong")
      || outputArray[n].includes("Christgau")
      || outputArray[n].includes("Prown")
      || outputArray[n].includes("Unterberger")
      || outputArray[n].includes("on Sound")
      || outputArray[n].includes("The Fader")
      || outputArray[n].includes("XLR8R")
      || outputArray[n].includes("Avant")
      || outputArray[n].includes("Guitar Player")
      || outputArray[n].includes("OMH")
      || outputArray[n].includes("Erlewine")
      || outputArray[n].includes("Baltimore")
      || outputArray[n].includes("Blackgaze")
      || outputArray[n].includes("grunge")
      || outputArray[n].includes("Neue")
      || outputArray[n].includes(".today")
      || outputArray[n].includes("Arizona")
      || outputArray[n].includes("Wayback")
    ) {
      outputArray.splice(n, 1, "");
    };
  };

  let uniq = [...new Set(outputArray)];
  outputArray = uniq;

  for (var o = 0; o < outputArray.length; o++) {
    if (outputArray[o] == [""]) {
      outputArray.splice(o, 1)
    }
  }

  console.log(outputArray);
// call to print the results to the screen
  printShuffle();
}

// function to run fetch on genre modifiers selected by user
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

// function to get country fetch from wikimedia and store data to JSON
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

// function to get folk fetch from wikimedia and store data to JSON
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

// function to get metal fetch from wikimedia and store data to JSON
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

// function to get pop fetch from wikimedia and store data to JSON
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

// function to get punk fetch from wikimedia and store data to JSON
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

// function to get psychedelic fetch from wikimedia and store data to JSON
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
loadDeckBtn.addEventListener('click', runGenres);
shuffleBtn.addEventListener('click', compare);
