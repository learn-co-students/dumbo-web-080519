

// const button = document.createElement("button")
// button.innerText = "adsfjkhsdfkhj"

// button.addEventListener("click", function(){
//   this.innerText += 8
// })

// document.body.append(button)

// console.log(this)
/*
function introduce() {
  console.log(this)
  return `Hey, I'm ${ this.fullName }`
}

const mazen = {
  fullName: "Mazen Al Swar",
  name: "Mazen",
  hometown: "Hoora, Bahrain",
  introduce: introduce
}

const graham = {
  legalName: "Graham Aden Troyer-Joy",
  name: "Graham",
  hometown: "Oak Park, IL, USA",
  introduce: introduce
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  hometown: "Zielona Góra, Poland",
  introduce: introduce.bind(mazen)
}
*/


// console.log(mazen.introduce())
// console.log(graham.introduce())
// console.log(sylwia.introduce())

// console.log(mazen.introduce === graham.introduce)
// console.log(mazen.introduce() === graham.introduce())


class ColorChanger {

  constructor(color){
    this.color = color

    this.button = document.createElement("button");
    this.button.innerText = `blort ${ this.color }`

    // the bind way part 1
    // this.onButtonClick = this.onButtonClick.bind(this)

    this.button.addEventListener("click", this.onButtonClick)

    document.body.append(this.button)
  }

  // the bind way part 2
  // onButtonClick() {
  //   console.log(this)
  //   document.body.style.backgroundColor = this.color;
  // }

  //the arrow function way
  onButtonClick = () => {
    console.log(this)
    document.body.style.backgroundColor = this.color;
  }


}

var thing1 = new ColorChanger("#f00");
var thing2 = new ColorChanger("#f09");
var thing3 = new ColorChanger("#000");
var thing4 = new ColorChanger("#00f");
var thing5 = new ColorChanger("#005");
var thing6 = new ColorChanger("#fa0");





// function potato(blat){
//   console.log(blat)
//   console.log(this)
//   return 5 
// }


// console.log(potato)
// console.dir(potato.call())
// console.log(potato())








