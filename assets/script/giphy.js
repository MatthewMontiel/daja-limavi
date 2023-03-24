// giphy.com/jWQAGEXCWHKht1K5SNpr8G7WuBeASCoH
//my api key
let MYURL = "https:api.giphy.com/v1/gifs/random?api_key=jWQAGEXCWHKht1K5SNpr8G7WuBeASCoH&tag=dancing&rating=g";
let ltDance = document.querySelector("#ltDance");
let rtDance = document.querySelector("#rtDance");
let searchBtn = document.querySelector("#search");
//let gogo; 

function partyTime() {
fetch(MYURL) 
.then(function (response) {
    if (response.status == 200) {
        console.log(response);
    return response.json();
    }
})
.then(function (data) {
    console.log(data);

let gogo = data.data.embed_url;
    console.log(gogo);

  let imageMaker = document.createElement("iframe");
  imageMaker.setAttribute("src", gogo);
    console.log(imageMaker);
    ltDance.appendChild(imageMaker);
    console.log(ltDance);

    let imageMaker1 = document.createElement("iframe");
    imageMaker1.setAttribute("src", gogo);
    rtDance.appendChild(imageMaker1);
    console.log(rtDance);
}) 
}

//todo: display random giphys on page
searchBtn.addEventListener('click', partyTime);