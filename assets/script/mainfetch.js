// import variables 
    import activeGMods from "./script.js";
// global variables
    let fetchURL = 1;
    let results = "a";
    let resultsArea = document.querySelector('#resultsArea');
    let resultsList = document.querySelector('ul');
    let searchBtn = document.getElementById('search');
    let genreArray = activeGMods;
    let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_heavy_metal_bands&prop=links&origin=*&format=json";
    let metalArray
    let punkUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";
    let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

// functions area
// determines which fetch functions to run based on array
function runGenres() {
    if (genreArray.includes("Metal")) {
      getMetal();
    }
    if (genreArray.includes("Punk")) {
      getPunk();
    };
    if (genreArray.includes("Country")) {
      getCountry();
    };
  }
  // functions that fetch various genres
  function getMetal() {
    fetch(metalUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
        // MAYBE USEFUL INSTEAD OF PREVIOUS LINE
        // var metalObject = response.json();
        // return metalObject;
      }
    })
    .then(function(data){
        console.log(data)
      });
  }
  
  function getPunk() {
    fetch(punkUrl)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
      
    }).then(function(data){
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
      
    }).then(function(data){
      console.log(data)
      });
  }

  // function to compare fetch result arrays

  function compareArrays() {

  } 

// event listener to run getGenres function
searchBtn.addEventListener('click', runGenres);
// export variables 
    // export default results;