var app = function(){
const url = 'https://api.punkapi.com/v2/beers';
makeRequest(url, requestComplete);

}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
}

const populateList = function(beers){
  let ulTag = document.getElementById('DrinkList');
  beers.forEach(function(beer){
    let li = document.createElement('li');
    li.textContent = beer.name;
    let beerImage = document.createElement('img');
    beerImage.src = beer.image_url;
    beerImage.height = 120;
    li.appendChild(beerImage);
    ulTag.appendChild(li);
  })
}


window.addEventListener('load', app);
