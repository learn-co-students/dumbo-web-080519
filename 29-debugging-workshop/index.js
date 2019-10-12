document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')


  let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('name-input').value
    // let username = event.target.username.value
    // let username = event.target["name-input"].value
    if(username === "") return;

    // fetch('https://icanhazdadjoke.com/', {
    //   headers: {
    //     "Accept": "application/json"
    //   }
    // })
    // .then(res => res.json())
    // .then(jokeData => jokeData.joke)


    fetchJoke()
    .then(jokeReturnedValue => {
      console.log(jokeReturnedValue);
      const newJokeLi = document.createElement('li')

      newJokeLi.innerHTML += `
      <span class="username">${username} says:</span> ${jokeReturnedValue}
      `

      jokeList.append(newJokeLi)
    })


  })
})










//
