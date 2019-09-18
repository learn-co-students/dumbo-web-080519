

// debugger



// console.log("hello from line 5")


document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#hello-button")
  button.addEventListener("click", dogeButtonClicked)
})

// console.log("hello from line 17")


function dogeButtonClicked(event){
  // console.log("fetch starting")
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(slapDogOnDOM)
  // console.log(data)
  // console.log(promise)
}

function slapDogOnDOM(dog){
  const ul = document.getElementById("dogs")
  const li = document.createElement("li")
  li.innerHTML = `
    <img src="${ dog.message }"/>
  `
  ul.append(li)
}
