// import ToyCard from './ToyCard'

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!

// const ericToyCard = new ToyCard("Eric", "https://media.licdn.com/dms/image/C4E03AQE_xHTl1agOQw/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=7_S4eY_A0qY5TIDbAKpHHa0LsrJ3mmfZSTt0S5n2NGM", 100)
// const grahamToyCard = new ToyCard("Graham", "https://media.licdn.com/dms/image/C4E03AQFwn48ojzWjcA/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=kNsbFMegKIusL13bZF9DEI-YPD3e8xr4jHalFcyunU0", 70)
// toyContainer.innerHTML += ericToyCard.render()
// toyContainer.innerHTML += grahamToyCard.render()

// a world where getAllToys returns a promise
// ToyAdapter.getAllToys().then(data => {
// })


const toyBox = new ToyBox()
new ToyForm(toyBox.addToy)


