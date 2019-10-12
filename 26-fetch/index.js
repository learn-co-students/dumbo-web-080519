document.addEventListener("DOMContentLoaded", function(){

  // fetch(url, {})
  // .then(res => res.json())
  // .then(obj => {
  //  do thingy with obj
  // })

  let dogButton = document.getElementById('hello-button')
  dogButton.addEventListener("click", function(){

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json()) // I get a promise, which I can .then
      .then(resObj => {

        let dogLi = document.createElement("li")
        let dogImage = document.createElement("img")

        dogImage.src = resObj.message
        dogImage.alt = "cute dog"

        let dogUL = document.querySelector("#dogs")
        dogLi.append(dogImage)
        dogUL.append(dogLi)
      })


  })




















})
