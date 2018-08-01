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
  dropdownList(beers);
  const select = document.getElementById('beer-dropdown');
  select.addEventListener('change', function(){
    let drinkInfo = beers[select.value];
    handleSelectChange(drinkInfo)
  })
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

const dropdownList = function(beers){
    const dropdown = document.getElementById('beer-dropdown');
    beers.forEach(function(beer){
      const option = document.createElement('option');
      option.value = beers.indexOf(beer);
      option.innerText = beer.name;
      dropdown.appendChild(option);
      });
}

const handleSelectChange = function(beer){
  const image = document.getElementById('beerPic');
  image.src = beer.image_url;
  image.height = 300;
  const name = document.getElementById('beerName');
  const description = document.getElementById('description');
  name.innerText = beer.name;
  description.innerText = beer.description;

}


window.addEventListener('load', app);
