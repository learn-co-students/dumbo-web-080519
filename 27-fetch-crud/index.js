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

  listOL.innerHTML += `<li class="item ${ item.done ? "done" : "" }">
    <input data-to-do-id="${ item.id }" id="to-do-item-${item.id}" type="checkbox" ${ item.done ? "checked" : "" } class="js-checkbox this may not seem like a good idea" />
    <label for="to-do-item-${item.id}" class="js-checkbox-label js-title middle aligned content">${item.title}</label>
    <button>×</button>
  </li>`

}





listOL.addEventListener("click", function(event){
   // = ""
  // console.log(event.target)
  // console.log(event.target.classList.contains("js-checkbox"))
  if (event.target.matches(".js-checkbox")) {

    // note to self: put the id on event.target
    // when we get done talking about dataset

    // console.log(event.target)
    const id = event.target.dataset.toDoId
    // console.log(event.target.parentNode.dataset.toDoId)

    fetch(`http://localhost:3000/to_do_items/${ id }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        done: true
      })
    })

  }
})










//
