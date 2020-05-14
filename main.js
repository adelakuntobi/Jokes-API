  
function dispJoke(){
  fetch(' https://sv443.net/jokeapi/v2/joke/Any?type=single')
  .then(res => res.json())
  .then(data =>{
      var joke = data['joke'],
        setup = data['setup'],
        delivery = data['delivery'];

        console.log(joke)
        console.log(setup)
        console.log(delivery)

       display = `<p>${joke}</p>`;
      document.getElementById('dispContent').innerHTML = display;
  })
};


setInterval(dispJoke, 20000)