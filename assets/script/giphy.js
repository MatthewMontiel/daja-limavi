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
//    let gogo = data.data.bitly_gif_url;
let gogo = data.data.preview.mp4;
    console.log(gogo);

  let imageMaker = document.createElement("iframe");
  imageMaker.setAttribute("src", gogo);
//   imageMaker.setAttribute("width","200");
//   imageMaker.setAttribute("height","200");
//   imageMaker.setAttribute("frameBorder","0");
//   imageMaker.setAttribute("class","giphy-embed");

  console.log(imageMaker);
    ltDance.appendChild(imageMaker);
    console.log(ltDance);
    rtDance.appendChild(imageMaker);
        console.log(rtDance);
}) 
}

//todo: display random giphys on page
searchBtn.addEventListener('click', partyTime);