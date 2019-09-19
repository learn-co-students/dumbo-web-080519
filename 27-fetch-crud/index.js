
document.addEventListener("DOMContentLoaded", function(){

  const ol = document.querySelector("#to-do-items")

  ol.addEventListener("click", function(event){ //ol is stable parent
    const isCheckbox = event.target.matches(".js-checkbox");//(event.target.dataset.isCheckbox === "true")
    const isRemoveButton = event.target.classList.contains("js-remove")

    // console.log(event.target)
    if (isCheckbox) {
      updateDoneness(event)
    } else if (isRemoveButton) {
      deleteIt(event)
    }
    // console.log("update")
  })


  fetch("http://localhost:3000/to_do_items")
    .then(response => response.json())
    .then(data => {
      data.forEach(slapOneToDoOnTheDom)
    })

  const form = document.querySelector("#new-to-do")
  form.addEventListener("submit", function(){
    event.preventDefault()

    const form = event.target;
    const input = form.title;
    const title = input.value;

    form.reset()

    fetch("http://localhost:3000/to_do_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // mime type of what we're sending to the server
      },
      body: JSON.stringify({
        title: title,
        done: false
      })
    }).then(res => res.json())
      .then(slapOneToDoOnTheDom)

  })

})

function deleteIt(){
  const button = event.target
  const id = button.dataset.id

  fetch(`http://localhost:3000/to_do_items/${ id }`, {
    method: "DELETE"
  }).then(res => {

    // pessimistic rendering
    const liToDelete = document.querySelector(`#list-item-${ id }`)
    liToDelete.remove()

  })

  // //optimistic rendering
  // const liToDelete = document.querySelector(`#list-item-${ id }`)
  // liToDelete.remove()


}

function updateDoneness(event){
  // console.log(event.target)
  // console.log(event.target.dataset)
  const checkbox = event.target
  const id = checkbox.dataset.id
  const done = checkbox.checked
  // event.target.id[event.target.id.length - 1]
  fetch(`http://localhost:3000/to_do_items/${ id }`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      done
    })
  }).then(res => res.json())
  .then(toDo => {
    const liWeWantToDoneify = document.querySelector(`#list-item-${ toDo.id }`)

    if (toDo.done) 
      liWeWantToDoneify.classList.add("done")
    else 
      liWeWantToDoneify.classList.remove("done")

  })
}



const slapOneToDoOnTheDom = (toDoItem) => { 
  const ol = document.querySelector("#to-do-items")

  // console.log(toDoItem)

  ol.innerHTML += `<li id="list-item-${ toDoItem.id }" class="item ${ toDoItem.done ? "done" : "" }">
    <input data-id="${ toDoItem.id }" class="js-checkbox" id="to-do-item-${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : "" } />
    <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>
    <button data-id="${ toDoItem.id }" class="js-remove">×</button>
  </li>
  ` /// this is dangerous; children are being killed

  // console.log(toDoItem) 
}