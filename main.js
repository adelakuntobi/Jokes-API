  
function dispJoke(){
  fetch(' https://sv443.net/jokeapi/v2/joke/Any?type=single')
  .then(res => res.json())
  .then(data =>{
      var joke = data.joke;
        console.log(joke)

       display = `<p>${joke}</p>`;
      document.getElementById('dispContent').innerHTML = display;
  })
  .catch(err => console.log(err))
};

dispJoke();

setInterval(dispJoke, 15000)

