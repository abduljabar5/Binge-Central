var container = document.getElementById("container")
const elements = [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21]

var popularApi = "https://imdb-api.com/en/API/MostPopularMovies/k_ulmw7xr8"

fetch(popularApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    
function cards (){
    

         var box = document.createElement("div")
         var card = document.createElement("div")
         var img = document.createElement("img")
         var cardBody = document.createElement("div")
         var showName = document.createElement("h5")
         var showText = document.createElement("p")
         var showRating =document.createElement("p")
         var showRating2 = document.createElement("small")
         var iframe = document.createElement("iframe");
         var videolink = document.getElementById("videolink")
         var title = document.getElementById("title")
         var vidName = document.createElement("h2")
                 //creating popup
         var div1 = document.createElement("div")
         var div2 = document.createElement("div")
         var div3 = document.createElement("div")
         var div4 = document.createElement("div")
         var div5 = document.createElement("div")
            div1.setAttribute("class","modal fade ")
            div1.setAttribute("id","exampleModalToggle" + i)
            div1.setAttribute("aria-hidden","true")
            div2.setAttribute("class","modal-dialog modal-dialog-centered modal-xl text-bg-dark mb-3")
            div2.style.backgroundColor= blur
            console.log(elements[i]);
            div3.setAttribute("class","modal-content mx-auto text-bg-dark mb-3")
            div4.setAttribute("class","modal-header d-flex flex-column text-bg-dark mb-3")
            div5.setAttribute("class","modal-body mx-auto")
         iframe.width = 850;
         iframe.height = 560;
         iframe.setAttribute("allowfullscreen" ,"true")
         iframe.mozallowfullscreen = true;
         iframe.webkitallowfullscreen = true;
         iframe.frameborder = "no";
         iframe.setAttribute ("scrolling" , "no")
         // Creating a new button element for popup
var button = document.createElement("a");
button.setAttribute("class", "btn btn-primary");
var button1 = document.createElement("a");
button1.setAttribute("class", "btn btn-primary");
button.setAttribute("data-bs-toggle", "modal");
button.setAttribute("href", "#exampleModalToggle" + i);
button1.setAttribute("href", "https://www.movieboxpro.app/index/search?word=" + data.items[i].title);
button.innerText = "Watch Trailer";
button1.textContent ="watch now"
        box.classList = "col w-50"
        box.style.display = "flex"
        box.style.flexDirection = "wrap"
        card.classList = "card text-bg-dark mb-3"

        img.src = "https://imdb-api.com/API/ResizeImage?apiKey=k_ulmw7xr8&size=1300x1760&url=" + data.items[i].image
        img.classList = "card-img-top"
        img.style.objectFit = "cover"
       
        cardBody.classList = "card-body data-bs-spy=scroll"
        showName.classList = "card-title"
        showText.classList = "card-text"
        showText.setAttribute("data-bs-spy","scroll")
        showText.style.maxHeight = "200px"
        showText.style.overflowY = "auto"
        showRating.classList = "card-text text-light"
        showRating2.classList = "text-muted"
    
        showName.innerHTML = data.items[i].fullTitle
        showRating2.innerHTML = "imDbRating: " + data.items[i].imDbRating
        var api2 = "https://imdb-api.com/en/API/Trailer/k_ulmw7xr8/" + data.items[i].id
        var api3 = "https://imdb-api.com/en/API/Wikipedia/k_ulmw7xr8/" + data.items[i].id
       
        fetch(api2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
        
        iframe.src = data.linkEmbed + "?format=1080p&token=T3N3Vnd1blExSzoxNjcxNzczOTgwMjUw&ref_=vi_res_1080p"
        vidName.textContent = data.fullTitle

  })
  fetch(api3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    showText.innerHTML = data.plotShort.plainText
  })


       
        
 
    div1.appendChild(div2)
        div2.appendChild(div3)
        div3.appendChild(div4)
        div4.appendChild(vidName)
        div4.appendChild(div5)
        div5.appendChild(iframe)

//   videolink.appendChild(iframe)
//   title.appendChild(vidName)
        container.appendChild(box)
        box.appendChild(card)
        card.appendChild(img)
        card.appendChild(cardBody)
        cardBody.appendChild(showName)
        cardBody.appendChild(showText)
        cardBody.appendChild(button)
        cardBody.appendChild(button1)
        cardBody.appendChild(showRating)
        showRating.appendChild(showRating2)
        document.body.append(div1)
      
    }
for (var i = 0; i < 4; i++){
   elements[i]
   cards();
    }
  })


 
       