// document.addEventListener("DOMContentLoaded", function(){
//
// })
let jsonifyTheResponse = (res) => { return res.json()}
// res => res.json()
let listOL = document.querySelector("#to-do-items")
let newForm = document.querySelector("#new-to-do")

fetch("http://localhost:3000/to_do_items")
  .then(jsonifyTheResponse)
  // .then(res => res.json())
  // .then(function(res){return res.json()})
  .then(arrOfItems => {
    arrOfItems.forEach((item) => { makeJSONIntoLI(item) })
  })

newForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  let form = evt.target
  let input = form.title
  let whatUserTyped = input.value

  let dataToSendBack = {
    title: whatUserTyped,
    done: false
  }

  fetch("http://localhost:3000/to_do_items", {
    method: 'POST',
    body: JSON.stringify(dataToSendBack),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(jsonifyTheResponse)
  .then((item) => {
    makeJSONIntoLI(item)
  })

  // .then(function(res){
  //   if (res.ok) {
  //     return jsonifyTheResponse(res)
  //   } else {
  //     console.error("This broke");
  //   }
  // })

})

function makeJSONIntoLI(item){

  listOL.innerHTML += `<li class="item">
    <input id="to-do-item-${item.id}" type="checkbox" ${ item.done ? "checked" : "" } />
    <label for="to-do-item-${item.id}" class="js-title middle aligned content">${item.title}</label>
    <button>×</button>
  </li>`

}












//
