var searchBtn = document.getElementById("searchbtn")
var searchArea = document.getElementById("input")
var picture = document.getElementById("picture")
var contentname = document.getElementById("contentname")
var discription = document.getElementById("discription")
var rate = document.getElementById("rating")
var imagesrc = document.getElementById("imagesrc")
console.log("hi");
const nsfw = ['Altered Carbon ','American Gods ','Animal Kingdom ',
'Bad Banks',
'Ballers ',
'Big Little Lies ',
'Big Love ',
'Black Sails ',
'Boss', 
'Buying Naked ',
'Californication', 
'Cannabis', 
'Carnival Row ',
'Dating Naked']



function search(){
const results = document.getElementById('results')

   var userSearch = searchArea.value

for (let v = 0; v < nsfw.length; v++){
 if(nsfw[v] === userSearch) {
console.log('yay');
window.alert("nudity in show")
 }
}

var apiUrl = "https://imdb-api.com/en/API/SearchTitle/k_ulmw7xr8/" + userSearch

fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var idedntity = data.results[0].id
    console.log(idedntity);

   // new apicall
var apiTrailer = "https://imdb-api.com/en/API/Trailer/k_ulmw7xr8/" + idedntity
fetch(apiTrailer)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  results.style.display = "block"
  console.log(data);
  console.log("data.link");
  contentname.textContent = data.title
  discription.textContent = data.videoDescription
  imagesrc.href = data.link
  picture.src = data.thumbnailUrl
  picture.classList = "card-img-top blur-md blur-none"
  searchBtn.classList = "btn btn-outline-dark"
  searchBtn.textContent = "Search"

});

// new api call

var apiRatting = "https://imdb-api.com/en/API/Ratings/k_ulmw7xr8/"+idedntity
fetch(apiRatting)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  
  var rating = document.getElementById("rating")
  var imdbRating2 = document.getElementById("imbdratting")
  var rotten = document.getElementById("rotten")
  

  rating.textContent = "Ratings:"
  imdbRating2.textContent = "IMDB: " + data.imDb
  imdbRating2.style.color = "none"
  rotten.textContent = "rottenTomatoes: " + data.rottenTomatoes + "%"
});
 }); 

}

//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e269f80f26mshd1f952fccf0e251p113686jsnd4b2f310b4a3',
// 		'X-RapidAPI-Host': 'frecar-epguides-api-v1.p.rapidapi.com'
// 	}
// };

searchBtn.addEventListener("click",function(event){

    event.preventDefault();
    searchBtn.classList = "spinner-grow spinner-grow-sm"
    searchBtn.textContent = "Loading"
    search();
})