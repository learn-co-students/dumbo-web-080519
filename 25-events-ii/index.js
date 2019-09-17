let tacoButton = document.getElementById('taco')
let ul = document.querySelector("#blobs")

function tacoButtonEventHandler(evt){
  // console.log(evt.target, "from line 9");
  let tacoLi = document.createElement("li")
  tacoLi.innerText = "🌮"
  ul.append(tacoLi)
}


// THIS WILL WORK
tacoButton.addEventListener("click", tacoButtonEventHandler)

tacoButton.addEventListener("click", function(evt){
  console.log(evt.target);
})


//
