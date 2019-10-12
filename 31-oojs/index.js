class Person {

  constructor(name, fullName){
    this.name = name
    this.fullName = fullName
  }

  introduce(){
    return `Hey, it's ${ this.name }`
  }

}

class Instructor extends Person {

  teach = () => {
    return "blah blah blah"
  }

  static bananaForNoReason(){
    return "🍌"
  }

}

barb = new Person("Barb", "Barbara bush")
graham = new Instructor("Graham", "Graham Troyer-Joy")

console.log(barb.introduce())
console.log(graham.introduce())
console.log(graham.teach())
// console.log(barb.teach())



// function introduce(){
//   return `Hey, I'm Mazen`
// }

// const mazen = {
//   fullName: "Mazen Al Swar",
//   name: "Mazen",
//   hometown: "Hoora, Bahrain",
//   introduce: introduce()
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   hometown: "Oak Park, IL",
//   introduce: introduce()
// }

// const sylwia = {
//   fullName: "Sylwia Vargas",
//   name: "Sylwia",
//   hometown: "TBD",
//   introduce: introduce()
// }

// console.log(mazen.introduce())
// console.log(graham.introduce())
// console.log(sylwia.introduce())

// console.log(mazen.introduce === graham.introduce)
// console.log(mazen.introduce() === graham.introduce())


