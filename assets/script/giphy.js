// giphy.com/jWQAGEXCWHKht1K5SNpr8G7WuBeASCoH
//zilhn80nBYP7y4EiyPaZdNrLQJxL5bOd
//my api key

// global variables
let MYURL = "https:api.giphy.com/v1/gifs/random?api_key=jWQAGEXCWHKht1K5SNpr8G7WuBeASCoH&tag=dancing&rating=g";
let ltDance = document.querySelector("#ltDance");
let ltdpole = document.querySelector("#ltdpole")
let ltd1 = document.querySelector("#ltd1");
let ltd2 = document.querySelector("#ltd2");
let ltd3 = document.querySelector("#ltd3");
let ltd4 = document.querySelector("#ltd4");
let ltd5 = document.querySelector("#ltd5");
let rtDance = document.querySelector("#rtDance");
let rtdpole = document.querySelector("#rtdpole")
let rtd1 = document.querySelector("#rtd1");
let rtd2 = document.querySelector("#rtd2");
let rtd3 = document.querySelector("#rtd3");
let rtd4 = document.querySelector("#rtd4");
let rtd5 = document.querySelector("#rtd5");
let shuffleBtn = document.querySelector("#log")
let LoadDeckBtn = document.querySelector("#search");

// functions
// function to get the dancers to the party
function partyTime() {
    fetch(MYURL)
        .then(function (response) {
            if (response.status == 200) {
                // console.log(response);
                return response.json();
            }
        })
        .then(function (data) {
            // console.log(data);
            // variable to store giphy image to be written to page in dancers spots
            let gogo = data.data.embed_url;
            // console.log(gogo);
            // left dancer side spots 1-5
            ltd1.setAttribute("src", gogo);
            // console.log(ltd1);
            ltd2.setAttribute("src", gogo);
            // console.log(ltd2);
            ltd3.setAttribute("src", gogo);
            // console.log(ltd3);
            ltd4.setAttribute("src", gogo);
            // console.log(ltd4);
            ltd5.setAttribute("src", gogo);
            // console.log(ltd5);
            // right dancer side spots 1-5
            rtd1.setAttribute("src", gogo);
            // console.log(rtd1);
            rtd2.setAttribute("src", gogo);
            // console.log(rtd2);
            rtd3.setAttribute("src", gogo);
            // console.log(rtd3);
            rtd4.setAttribute("src", gogo);
            // console.log(rtd4);
            rtd5.setAttribute("src", gogo);
            // console.log(rtd5);
        })
}
// function to reset dancers
function partysOver() {
    let gogo = " ";
    // console.log(gogo);
    // left dancer side spots 1-5
    ltd1.setAttribute("src", gogo);
    // console.log(ltd1);
    ltd2.setAttribute("src", gogo);
    // console.log(ltd2);
    ltd3.setAttribute("src", gogo);
    // console.log(ltd3);
    ltd4.setAttribute("src", gogo);
    // console.log(ltd4);
    ltd5.setAttribute("src", gogo);
    // console.log(ltd5);
    // right dancer side spots 1-5
    rtd1.setAttribute("src", gogo);
    // console.log(rtd1);
    rtd2.setAttribute("src", gogo);
    // console.log(rtd2);
    rtd3.setAttribute("src", gogo);
    // console.log(rtd3);
    rtd4.setAttribute("src", gogo);
    // console.log(rtd4);
    rtd5.setAttribute("src", gogo);
    // console.log(rtd5);
}

// eventlistener to call partyTime function
shuffleBtn.addEventListener('click', function () {
    partyTime();
});
// eventlistener to call partysOver function
LoadDeckBtn.addEventListener('click', function () {
    partysOver();
});