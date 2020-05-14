  
function dispJoke(){
  //Fetching the data from the API
  fetch(' https://sv443.net/jokeapi/v2/joke/Any?type=single')
  .then(res => res.json())
  .then(data =>{
      var joke = data['joke'],
        setup = data['setup'],
        delivery = data['delivery'];

        console.log(joke)
        console.log(setup)
        console.log(delivery)

    //Assigning the line gotten from the API to a P tag 
       display = `<p>${joke}</p>`;
    //Appending the P tap to the div created in the HTML
      document.getElementById('dispContent').innerHTML = display;
  })
};

//Refreshing the Joke every 20 seconds
setInterval(dispJoke, 20000)
