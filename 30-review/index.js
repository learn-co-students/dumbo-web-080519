let foxesUL = document.getElementById('fox-list')
let foxImage = document.getElementById('main-image')
let foxForm = document.querySelector("#fox-form")


// START TO FETCH FOX NAMES (CRUD: Read, RESTful: INDEX)

fetch("http://localhost:3000/foxes")
  .then(res => res.json())
  .then((foxesArray) => {
    // BEGIN THEN (index)
    foxesArray.forEach((foxObject) => {
      foxesUL.innerHTML += `
        <li data-id=${foxObject.id} >${foxObject.name}</li>
      `
    })
    // END THEN (index)
  })

// END TO FETCH FOX NAMES




// START CLICKING AN LI TO CHANGE PICTURE (CRUD: Read, RESTful: SHOW)

foxesUL.addEventListener("click", (event) => {

  if (event.target.tagName === "LI") {
    // START of IF
    let foxId = event.target.dataset.id

    // foxImage.src = event.target.dataset.url

    // OR

    fetch(`http://localhost:3000/foxes/${foxId}`)
      .then(res => res.json())
      .then(oneFox => {
        // start of then
        foxImage.src = oneFox.img_url
        foxImage.alt = oneFox.name
        // end of then
      })
    // END OF IF
  }

})

// END CLICKING AN LI TO CHANGE PICTURE


// START FORM SUBMSSION (CRUD:Create, RESTful: CREATE)

foxForm.addEventListener("submit", (event) => {
  event.preventDefault()
  let form = event.target

  let nameOfTheFox = form.foxName.value
  let imageOfTheFox = form.foxImage.value

    // DOM MANIPULATION HERE FOR OPTIMISTIC

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {name: nameOfTheFox, img_url: imageOfTheFox} )
  })
    .then(res => res.json())
    .then((foxObject) => {
      // DOM MANIPULATION HERE FOR PESSIMISTIC
      foxesUL.innerHTML += `
        <li data-id=${foxObject.id} >${foxObject.name}</li>
      `
    })

})

// END FORM SUBMISSION

















//
