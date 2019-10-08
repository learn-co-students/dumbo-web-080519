
// When do I need { } curly braces with an arrow function? 
// When can I skip them?

function addTwoNumbers(number, otherNumber) { return number + otherNumber }


// Under what circumstances will an arrow function implicitly return?

/*
  const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty"]

  // const callback = function(adjective){ adjective + " SPICE" }
  // const callback = function(){ }

  const callback = function(adjective) { adjective.toUpperCase() + " SPICE" }
  const callback = adjective => { adjective.toUpperCase() + " SPICE" }
  const callback = (adjective) => { adjective.toUpperCase() + " SPICE" }
  const callback = (adjective) => adjective.toUpperCase() + " SPICE";
  const callback = adjective => adjective.toUpperCase() + " SPICE";
  
  const bigNastyString = spiceGirls
    .map(callback)
    .join(" and ")

  console.log(bigNastyString);
*/


// can I define a default parameter for a JS function? When will it be used?


function greet(name = "Ginger Spice") {
  console.log(name)
  return `Hello, ${ name }`
}

// const greet = (name = "Ginger Spice") => `Hello, ${ name }`
// const greet = name = "Ginger Spice" => `Hello, ${ name }`

// console.log(greet("Sylwia"))
// console.log(greet())
// console.log(greet(null))
// console.log(greet(false))
// console.log(greet(0))
// console.log(greet(NaN))
// console.log(greet(""))
// console.log(greet(undefined))





