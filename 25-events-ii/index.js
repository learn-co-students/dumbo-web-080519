// Things on the DOM (HTML)
let tacoButton = document.getElementById('taco')
let ul = document.querySelector("#blobs")
let emojiForm = document.querySelector("#new-emoji-form")

// Event Listener to Remove Emojis

// DELEGATION
// 1) Find a lowest level stable parent on the HTML
// 2) Add an Event Listener to the Stable Parent
// 3) Add an if statement so that it fires only when its children trigger the event
// 4) Use evt.target to the best of your ability

ul.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    e.target.remove()
  }
})


// // THIS SUCKS

// // let allEmojis = document.querySelectorAll("li")

// // let removeEmoji = function(evt){
// //  evt.target.remove()
// // }

// // allEmojis.forEach(function(emoji){
// //  emoji.addEventListener("click", removeEmoji)
// // })



// THIS WILL WORK
// Event Listener for Taco Button

tacoButton.addEventListener("click", tacoButtonEventHandler)
tacoButton.addEventListener("click", function(evt){
  console.log(evt.target);
})

function tacoButtonEventHandler(evt){
  // console.log(evt.target, "from line 9");
  let tacoLi = document.createElement("li")
  tacoLi.innerText = "🌮"
  ul.append(tacoLi)

  // // THIS SUCKS
  // // tacoLi.addEventListener("click", removeEmoji)
}

// Event Listener for Form

emojiForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  let newEmojiToAdd = evt.target.emoji.value

  let newEmojiLi = document.createElement("li")
  newEmojiLi.innerText = newEmojiToAdd
  ul.append(newEmojiLi)

  // // THIS SUCKS
  // // newEmojiLi.addEventListener("click", removeEmoji)
})















//
