// CREATE
// 1) Create the element
let pizzaLi = document.createElement("li")

// 2) Razzle dazzle
pizzaLi.innerText = "🍕"
pizzaLi.className = "good"
pizzaLi.id = "pizza"

// 3) Find a place on the DOM to slap the element
let ulOfEmojis = document.querySelector("#blobs")
ulOfEmojis.prepend(pizzaLi)
// ulOfEmojis.innerHTML += "<li class='good' id='pizza'>🍕</li>"

// ---------------------

// READ
let badLis = document.getElementsByClassName("bad")
let queryBadLis = document.querySelectorAll(".bad")

// ulOfEmojis.innerHTML += '<li class="bad">🐔</li>'

// ---------------------

// DELETE

pizzaLi.remove()
queryBadLis.forEach(function(li){ li.remove() })
// queryBadLis.each do |li|
// li.remove()
// end

// ---------------------

// UPDATE

let heading = document.querySelector("h1")

let spanOfWords = heading.querySelector("span")
spanOfWords.remove()
// heading.innerText = "Here is a nice list"











//
