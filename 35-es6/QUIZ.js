// Word Bank
// 1. Shorthand properties
// 2. Computed properties
// 3. Destructuring
// 4. Spread operator
// 5. Default arguments

//A. 
const foo = {
  bar: "6",
  baz: "$$$$$",
  bleegh: []
}

const { bar, baz, bleegh } = foo;

//B.
const bar =  "6",
const baz =  "$$$$$",
const bleegh =  []

const foo = { bar, baz, bleegh };

//C. 
const bar = {
  banana: "🍌",
  baz: potato
  quux: {}
}

const foo = {
  ...bar
}

//D. 
function foo({ bar }, baz="bleegh") {

}

foo({ bar: "📊", potato: true })

//E. 
const bar = "banana"

const foo = {
  [bar]: "🍌"
}

//F.
var a = 1
var b = 2

var [a, b] = [b, a];




// Word Bank
// 1. Shorthand properties
// 2. Computed properties
// 3. Destructuring
// 4. Spread operator
// 5. Default arguments







