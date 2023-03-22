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
    let metalUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_heavy_metal_bands&prop=links&origin=*&format=json";
    let metalObject;
    let punkObject;
    let punk1;
    let punk2;
    let punkUrl1 = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_punk_rock_bands,_0–K&prop=links&origin=*&format=json";
    let punkUrl2 = "https://en.wikipedia.org/w/api.php?action=parse&page=List_of_punk_rock_bands,_L–Z&prop=links&origin=*&format=json";
    let countryUrl = "https://en.wikipedia.org/w/api.php?action=parse&page=list_of_country_music_performers&prop=links&origin=*&format=json";

// functions area
// determines which fetch functions to run based on array

function log() {
  let punkArray1 = punk1.parse.links;
  let punkArray2 = punk2.parse.links;
  let punkArrayFull = punkArray1.concat(punkArray2);
  console.log(punkArrayFull)
}

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
        return response.json();
      }
    })
    .then(function(data) {
      metalObject = data;
    })
    // .then(console.log(metalObject))
  }
  
  function getPunk() {
    fetch(punkUrl1)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
    })
    .then(function(data1) {
      punk1 = data1
      });
    fetch(punkUrl2)
    .then(function (response) {
      if (response.status == 200) {
        // console.log(response);
        return response.json();
      }
    })
    .then(function(data2) {
      punk2 = data2
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



// event listener to run getGenres function
searchBtn.addEventListener('click', runGenres);
logBtn.addEventListener('click', log);
// export variables 
    // export default results;