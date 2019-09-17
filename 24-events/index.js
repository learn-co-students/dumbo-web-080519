let tacoButton = document.getElementById('taco')
let ul = document.querySelector("#blobs")

// element.addEventListener("event_type", function(){} )

// let funcName = function(){}
// let funcName = () => {}
// function funcName(){}

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





// THIS WILL NOT WORK
// tacoButton.addEventListener("click", tacoButtonEventHandler())


















//
