
// function potato(){
//   console.log("blat")
//   return onMouseMove
// }

// console.log(potato)
// console.log(potato())

const blobsList = document.getElementById("blobs")

function onMouseMove(){
  const li = document.createElement("li")
  li.innerText = "🌶"
  blobsList.prepend(li)
  // console.log("Hello from Chili's")
}


// console.log(blobsList)

blobsList.addEventListener("mousemove", onMouseMove)

// const what = [onMouseMove(), potato(), {}, 1, 2, [], "crap"]

// console.log(what)
// console.log(what[1]())




// console.log(potato())

